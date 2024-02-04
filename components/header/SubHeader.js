import Link from "next/link";
import React from "react";

const SubHeader = () => {
  const subHeaderData = [
    {
      value: "Stack Video",
    },
    {
      value: "Video Templates",
    },
    {
      value: "Music",
    },
    {
      value: "Sound Effects",
    },
    {
      value: "Graphic Templates",
    },
    {
      value: "Graphics",
    },
    {
      value: "Photos",
    },
    {
      value: "Fonts",
    },
    {
      value: "Add-ons",
    },
    {
      value: "More",
    },
  ];

  return (
    <div className="flex flex-row p-2 justify-around hover:cursor-pointer items-center bg-blue h-16 bg-white w-full">
      {subHeaderData.map((val, index) => (
        <Link href="https://elements.envato.com/" 
        className="font-semibold text-black hover:text-gray-500" key={index}>
          {val.value}
        </Link>
      ))}
    </div>
  );
};

export default SubHeader;
