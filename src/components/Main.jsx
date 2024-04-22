const Main = () => {
  return (
    <div className="px-[96px] py-[48px] bg-[#0c1e1b] transform translate-y-[60px] w-screen overflow-hidden">
      <div className="flex">
        <div className="w-3/5">
          <div className="text-[96px] mb-[16px] text-left font-roboto font-bold leading-tight">
            <h1 className="text-white ">
              {"India's Tech School for the "}
              <span className="text-[#2ab475]">Future World!</span>
            </h1>
          </div>
          <div className="text-[#747d82] text-[20px]">
            <p>
              {"Become a top 1% professional in "}
              <span className="text-white">Full Stack Development</span>{" "}
              {" and "}
              <span className="text-white">Data Science</span>
            </p>
          </div>
          <div className="flex justify-around mt-[24px] py-[20px] px-[16px] bg-[#142522] rounded-lg">
            <div className="flex justify-evenly w-1/2">
              <div className="text-center mx-4">
                <p className="font-roboto text-[20px] text-[#2ab475] ">1000+</p>
                <p className="font-roboto text-[16px] text-[#747d82]">
                  Students Placed
                </p>
              </div>
              <div className="text-center mx-4">
                <p className="font-roboto text-[20px] text-[#2ab475] ">
                  8.2 LPA
                </p>
                <p className="font-roboto text-[16px] text-[#747d82]">
                  Average CTC
                </p>
              </div>
            </div>
            <div className="flex justify-evenly  w-1/2">
              <div className="text-center mx-4">
                <p className="font-roboto text-[20px] text-[#2ab475] ">
                  33 LPA
                </p>
                <p className="font-roboto text-[16px] text-[#747d82]">
                  Highest CTC Job Offer
                </p>
              </div>
              <div className="text-center mx-4">
                <p className="font-roboto text-[20px] text-[#2ab475] ">800+</p>
                <p className="font-roboto text-[16px] text-[#747d82]">
                  Hiring Partners
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[30px] text-[14px] font-light text-white">
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
        <div className="pl-[86.2px] flex justify-start items-center rounded-xl z-10 overflow-hidden">
          <img
            src="https://images.geekster.in/thumbnail/header.png"
            className="w-[550px] h-[320px] rounded-xl"
          ></img>
          <img
            className="absolute transform translate-x-[193px] translate-y-[44px] z-0"
            src="https://images.geekster.in/courses/home/header/home-header.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
