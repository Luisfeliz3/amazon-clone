import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { US_CURRENCY } from '../utils/constants';
import { removeFromCart } from '../redux/cartSlice'




const CheckOut = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subTotal = useSelector((state) => state.cart.products.reduce((subTotal,product)=> subTotal + 
    (product.price * product.quantity),0));
    const dispatch = useDispatch();

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/**products */}
          <div className="col-span-6  bg-white">
            <div className="text-2xl- xl:text-3xl m-4">Shopping Cart </div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/products/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image_small}
                          />
                        </Link>
                      </div>

                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/products/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                          onClick={()=> dispatch(removeFromCart(product.id))}
                          className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1"
                          >Delete</button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center">
                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            {" "}
                            -{" "}
                          </div>

                          <div className="text-lg xl:text-xl bg-gray-200">
                            {product.quantity}
                          </div>

                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            {" "}
                            +{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">{US_CURRENCY.format(product.price)}</div>

                    </div>
                  </div>
                </div>
              );
            })}
            <div className='text-lg xl:text-xl text-right mb-4 mr-4'> Subtotal({itemsNumber}) : <span
            className="font-semibold" > {
              US_CURRENCY.format(subTotal)
            }</span></div>
          </div>
          {/**Checkout  */}
          <div className="col-span-2  bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:textsm text-green-800 mb-2">Your Order Qualifies for <span
             className="font-bold">FREE DELIVERY</span>. Delivery Details</div>
            <div className='text-base xl:text-lg  mb-4 '> Subtotal({itemsNumber}) : <span
            className="font-semibold" > { US_CURRENCY.format(subTotal)}</span></div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
