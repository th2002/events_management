import { ICategory } from '@/models/category.model';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';

type SelectDropDownProps = {
  value?: string;
  onChangeHandler: (e: Event) => void;
};

const SelectDropDown = ({ value, onChangeHandler }: SelectDropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    // Fetch categories from the server.
    // const categories = await fetchCategories();
    // setCategories(categories);
    setCategories([]);
  });

  return (
    <>
      <Select size="sm" label="Select an animal" className="max-w-xs">
        {categories.map(category => (
          <SelectItem key={category._id} value={category._id}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default SelectDropDown;

