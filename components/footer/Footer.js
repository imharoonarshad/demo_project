"use client";
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Internal Links",
    items: ["Documentaries", "Themes", "Chrome casts"],
  },
  {
    title: "Enterprise",
    items: [
      "Download Chrome Browser",
      "Chrome Browser for Enterprises",
      "Chrome Browser Devices",
      "Chrome OS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    title: "Internal Links",
    items: ["Documentaries", "Themes", "Chrome casts"],
  },
  {
    title: "Enterprise",
    items: [
      "Download Chrome Browser",
      "Chrome Browser for Enterprises",
      "Chrome Browser Devices",
      "Chrome OS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    title: "Internal Links",
    items: ["Documentaries", "Themes", "Chrome casts"],
  },
];

function Footer() {
  const handleFooterClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://similarwatch.com/';
    }
  };
  return (
    <footer className="relative flex flex-col gap-8 w-full bg-gray-100 py-4"
    //  onClick={handleFooterClick}
     >
      <div className="flex gap-4 items-center text-blue-gray-900 px-10 border-b py-6 w-full">
        <Typography variant="h5">Follow Us</Typography>
        <Typography
          as="a"
          href="#"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.26 14.945v-9.89L15.45 12l-4.71 4.945zM14 12l-4.71-4.945v9.89L14 12z"
              clip-rule="evenodd"
            />
          </svg>
        </Typography>
        <Typography
          as="a"
          href="#"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </Typography>

        <Typography
          as="a"
          href="#"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </Typography>
      </div>
      <div className="flex flex-col  px-10 ">
        <div className="grid grid-cols-1  justify-between gap-4">
          <div className="grid grid-cols-5  justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium text-black "
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li
                    key={link}
                    className={"flex gap-2 text-gray-500 opacity-80"}
                  >
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="py-1.5 font-normal  transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full  flex-col items-center  justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="h4" className=" text-center font-normal md:mb-0">
            <div className={"flex flex-row items-center  gap-2"}>
              <p className={"text-black font-bold"}>Similar</p>{" "}
              <span
                className={
                  "font-extrabold bg-black text-white rounded-xl p-2 s "
                }
              >
                {" "}
                watch{" "}
              </span>
              <ul className={"flex gap-4 text-gray-500"}>
                <li>Privacy Policy</li>
                <li>Term and conditions</li>
                <li>Cookies Policy</li>
                <li>About us</li>
                <li>EULA</li>
                <li>Contact</li>
              </ul>
            </div>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
