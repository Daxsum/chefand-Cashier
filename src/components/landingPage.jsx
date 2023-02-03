import React from "react";
import cashier from "../assets/cashier.svg";
import chef from "../assets/chef.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-grey-light font-sans leading-normal tracking-normal overflow-hidden">
      <nav
        id="header"
        className="fixed bg-orange-500 w-full z-30 top-0 text-white"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              KH
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {/* <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li> */}
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

      <div className="container mx-10 md:flex flex-col md:flex-row items-center  my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="uppercase tracking-loose text-5xl font-bold leading-tight whitespace-nowrap text-orange-600">
            Cashier Portal
          </h1>
          <h3 className="my-4 text-2xl text-center">
            Welcome Cashier! please sign in to register your attendance
          </h3>
          <p className="leading-normal mb-4">
            please contact your admin if you don't have an account!
          </p>
          <button
            onClick={() => navigate("/loginCashier")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"
          >
            Sign in
          </button>
        </div>

        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <img src={cashier} alt="cashier image" />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="uppercase tracking-loose text-5xl font-bold leading-tight whitespace-nowrap mx-2 text-orange-600">
            Chef Portal
          </h1>
          <h3 className="my-4 text-2xl text-center">
            Welcome Chef! please sign in to register your attendance
          </h3>
          <p className="leading-normal mb-4">
            please contact your admin if you don't have an account!
          </p>
          <button
            onClick={() => navigate("/loginChef")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"
          >
            Sign in
          </button>
        </div>

        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <img src={chef} alt="chef image" />
          {/* <svg
            className="fill-current text-black w-3/5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
