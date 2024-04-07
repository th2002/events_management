import { categories } from '@/constants';
import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesList = () => {
  return (
    <>
      <div className="mb-16 mt-44 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-content_primary md:text-3xl">
          Explore by <span className="text-primary">categories</span>
        </h2>
      </div>

      <div className="grid w-full grid-cols-2 items-center justify-between gap-5 sm:grid-cols-3 lg:flex">
        {categories.map(category => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </>
  );
};

export default CategoriesList;
