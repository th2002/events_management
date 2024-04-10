import {
  createCategory,
  getAllCategories
} from '@/libs/actions/category.actions';
import { ICategory } from '@/models/category.model';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal';
import { Input } from '@nextui-org/input';

type SelectDropDownProps = {
  value: string;
  onChangeHandler?: any;
};

const SelectDropDown = ({ value, onChangeHandler }: SelectDropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState('');

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim()
    }).then(category => {
      setCategories(prevState => [...prevState, category]);
    });

    onClose();
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <>
      <Select
        onSelectionChange={onChangeHandler}
        size="sm"
        label="Select an animal"
        className="max-w-xs"
        color="primary"
      >
        {categories &&
          categories.map(category => (
            <SelectItem
              key={category._id}
              value={category._id}
              color="primary"
              className="text-content_secondary"
            >
              {category.name}
            </SelectItem>
          ))}
      </Select>

      <Button color="primary" onClick={onOpen}>
        Add new category
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add categories
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Category"
                  placeholder="Enter category name"
                  onChange={e => setNewCategory(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAddCategory}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectDropDown;

