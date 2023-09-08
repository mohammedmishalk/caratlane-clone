import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';




function Card({ image, price, OgrinalPrice, name }) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);


  const navigate = useNavigate();

  const handlCheckout=()=>{

    navigate('/checkout');
  }
     
  


  return (
    <>
      <div className="w-[324px] h-[462.50px] relative">
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="px-px pt-[11px] pb-[140px] left-0 top-0 absolute bg-neutral-50 rounded-lg border border-gray-200 flex-col justify-start items-start inline-flex"
        >
          {isHovering ? (
           <img className="w-[322px] h-[322px] relative" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR01011-YG0000_11_listfront.jpg" />
        ) : (
          <img className="w-[322px] h-[322px] relative" src={image} />
        )}


          <div className="pl-2.5 top-3 pr-[14.31px] bg-orange-200 justify-start items-start inline-flex">
            {/* <div className="text-black text-[11px] font-normal uppercase leading-normal">BESTSELLER</div> */}
          </div>
        </div>
        <img
          className="w-[22px] h-[22px] left-[291px] top-[6px] absolute"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1694085062/span.css-7poyp_e40awr.png"
        />
        <div className="w-[324px] h-[136.50px] left-0 top-[326px] absolute">
          <div className="h-[24.50px] pt-1 left-0 top-[10px] absolute justify-between items-center gap-[104.90px] inline-flex">
            <div className="w-[133.16px] top-[12px] h-[28.50px] relative">
              <div className="left-0 top-[-1px] absolute text-zinc-600 text-[19px] font-normal leading-7">
                ₹{price}{" "}
              </div>
              <div className="left-[87.59px] top-[7px] absolute text-gray-600 text-xs font-normal line-through leading-[18px]">
                ₹{OgrinalPrice}
              </div>
            </div>
            <div className="justify-start items-start flex">
              <img
                className="w-[17px] h-5"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1694085040/pseudo_zy95nm.png"
              />
              <div className="text-violet-500 text-xs font-normal underline leading-[18px]">
                View Similar
              </div>
            </div>
          </div>
          <div className="left-0 top-[45.50px] absolute text-zinc-600 text-[15px] font-semibold leading-normal tracking-tight">
            Check delivery date
          </div>
          <div className="w-[9px] h-[9px] left-[157.81px] top-[40.63px] absolute origin-top-left rotate-45 rounded-sm border-r border-t border-zinc-600" />
          <div className="pr-[50px] left-0 top-[68.50px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-neutral-400 text-sm font-normal leading-[21px]">
              {name}
            </div>
          </div>
          <div className="py-[5px] left-0 top-[95.50px] absolute justify-start items-start gap-3 inline-flex">
            <div className="pl-[13.38px] pr-[12.90px] py-0.5 rounded-[10px] border border-zinc-600 justify-center items-center gap-[2.72px] flex">
              <img
                className="w-4 h-[18px]"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1694085056/pseudo_ebatue.png"
              />
              <button onClick={handlCheckout} className="text-center text-zinc-600 text-[13px] font-normal leading-[30px]">
                Book Try at Home
              </button>
            </div>
            <div className="pl-[24.25px] pr-[23.91px] pt-px pb-[3px] rounded-[10px] border border-green-400 justify-center items-center gap-[2.84px] flex">
              <img
                className="w-3.5 h-2.5"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1694085047/pseudo_dnuaxl.png"
              />
              <div className="text-center text-green-500 text-[13px] font-normal leading-[30px]">
                Live Video Call
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
