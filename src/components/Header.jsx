import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    console.log("show >> ", show);
    setShow(!show);
  };

  return (
    <div className="bg-[#0c1e1b] font-roboto absolute w-full z-50">
      <div className="flex justify-between text-white px-[96px] py-[16px]">
        <img
          src="https://www.geekster.in/Logo.svg"
          className="w-[120px] h-[32px] text-white"
        />
        <div className="flex justify-between items-center mx-2 text-[18px] h-[40px]">
          <div className="text-center px-[16px]">
            <p>Full Stack - MERN</p>
          </div>
          <div className="text-center px-[16px]">
            <p>Data Science & Gen-AI</p>
          </div>
          {show ? (
            <ul className="w-[14rem] text-center">
              <li
                className="w-[14rem] text-center p-2"
                onClick={handleShowToggle}
              >
                Level Up
              </li>
              <li className="w-[14rem] text-center p-2">
                Certification and Courses
              </li>
              <li className="w-[14rem] text-center p-2">Articles</li>
            </ul>
          ) : (
            <div
              onClick={handleShowToggle}
              className="text-center px-[16px] flex"
            >
              <p> Level Up</p>
              <div className="w-5 pl-1 flex align-items">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                  ></path>
                </svg>
              </div>
            </div>
          )}
          <div className="text-center px-[16px]">
            <p>Masterclass</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[14px]">
          <button className="text-center font-semibold px-[25px] text-[#2ab475]">
            Sign In
          </button>
          <button className="px-[16px] h-[40px] w-[212px] items-center rounded-md flex justify-center bg-[#2ab475]">
            Request a Callback
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              focusable="false"
              className=""
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
