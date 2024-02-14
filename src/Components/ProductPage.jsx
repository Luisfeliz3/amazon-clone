import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import  {callAPI}  from '../utils/CallApi'

const ProductPage = () => {
  const { id } = useParams();  // look into this ...
  const [product, setProduct] = useState(null);

const getProduct = () => { 
//storing all the product information returned from API
    callAPI(`data/products.json`)
    .then((productResults)=>{
        setProduct(productResults[id]);
    })
 }



useEffect(()=>{

getProduct();

},[]);

 if(!product?.title) return <h1> Loading Product ... </h1>;


  return( product && 
  <div>ProductPage {product.title} </div>)
};

export default ProductPage;
