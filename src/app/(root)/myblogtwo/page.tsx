"use client";

import React, { FC, useState } from "react";
import Select from "react-dropdown-select";

// type OptionProps = {
//   value: string;
//   label: string;
//   id: string;
// };

const options = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
];

const MyBlogTwo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

  const [clieck, setClicked] = useState(false);
  console.log(clieck);

  const isLabelFloating = selectedOptions.length > 0;

  return (
    <div className="mx-auto px-6 xl:px-32 py-44">
      <div>
        {/* select */}
        <div className="relative">
          <Select
            values={[]}
            labelField="name"
            valueField="id"
            placeholder=""
            multi
            options={options}
            onChange={(values: any) => setSelectedOptions(values)}
          />
          <label
            onClick={() => setClicked(!clieck)}
            htmlFor="new"
            className={`absolute mx-2 px-2 cursor-pointer  text-gray-500 bg-white  duration-300 transform 
            ${
              clieck || isLabelFloating
                ? "-translate-y-5 top-3 text-[10px]"
                : "-translate-y-1/2 top-1/2 text-sm"
            }  `}
          >
            Floating for multiple select
          </label>
        </div>
        <br />

        <br />

        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Floating outlined
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyBlogTwo;
