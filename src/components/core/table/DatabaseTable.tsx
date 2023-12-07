import React, { FC } from "react";

type TableProps = {
  columns: any;
  data: any;
};

const DataBaseTable: FC<TableProps> = ({ columns, data }) => {
  return (
    <>
      <div className="">
        <div className="w-full  overflow-y-auto lg:min-h-[200px]">
          <table className="w-full text-left">
            <thead className="text-hs-R2 sticky z-10 top-0 w-full h-fit bg-hs-Card-Upper ">
              <tr className="border">
                <th>Title 1</th>
                <th>Title 1</th>
                <th>Title 1</th>
              </tr>
            </thead>
            <tbody className="h-1/2 w-full text-hs-R2-tab">
              <tr>
                <td>sdgsh</td>
                <td>sdgsh</td>
                <td>sdgsh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataBaseTable;
