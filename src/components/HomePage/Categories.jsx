import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async () => {

    const categories = await getAllCategories();
    // console.log(categories);
    return (
        <div>
            <h1>Categories...!</h1>
            <h1>{categories[1].name}</h1>
            {
                categories.map((category) => {
                    <SingleCategory category={category} key={category.id}></SingleCategory>
                })
            }
        </div>
    );
};

export default Categories;