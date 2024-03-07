import Image from 'next/image';
import React from 'react';
import bike from '@/assets/about-b.jpg';

const AddBikePage = () => {
    return (
        <div className='text-center text-4xl font-semibold container'>
            <h2 className='mt-6 mb-12'>You can add your bike!</h2>
            <Image src={bike} alt=""></Image>
        </div>
    );
};

export default AddBikePage;