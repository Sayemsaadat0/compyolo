import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Drop = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-black" asChild>
          <button>CLick</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>CLick</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>item 1</DropdownMenuItem>
            <DropdownMenuItem>item 2</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Drop;
