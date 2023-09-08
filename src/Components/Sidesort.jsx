import React from 'react'
import Card from './Card'
import Filter from './Filter'

function Sidesort() {
  return (
  <>


<div className="w-[1903px] h-[1770px] px-[231.50px] bg-white flex-col justify-start items-center inline-flex">
  <div className="w-[1440px] h-[1779px] relative">
    


<Filter/>

    <div className="w-[1068px] h-[1770px] top-14 left-[372px]  absolute">
      <div className="p-3 left-[12px] top-[12px] absolute flex-col justify-start items-start inline-flex">
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <Card name={"Emma Flora Diamond Ring"} OgrinalPrice={"75,508"} price={"67,299"} image={"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg"} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <Card  price={"61,773"} OgrinalPrice={"68,469"} name={"Ally Cluster Diamond Ring"} image={"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR00157-WGP900_12_listhover.jpg"}/>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <Card name={"Emily Diamond Crush Ring"} price={"22,310"} OgrinalPrice={"23,533"} image={"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02174-WGP900_11_listfront.jpg"} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <Card name={"Glow Solitaire Bridal Ring Set"} price={"1,23,056"} OgrinalPrice={"1,31,967"} image={"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR01011-YG0000_11_listfront.jpg"} />
      </div>
    </div>
       
       
       
        </div>
        </div>










  </div>
  
</div>
  </>
  )
}

export default Sidesort