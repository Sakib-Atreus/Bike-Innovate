import Banner from "@/components/HomePage/Banner";
import Categories from "@/components/HomePage/Categories";
import FeaturedBike from "@/components/HomePage/FeaturedBike";
import LatestBikeUpdate from "@/components/HomePage/LatestBikeUpdate";
import ReviewBike from "@/components/HomePage/ReviewBike";

export  const revalidate = 5;

const HomePage = () => {

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <Banner></Banner>
      <FeaturedBike></FeaturedBike>
      <LatestBikeUpdate></LatestBikeUpdate>
      <ReviewBike></ReviewBike>
      {/* <Categories></Categories> */}
    </main>
  );
}

export default HomePage;