import React from "react";
import wordPdf from "../../public/ConvertToPdf/wordPdf.png";
import PptPdf from "../../public/ConvertToPdf/PptPdf.png";
import ExcelPdf from "../../public/ConvertToPdf/ExcelPdf.png";
import JpgPdf from "../../public/ConvertToPdf/JpgPdf.png";
import TxtPdf from "../../public/ConvertToPdf/TxtPdf.png";
import Image from "next/image";

const ConvertToPdf = () => {
  const convertPdf = [
    {
      img: wordPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: " Word to PDF",
    },
    {
      img: PptPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PPT to PDF",
    },
    {
      img: ExcelPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: " Excel to PDF",
    },
    {
      img: JpgPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "JPG to PDF",
    },
    {
      img: TxtPdf,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "TXT to PDF",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-14">
      <p className="text-[35px] font-bold text-black">Convert To PDF</p>
      <div className="flex flex-row gap-8">
        {convertPdf.map((val, index) => {
          return (
            <div
              className="border flex flex-col p-8 pr-12 w-[15%] rounded-xl gap-3 cursor-pointer hover:shadow-lg"
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
export default ConvertToPdf;
