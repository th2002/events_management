import React from 'react';
import { IconType } from 'react-icons';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    Icon: IconType;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="flex h-[154px] w-[154px] cursor-pointer flex-col items-center justify-center gap-3 bg-foreground hover:bg-gray-300 md:w-[211px]">
      <category.Icon className="text-primary" size={35} />
      <span className="text-content_secondary">{category.name}</span>
    </div>
  );
};

export default CategoryCard;

