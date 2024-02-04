import React from "react";
import editPdf from "../../public/yourBookmarks/editPdf.png";
import cropPdf from "../../public/yourBookmarks/cropPdf.png";
import replaceText from "../../public/yourBookmarks/replaceText.png";
import rotatePdf from "../../public/yourBookmarks/rotatePdf.png";
import Image from "next/image";

const YourBookmarks = () => {
  const yourBookmarks = [
    {
      img: editPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "Edit PDF",
    },
    {
      img: cropPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "Crop PDF",
    },
    {
      img: replaceText,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "Replace Text",
    },
    {
      img: rotatePdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "Rotate PDF",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-14">
      <p className="text-[35px] font-bold text-black">Your Bookmarks</p>
      <div className="flex flex-row gap-8">
        {yourBookmarks.map((val, index) => {
          return (
            <div
              className="hover:shadow-lg border flex flex-col p-8 pr-12 w-[15%] rounded-xl gap-3 cursor-pointer"
              key={index}
            >
              <Image src={val.img} alt="editPdf" className="w-20 h-20" />
              <p className="text-[20px] font-bold">{val.heading}</p>
              <p className="text-[#9A9A9A]">{val.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourBookmarks;
