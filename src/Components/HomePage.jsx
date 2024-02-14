import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

// className='grid grid-cols-3 xl:grid-cols-4' creates  responsice grid
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-500">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See Terms and Conditions"}
          />

          <HomePageCard
            title={"Watch The Rings Of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />

          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find Out More"}
          />

          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle unlimited"}
          />

          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See More"}
          />

          <HomePageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See The Deals"}
          />

          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See More"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn More"}
          />
        </div>
 </div>
 <CarouselProduct/>
   <CarouselCategory/>
   <div className="h-[200px]">

    <img
    className="h-[100%] m-auto"
    src={"../images/banner_image.jpg"}
    />
   </div>
      <div className=" m-3 pt-8">
        <img
        className="xl:hidden"
        src={"../images/banner_image_2.jpg"}
        />
      </div>
    </div>
  );
};

export default HomePage;
