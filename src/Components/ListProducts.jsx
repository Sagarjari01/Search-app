import React from "react";

const ListProducts = ({searchedItems}) => {
  return (
    <div className="flex justify-center">
      <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
      {searchedItems.map(item=>(
        <li className=" cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
          {item.title}
        </li>)
        )} 
      </ul>
    </div>
  );
};

export default ListProducts;
