import Banner from "@/components/HomePage/Banner";
import Categories from "@/components/HomePage/Categories";
import FeaturedBike from "@/components/HomePage/FeaturedBike";

export  const revalidate = 5;

const HomePage = () => {

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <Banner></Banner>
      <FeaturedBike></FeaturedBike>
      {/* <Categories></Categories> */}
    </main>
  );
}

export default HomePage;