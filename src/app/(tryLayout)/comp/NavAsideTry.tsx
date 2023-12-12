import Link from "next/link";
import React from "react";

const NavAsideTry = () => {
  return (
    <div className="h-96 w-80 p-10 border fixed">
      <Link className="border" href="/profile">
        Profile
      </Link>
      <br /> <br />
      <Link className="border " href="/profile/courses">
        courses
      </Link>
    </div>
  );
};

export default NavAsideTry;
