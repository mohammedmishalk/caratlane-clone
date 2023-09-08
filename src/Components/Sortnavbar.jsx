import React from 'react'

function Sortnavbar({name}) {
  return (
   <>
   <div className="w-[1903px] h-[104px] relative bg-gradient-to-r from-amber-100 via-fuchsia-200 to-violet-300 border-b border-gray-200">
  <div className="h-[89px] pb-2.5 left-[24px] top-[8px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="w-[1203.75px] pl-[5px] pr-[1091.12px] pb-0.5 justify-start items-end gap-3.5 inline-flex">
      <div className="pt-[5px] justify-start items-end gap-[2.63px] flex">
        <div className="text-black text-[11px] font-normal leading-none">{name}</div>
        <img className="w-[18px] h-[18px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1694082328/cross_swbqap.png" />
      </div>
      <div className="text-black text-[11px] font-normal underline leading-none">Clear All</div>
    </div>
    <div className="w-[1203.75px] pr-[671.42px] justify-start items-start inline-flex">
      <div className="pr-[22px] flex-col justify-start items-start inline-flex">
        <div className="w-[40.52px] pl-[13.36px] pr-[13.16px] py-px bg-violet-500 rounded-xl border border-violet-500 flex-col justify-start items-center flex">
          <div className="text-center text-white text-xs font-normal leading-10">All</div>
        </div>
      </div>
      <div className="pr-[22.34px] flex-col justify-start items-start inline-flex">
        <div className="w-24 px-[13px] py-px bg-white rounded-xl border border-gray-200 flex-col justify-start items-center flex">
          <div className="text-center text-zinc-600 text-xs font-normal leading-10">Try at Home</div>
        </div>
      </div>
      <div className="pr-[21.95px] flex-col justify-start items-start inline-flex">
        <div className="w-[119px] px-[13px] py-px bg-white rounded-xl border border-gray-200 flex-col justify-start items-center flex">
          <div className="text-center text-zinc-600 text-xs font-normal leading-10">Designs in Store</div>
        </div>
      </div>
      <div className="pr-[22px] flex-col justify-start items-start inline-flex">
        <div className="w-[100.48px] pl-[13.34px] pr-[13.14px] py-px bg-white rounded-xl border border-gray-200 flex-col justify-start items-center flex">
          <div className="text-center text-zinc-600 text-xs font-normal leading-10">Fast Delivery</div>
        </div>
      </div>
      <div className="pr-[22.03px] flex-col justify-start items-start inline-flex">
        <div className="w-[66px] px-[13px] py-px bg-white rounded-xl border border-gray-200 flex-col justify-start items-center flex">
          <div className="text-center text-zinc-600 text-xs font-normal leading-10">New In</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[647.25px] pl-[306.63px] pr-[29.99px] left-[1231.75px] top-[45px] absolute justify-end items-start inline-flex">
    <div className="relative">
      <select className="w-[308.63px] h-10 pt-3 pl-3 pr-[10.63px] border-r border-gray-200 flex-col justify-start items-start inline-flex outline-none">
        <option value="featured">Sort By: Featured</option>
        <option value="newest">Sort By: Newest</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 10.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-.53.22z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Sortnavbar