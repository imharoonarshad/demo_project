import React from "react";
import pdfWord from "../../public/ConvertFromPdf/pdfWord.png";
import pdfPPT from "../../public/ConvertFromPdf/pdfPPT.png";
import pdfExcel from "../../public/ConvertFromPdf/pdfExcel.png";
import pdfJPG from "../../public/ConvertFromPdf/pdfJPG.png";
import pdfTXT from "../../public/ConvertFromPdf/pdfTXT.png";
import Image from "next/image";

const ConvertFromPdf = () => {
  const convertPdf = [
    {
      img: pdfWord,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PDF to Word",
    },
    {
      img: pdfPPT,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PDF to PPT",
    },
    {
      img: pdfExcel,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PDF to Excel",
    },
    {
      img: pdfJPG,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PDF to JPG",
    },
    {
      img: pdfTXT,
      text: "use the best online tool to edit PDFs in your browser",
      heading: "PDF to TXT",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-14">
      <p className="text-[35px] font-bold text-black">Convert From PDF</p>
      <div className="flex flex-row gap-8">
        {convertPdf.map((val, index) => {
          return (
            <div
              className="border flex flex-col p-8 pr-12 w-[15%] rounded-xl gap-3 cursor-pointer hover:shadow-lg"
              key={index}
            >
              <Image src={val.img} alt={val.img} className="w-20 h-20" />
              <p className="text-[20px] font-bold">{val.heading}</p>
              <p className="text-[#9A9A9A]">{val.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConvertFromPdf;
