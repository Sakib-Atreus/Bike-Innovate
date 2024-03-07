import React from 'react';
import banner from "@/assets/banner/bike.jpg"
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <Image src={banner} alt=""></Image>
        </div>
    );
};

export default Banner;