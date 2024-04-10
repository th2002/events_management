'use client';

import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

const DropDownMenu = () => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" size="sm" variant="bordered">
            menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="create" color="default">
            <Link href="/events/create" className="text-content_secondary">
              Create event
            </Link>
          </DropdownItem>
          <DropdownItem key="update" color="default">
            <Link href="/events/update" className="text-content_secondary">
              Update event
            </Link>
          </DropdownItem>
          <DropdownItem key="dashboard" color="default">
            <Link href="/profile" className="text-content_secondary">
              Profile
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default DropDownMenu;

