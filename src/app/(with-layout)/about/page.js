import React from "react";
import aboutB from "@/assets/about-b.jpg";
import Image from "next/image";

export const metadata = {
  title: "About | Bike Innovate - Next.js",
  description: "Generated by create next app",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto text-3xl text-center">
      <Image src={aboutB} alt=""></Image>
      <div className="text-center my-24">
        <p className="text-4xl font-medium text-blue-500">
          About This Website
        </p>
        <hr className="border-2 border-blue-400 w-40 mx-auto" />

        <p className="text-sm mt-12 mx-24 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita possimus ducimus molestias explicabo optio, similique error, saepe voluptas deserunt perspiciatis iure quis eos et dolorum. Odio sit laboriosam possimus pariatur assumenda laborum incidunt id voluptatum et velit dignissimos omnis repudiandae eos tenetur, iusto nihil? Omnis, aut quo autem quod pariatur et soluta ratione unde reiciendis ducimus at porro sequi veniam iusto illum impedit labore ex odit! Blanditiis, obcaecati ratione non, reiciendis eveniet sed maxime fugit quo, commodi voluptatem suscipit excepturi? Animi magnam sint culpa adipisci accusamus et veniam. Dolore voluptatum nisi dignissimos nostrum ducimus commodi molestias eligendi optio reiciendis.</p>
      </div>
    </div>
  );
};

export default AboutPage;
