import React from "react";
import YourBookmarks from "./YourBookmarks";
import ConvertFromPdf from "./ConvertFromPdf";
import ConvertToPdf from "./ConvertToPdf";
import ConvertFromPdfSlider from "./ConvertFromPdfSlider";

const MainContent = () => {
  return (
    <div className="p-20 pt-14 flex-col flex gap-14">
      <YourBookmarks />
      <ConvertFromPdfSlider />
      <ConvertFromPdf />
      <ConvertToPdf />
    </div>
  );
};

export default MainContent;
