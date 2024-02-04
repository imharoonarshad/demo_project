"use client";
import React, { useState } from "react";
import pdfWord from "../../public/ConvertFromPdf/pdfWord.png";
import pdfPPT from "../../public/ConvertFromPdf/pdfPPT.png";
import pdfExcel from "../../public/ConvertFromPdf/pdfExcel.png";
import pdfJPG from "../../public/ConvertFromPdf/pdfJPG.png";
import pdfTXT from "../../public/ConvertFromPdf/pdfTXT.png";
import saveButton from "../../public/saveIcon.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import arrowIcon from "../../public/arrowIcon.png";

const ConvertFromPdfSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
  ];

  return (
    <div className="w-full flex flex-col gap-14">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[35px] font-bold text-black">Convert From PDF</p>
        <div className="bg-slate-100 hover:bg-slate-200 cursor-pointer p-3 rounded-3xl flex-row flex items-center gap-3">
          <p className="font-semibold text-[16px]">All</p>
          <Image src={arrowIcon} alt="arrowIcon" className="w-4 h-4" />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 6,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full flex flex-row gap-10"
      >
        {convertPdf.map((val, index) => (
          <SwiperSlide
            className="border flex flex-col p-8 pr-12 w-[16%] rounded-xl gap-3 cursor-pointer hover:shadow-2xl"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={saveButton}
              alt="saveIcon"
              className={`w-5 h-6 ml-[73%] absolute ${
                hoveredIndex === index ? "visible" : "hidden"
              }`}
            />
            <Image src={val.img} alt="editPdf" className="w-20 h-20" />
            <p className="text-[20px] font-bold mt-3 mb-3">{val.heading}</p>
            <p className="text-[#9A9A9A]">{val.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConvertFromPdfSlider;
