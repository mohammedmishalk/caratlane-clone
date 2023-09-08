import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const showRingPage = () => {
    navigate("/");
  };

  const showEarringPage = () => {
    navigate("/earrings");
  };

  return (
    <>
      <div className="w-[1903px] h-8  bg-[#4F3267] pl-[826.09px] pr-[819.72px] m-0 pt-[2.75px] pb-[3.75px] justify-center items-center gap-[6.20px] inline-flex">
        <div className="text-center text-white text-[10px] font-normal leading-none">
          Introducing CaratLane PoP! Plan your purchase  
        </div>
        <div className="pb-[0.50px] flex-col justify-start items-center inline-flex">
          <div className="text-center text-red-200 text-[10px] font-normal leading-none">
            here
          </div>
        </div>
      </div>

      <div className="w-[1903px] h-[72px] pl-4 bg-violet-50 justify-between items-center gap-8 inline-flex">
        <div className="pt-3 pb-[22.25px] justify-center items-start flex">
          <img
            className="w-[140px] h-[40px]"
            src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693978190/SVG_vxbcrx.png"
          />
        </div>
        <div className="grow shrink basis-0 h-[27px] pl-[98.55px] pr-[130.61px] justify-between items-start gap-[105.50px] flex">
          <div className="pr-3 flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-6 h-6 p-0.5 justify-center items-center flex">
                <img
                  className="w-5 h-5"
                  src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693978988/pseudo_eegxtg.png"
                />
              </div>
              <div className="pl-2 pr-[6.72px] flex-row items-start group">
                <div className="text-zinc-600 text-[10px] font-normal leading-[20px] whitespace-nowrap">
                  FREE TRY AT HOME
                </div>
                <span className="absolute -bottom-1  left-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              </div>
            </div>
          </div>
          <div className="pr-3 flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-6 h-6 p-0.5 justify-center items-center flex">
                <img
                  className="w-5 h-5"
                  src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693980149/pseudo_t3psd2.png"
                />
              </div>
              <div className="pl-2 pr-[6.72px] flex-row items-start group">
                <div className="text-zinc-600 text-[10px] font-normal leading-[20px] whitespace-nowrap">
                  FIND STORE
                </div>
                <span className="absolute -bottom-1  left-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              </div>
            </div>
          </div>
          <div className="pr-3 flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-6 h-6 p-0.5 justify-center items-center flex">
                <img
                  className="w-5 h-5"
                  src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693980149/pseudo_t3psd2.png"
                />
              </div>
              <div className="group relative pl-2 flex-col justify-start items-start inline-flex">
                <span className="text-zinc-600 text-[10px] font-normal leading-[20px] whitespace-nowrap">
                  PLAN OF PURCHASE
                </span>
                <span className="absolute -bottom-1  left-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              </div>
            </div>
          </div>
          <div className="pr-3 flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-6 h-6 px-px py-0.5 justify-center items-center flex">
                <img
                  className="w-[22px] h-5"
                  src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693981596/pseudo_taszww.png"
                />
              </div>
              <div className="w-[108.38px] h-[27px] relative">
                <div className="left-[8px] top-[1px] absolute text-fuchsia-500 text-[8px] font-semibold leading-[4px] tracking-wide">
                  NEW
                </div>
                <div className="pl-2 pr-[8.38px] left-0 top-0 absolute flex-col justify-start items-start inline-flex group">
                  <div className="text-zinc-600 text-[10px] font-normal leading-[20px] whitespace-nowrap ">
                    BUY DIGITAL GOLD
                  </div>
                  <span className="absolute -bottom-1  left-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[1.5px] bg-fuchsia-500 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[295px] flex-col justify-start items-start inline-flex">
          <div className="pl-3 pr-[68px] pt-2.5 pb-3 bg-white rounded border border-fuchsia-500 justify-start items-start inline-flex relative">
            <div className="w-[215px] h-[11px] pr-[177px] flex-col justify-start items-start inline-flex">
              <div className="text-gray-800 text-[11px] font-semibold capitalize">
                Search
              </div>
            </div>
            <div className="absolute right-0 top-0 h-[33px] px-[11px] py-[5.50px] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-tr rounded-br flex justify-center items-center">
              <img
                className="w-5 h-5"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693982627/pseudo_yuq1ql.png"
              />
            </div>
          </div>
        </div>

        <div className="w-[76px] self-stretch pt-[24.50px] pb-[28.50px] justify-center items-end flex">
          <img
            className="w-[18px] h-[19px]"
            src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693983174/span.css-fnjmj3_qoktmx.png"
          />
          <div className="px-1 pt-px justify-center items-center flex">
            <div className="text-center text-neutral-700 text-[11px] font-normal">
              PINCODE
            </div>
          </div>
        </div>
        <div className="w-[250.67px] self-stretch bg-violet-50 justify-between items-start flex">
          <div className="grow shrink basis-0  pl-2.5 pr-[0.03px] justify-between items-start gap-[4.70px] flex">
            <div className="w-12 self-stretch px-3 py-6 justify-center items-center flex">
              <img
                className="w-6 h-6 rounded-xl"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693983152/span.e1cbri7f0_w5vfdx.jpg"
              />
            </div>

            {/* profile */}

            <div className="group w-12  justify-center items-center flex">
              <button className="w-12 self-stretch px-3.5 py-[26px] justify-center items-center flex group">
                <img
                  className="w-5 h-5"
                  src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693983502/span.css-f3lyis_psbzua.png"
                />
              </button>

              {/* menu list */}

              {/* card */}

              <div className=" z-10 w-[310.98px] h-[158px] top-16 absolute hidden bg-slate-100  right-1 group-hover:block transition-opacity duration-1000">
                <div className="z-10 left-[32px] top-[15px] absolute text-neutral-700 text-2xl font-normal leading-9">
                  Your Account
                </div>
                <div className=" z-10 left-[32px] top-[70px] absolute text-gray-800 text-[13px] font-normal leading-snug">
                  Access account & manage your orders.
                </div>
                <div className=" z-10 w-[246.98px] pr-[28.98px] left-[32px] top-[106px] absolute justify-start items-center gap-[18px] inline-flex">
                  <div className="w-[100px] h-9 pl-[24.09px] pr-[23.91px] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-md flex-col justify-start items-center inline-flex">
                    <button
                      className="text-center text-white text-sm font-normal leading-9"
                      onClick={handleCreateAccountClick}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="pl-[29.60px] pr-[29.40px] rounded-md border border-fuchsia-500 justify-center items-center flex">
                    <button
                      className="text-center text-gray-800 text-sm font-normal leading-9"
                      onClick={handleLoginClick}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* profile */}

            <div className="w-12 self-stretch px-3.5 py-[26px] justify-center items-center flex">
              <img
                className="w-5 h-5"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693983490/span.css-1p5wqgs_ihkbxr.png"
              />
            </div>
            <div className="w-12 self-stretch px-3 py-6 justify-center items-center flex">
              <img
                className="w-6 h-6 rounded-xl"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693983478/span.css-1ohqg02_au4m7u.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1903px] h-[42px] bg-neutral-50 shadow flex-col justify-start items-start inline-flex">
        <div className="w-[1903px] pl-[431.84px] pr-[431.85px] justify-center items-start gap-7 inline-flex">
          <div className="w-[93.06px] pl-[11.13px] pr-[10.93px] pb-px bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-stone-950 text-[10px] font-normal leading-[42px]">
              BEST SELLERS
            </div>
          </div>
          <div className="pl-[9.82px] pr-[9.62px] bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-violet-500 text-[11px] font-normal leading-[42px]">
              NEW ARRIVALS
            </div>
          </div>
          <div className="px-2 bg-neutral-50 justify-center items-start flex">
            <button
              className="text-center text-stone-950 text-[11px] font-normal leading-[42px]"
              onClick={showRingPage}
            >
              RINGS
            </button>
          </div>
          <div className="pl-[8.65px] pr-[8.44px] bg-neutral-50 justify-center items-start flex">
            <button
              className="text-center text-stone-950 text-[11px] font-normal leading-[42px]"
              onClick={showEarringPage}
            >
              EARRINGS
            </button>
          </div>
          <div className="pl-[8.43px] pr-[8.23px] bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-stone-950 text-[11px] font-normal leading-[42px]">
              BRACELETS & BANGLES
            </div>
          </div>
          <div className="pl-[8.32px] pr-[8.13px] bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-stone-950 text-[11px] font-normal leading-[42px]">
              SOLITAIRES
            </div>
          </div>
          <div className="px-2 bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-violet-500 text-[11px] font-normal leading-[42px]">
              SPECIAL DEALS
            </div>
          </div>
          <div className="pl-[7.81px] pr-[7.60px] bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-stone-950 text-[11px] font-normal leading-[42px]">
              OTHER JEWELLERY
            </div>
          </div>
          <div className="w-[59.34px] pl-[9.77px] pr-[9.57px] pb-px bg-neutral-50 justify-center items-start flex">
            <div className="text-center text-stone-950 text-[10px] font-normal leading-[42px]">
              GIFTING
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
