import wait from "./wait";

const getAllCategories = async () => {
    await wait();
  const res = await fetch("http://localhost:5000/categories", 
    // {
    //     next: {
    //     revalidate: 5,
    //     },
    // }
  );
  return res.json();
};

export default getAllCategories;
