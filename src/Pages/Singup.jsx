import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';


function Singup() {

    const navigate = useNavigate();

    const handleCreateAccountClick = () => {
     
      navigate('/signup');
    };
  



  return (
   <>
   <Navbar/>


   <div className="w-[355px]  h-[753px]   left-[6px] relative">
 
            <div className="w-[101.25px] h-[101.25px] left-[880px]  top-[70px] absolute">        
            <img className="w-[76.87px] h-[76.87px] left-[12.19px] top-[12.19px] absolute" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693991076/image_processing20210324-852-mwyt31_axujxb.gif" />
          </div>
               
          <div className="left-[765px] top-[180px] absolute text-center  text-zinc-600 text-[17px] font-bold leading-[18px]" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
    Login to CaratLane <br />
    <span className='font-light'>Login to unlock best prices and become an insider for our<br/>exclusive launches & offers. Complete your profile and get<br/>₹250 worth of xCLusive Points.</span> 
  </div>

  

  <div >

    <input className="h-12 pl-4 pr-44 focus:outline-violet-500 left-[765px] top-[290px] absolute bg-gray-100 rounded-xl justify-end items-center inline-flex" placeholder='Enter Mobile Number or Email'/>
 
</div>

  <div className="w-[355px] h-12 pl-[105.61px] pr-[105.39px] left-[775px] top-[360px] absolute bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-xl justify-start items-start inline-flex">
    <button className="text-center  text-white text-sm font-normal leading-[42px]"><strong>CONTINUE TO LOGIN</strong></button>
  </div>

  <div className="w-[355px] pl-[68.60px] pr-[68.29px] left-[775px] top-[465px] absolute justify-center items-start gap-[3.10px] inline-flex">
    <div className="text-center text-zinc-600 text-xs font-normal leading-[18px]">New to CaratLane?</div>
    <button className="text-center text-fuchsia-500 text-xs font-normal leading-[18px]" onClick={handleCreateAccountClick}>Create an Account</button>
    <br/>

  </div>

  



  
  <div className="w-[355px] left-[770px]  px-[117.50px]  top-[500px] absolute justify-center items-start ">
  {/* <div className="font-normal inline mr-2">You can also login with</div> */}


    <div className="pt-[94px] flex-col justify-start items-start inline-flex">
        
      <div className="w-[52px] pl-[9px] pr-2 pt-[11.09px] pb-[5.91px] bg-white rounded-[26px] shadow justify-center items-center inline-flex">
        <img className="w-[35px] h-[35px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693988978/pseudo_mwg5zz.png" />
      </div>
    </div>
    <div className="pl-4 pt-[94px] flex-col justify-start items-start inline-flex">
      <div className="w-[52px] pl-[9px] pr-2 pt-[7.50px] pb-[9.50px] bg-white rounded-[26px] shadow justify-center items-center inline-flex">
        <img className="w-[35px] h-[35px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693988965/pseudo_izcok0.png" />
      </div>
    </div>
  </div>
</div>


   
   <Footer/>
 </>
  )
}

export default Singup