'use client'
import React from "react";
import SubHeader from "./SubHeader";
import Image from "next/image";
import logo from "../../public/logo.png"

const HeaderPage = () => {
  const handleLogoClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://similarwatch.com/';
    }
  };
  return (
    <div className="flex flex-col border-b-1 shadow-md border-gray-500 p-4">
      <div className="flex flex-row justify-between items-center bg-blue h-16 bg-white w-full">
        <Image src={logo} alt="logo" className="cursor-pointer" onClick={handleLogoClick}/>
        <div className="flex  items-center justify-center gap-2 w-[30%]">
          <input
            type="text"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
            className="border border-gray-200 p-3 bg-[#f2f2f2] pr-14 w-full rounded-full"
          />
          <span
            class="input-group-text absolute ml-[26%] flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="flex gap-2">
          <button className=" font-semibold text-black hover:text-gray-500 p-2 rounded-md">Login</button>
          <button className="bg-[#4866e2] h-[50px] w-[120px] font-semibold text-white hover:text-black p-2 rounded-full">
            Signup
          </button>
        </div>
      </div>
      <div>
        <SubHeader />
      </div>
    </div>
  );
};

export default HeaderPage;
