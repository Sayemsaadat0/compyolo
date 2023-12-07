"use client";
import { NavMenuData } from "@/data/NavMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// main menu
type MainmenuProps = {
  title: string;
  url: string;
};

const MainMenu: FC<MainmenuProps> = ({ title, url }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={url}
        className={` text-white ${
          pathname == url ? "bg-blue-500" : "text-red-200 bg-green-500"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

// sub menu
type SUbMenuPRops = {
  title: string;
  subMenu: { title: string; url: string }[];
};
const SubMenu: FC<SUbMenuPRops> = ({ title, subMenu }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="group">
      <div className="relative ">
        <li
          className={`text-white list-none cursor-pointer  ${
            pathname == "/dashboard" ? "bg-green-700" : "bg-red-600"
          }`}
        >
          {title}
        </li>
        <div className="group-hover:top-6 absolute transition-all duration-300  top-[-200px] ">
          <div className="border bg-blue-200 w-36 h-20 ">
            {subMenu?.map((i) => {
              return (
                <div className="border py-1" key={Math.random()}>
                  <Link className="" href={i.url}>
                    {i.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
<DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
  <DropdownMenuTrigger className="text-black" asChild>
    <button
      className={`${
        pathname == "/dashboard"
          ? "bg-blue-500"
          : pathname == "/dashboard/routeOne" && "bg-red-500"
      }`}
    >
      {title}
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
      <div>
        {subMenu?.map((i) => {
          return (
            <div key={Math.random()}>
              <DropdownMenuItem onClick={() => setOpen(!open)}>
                <Link href={i.url}>{i.title}</Link>
              </DropdownMenuItem>
            </div>
          );
        })}
      </div>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
</div> */
}

// const SubMenu = ({
//     title,
//     subMenu,
//   }: {
//     title: string;
//     subMenu: { title: string; url: string }[];
//   }) => {
//     return (
//       <div>
//         <ul>
//           <li>{title}</li>
//           <div>
//             {subMenu?.map((i) => {
//               return (
//                 <div key={Math.random()}>
//                   <Link href={i.url}>{i.title}</Link>
//                 </div>
//               );
//             })}
//           </div>
//         </ul>
//       </div>
//     );
//   };

// default
const NavMenuList = () => {
  return (
    <div className="flex gap-10">
      {NavMenuData?.map((i: any) => {
        return (
          <div key={Math.random()}>
            {i.subMenu ? (
              <SubMenu title={i.title} subMenu={i.subMenu} />
            ) : (
              <MainMenu {...i} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavMenuList;
