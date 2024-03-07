// "use client";

// import { useParams, useSearchParams } from "next/navigation";
import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React from "react";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);

    return{
        title: title,
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();

    return blogs.map((id) => ({
        id: id.toString(),
    }))
}

const SingleBlog = async ({ params }) => {
  // const [year, id] = params.segments || [];
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();

  const {id, title, body} = await loadSingleBlogData(params.id);

  return (
    <div className="container mx-auto">
        <h1 className="text-center text-3xl font-semibold my-12">Single Blog : {params.id} {params.title}</h1>

        <div className="border border-blue-500 my-2 mx-2 p-4 mb-24">
          <h2 className="text-3xl">{id}. {title}</h2>
          <p className="text-xl mt-12 p-8">{body}</p>
        </div>

      {/* <h2>
        Single Blog {year || new Date().getFullYear()} for {id}
      </h2>
      <br />
      {searchParams.title} */}
    </div>
  );
};

export default SingleBlog;
