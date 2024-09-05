'use client'

import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Link } from '@nextui-org/react';


export default function Home() {

  return (
    <div className="flex items-center justify-center">
      <ul>
        <li>
          <Link href="/dashboard">
            Link al Dashboard
          </Link>
        </li>
      </ul>


        <Dropdown className='pt-8'>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
    
  )
}
