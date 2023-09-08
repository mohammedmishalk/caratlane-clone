import { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';


export default function Login() {


  const navigate = useNavigate();

  const handleLoginClick = () => {
   
    navigate('/login');
  };

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  return (
    <>
    <Navbar/>


    <div className="w-[1903px] h-[1090.50px] px-[588px] bg-white flex-col justify-start items-center inline-flex">
  <div className="w-[727px] h-[1090.50px] relative">
    <div className="w-[727px] h-72 left-0 top-[83px] absolute">
      <div className="w-[50px] h-36 py-[47px] left-[338.50px] top-0 absolute flex-col justify-center items-center inline-flex">
        <div className="w-[50px] h-[50px] relative">
          <div className="w-[101.25px] h-[101.25px] left-[-25.62px] top-[-25.62px] absolute">
            <div className="w-[101.25px] h-[101.25px] left-0 top-0 absolute">
              <div className="w-[101.25px] h-[101.25px] left-0 top-0 absolute">
                <div className="w-[101.25px] h-[101.25px] left-0 top-0 absolute">
                </div>
                <img className="w-[76.88px] h-[76.88px] left-[12.19px] top-[12.19px] absolute" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693991076/image_processing20210324-852-mwyt31_axujxb.gif" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="h-[92px] pl-[3.09px] pr-[2.91px] pb-[38px] left-[189px] top-[196px] absolute flex-col justify-start items-center inline-flex">
        <div className="text-center text-zinc-600 text-xs font-normal leading-[18px]">Unlock Best prices and become an insider for our exclusive<br/>launches & offers. Complete your profile and get ₹250 worth<br/>of xCLusive Points.</div>
      </div>
      <div className="left-[272.10px] top-[167px] absolute text-center text-zinc-600 text-[17px] font-normal leading-[18px]" style={{ fontWeight: 'bold' }}>Signup with CaratLane</div>

    </div>
    <div className="w-[727px] px-[303.50px] pt-[15px] left-0 top-[371px] absolute justify-center items-start inline-flex">
      <div className="pb-7 flex-col justify-start items-start inline-flex">
        <div className="w-[52px] pl-[9px] pr-2 pt-[9.09px] pb-[5.91px] bg-white rounded-[26px] shadow justify-center items-center inline-flex">
          <img className="w-[35px] top-20 h-[35px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693988965/pseudo_izcok0.png" />
        </div>
      </div>
      <div className="pl-4 pb-7 flex-col justify-start items-start inline-flex">
        <div className="w-[52px] pl-[9px] pr-2 pt-[7.50px] pb-[9.50px] bg-white rounded-[26px] shadow justify-center items-center inline-flex">
          <img className="w-[35px] h-[35px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693988978/pseudo_mwg5zz.png" />
        </div>
      </div>
    </div>
    <div className="left-[180px] pl-[0.01px] top-[500px] absolute flex-col justify-start items-center inline-flex">
  <div className="text-center text-zinc-600 text-[11px] font-normal leading-[15px] relative">
    <div className="flex items-center justify-center">
      <span className="w-[132px] h-[3px] bg-gradient-to-l style={{
          background: 'linear-gradient(269.97deg, rgb(248, 154, 238) 4.18%, rgba(196, 196, 196, 0) 77.28%)',
          left: 0,
        }} from-fuchsia-300 via-stone-300 to-fuchsia-300" />
      <span className="mx-2">Or continue with</span>
      <span className="w-[132px] h-[3px]  style={{
          background: 'linear-gradient(269.97deg, rgb(248, 154, 238) 4.18%, rgba(196, 196, 196, 0) 77.28%)',
          left: 0,
        }} bg-gradient-to-r from-fuchsia-300 to-stone-300" />
    </div>
  </div>
</div>

    <div className="w-[727px] pb-6 left-0 top-[573px] absolute justify-start items-start gap-[25px] inline-flex">
      <div className="w-[351px] h-12 relative bg-gray-100 rounded-xl">
        <div className="pl-[8.63px] pt-[3px] pb-[4.50px] left-0 top-[10px] absolute justify-end items-center inline-flex">
 
<div className="w-4 self-stretch py-[-200px] flex-col justify-center items-start inline-flex">
  <select
    className=" text-black text-sm font-normal leading-[20px] bg-gray-100 border-black  focus:outline-none"
    defaultValue="+91"
    style={{ transform: "translateY(-10px)" }}
  >
    <option value="+91">IN +91 |</option>
    <option value="+1">US +1 |</option>
   
  </select>
 
  {/* <span className="text-zinc-400 text-sm font-normal leading-[20px] mx-2">|</span> */}
</div>
<div className='px-20  w-[351px] h-12'>
<input
    type="tel" // Use "tel" type for phone numbers
    placeholder="Mobile"
    className="text-zinc-600   text-xs font-normal leading-none  outline-none bg-gray-100 rounded-xl"
  />
  </div>
{/* <div className="h-4 pl-[110px] pr-[136px] left-0 top-[16px] absolute flex-col justify-start items-start inline-flex"> */}
  {/* Input field for phone number */}
  
{/* </div> */}
</div>




          {/* <div className="w-4 self-stretch px-[3px] flex-col justify-center items-start inline-flex">
          <svg
    width="10"
    height="6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      fill="#000"
      d="M5 6L0 0h10L5 6z"
    />
  </svg>
          </div> */}
          {/* <div className="self-stretch pl-[6.50px] pr-[2.08px] flex-col justify-start items-start inline-flex">
            <div className="text-zinc-400 text-sm font-normal leading-[21px]">|</div>
          </div> */}
      
        {/* <div className="h-4 pl-[110px] pr-[136px] left-0 top-[16px] absolute flex-col justify-start items-start inline-flex">
  
</div> */}






      </div>
      {/* <div className="w-[351px] pl-4 pr-0.5 py-4 bg-gray-100 rounded-xl justify-end items-center flex"> */}
        {/* <div className="w-[333px] self-stretch pr-[269px] flex-col justify-start items-start inline-flex"> */}
        <input
  className="text-zinc-600 text-xs font-normal leading-none w-[351px] pl-4 pr-0.5 py-4 bg-gray-100 rounded-xl"
  placeholder="Enter Email"
/>

        {/* </div> */}
      {/* </div> */}
    </div>
    <div className="w-[727px] pb-6 left-0 top-[645px] absolute justify-start items-start gap-[25px] inline-flex">
      <div className="w-[355px] pl-2 pr-0.5 py-[-10px]   justify-end items-center flex">
        {/* <div className="w-[333px] self-stretch pr-[271px] flex-col justify-start items-start inline-flex"> */}
        <input
  className="text-zinc-600 text-xs font-normal leading-none w-[355px] pl-4 pr-0.5 py-4 bg-gray-100 rounded-xl"
  placeholder="First name"
/>
        {/* </div> */}
      </div>
      {/* <div className="w-[351px] pl-4 pr-0.5 py-4  rounded-xl justify-end items-center flex"> */}
        <div className="w-[333px] self-stretch pr-[272px] flex-col justify-start items-start inline-flex">
          <input className="text-zinc-600 w-[351px] pl-4 pr-0.5 py-4 bg-gray-100 rounded-xl text-xs font-normal leading-none" placeholder="Last name" />
        {/* </div> */}
      </div>
    </div>
    <div className="w-[727px] pb-6 left-0 top-[717px] absolute justify-start items-start gap-[25px] inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="w-[351px] h-12 relative bg-gray-100 rounded-xl">
        {passwordVisible ? (
        <img
          className="w-[21px] h-5 left-[313px] top-[13px] absolute cursor-pointer"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693995228/view_ius6b9.png"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <img
          className="w-[21px] h-5 left-[313px] top-[13px] absolute cursor-pointer"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693995227/hidden_swgs82.png"
          onClick={togglePasswordVisibility}
        />
      )}
          <div className="h-4 pr-[277px] left-[16px] top-[16px] absolute flex-col justify-start items-start inline-flex">
            <input className="text-zinc-600 bg-gray-100 text-xs outline-none font-normal leading-none" placeholder='password' />
          </div>
         
        </div>
        <div className="w-[351px] py-2  justify-start items-start inline-flex">
  <div className="pl-3 pr-[6px] justify-start items-start flex">
    <div className="w-2 h-2 bg-zinc-400 rounded" />
    <div className="text-black pl-1 text-[9px] font-normal leading-[13.50px]">8 Chrs</div>
  </div>
  <div className="pl-2 pr-[2px] justify-start items-start flex">
    <div className="w-2 h-2  bg-zinc-400 rounded" />
    <div className="text-black pl-1 text-[9px] font-normal leading-[13.50px]">1 Lowercase</div>
  </div>
  <div className="pl-2 pr-[2px] justify-start items-start flex">
    <div className="w-2 h-2 bg-zinc-400 rounded" />
    <div className="text-black pl-1 text-[9px] font-normal leading-[13.50px]">1 Uppercase</div>
  </div>
  <div className="pl-2 pr-[2px] justify-start items-start flex">
    <div className="w-2 h-2 bg-zinc-400 rounded" />
    <div className="text-black pl-1 text-[9px] font-normal leading-[13.50px]">1 Symbol</div>
  </div>
  <div className="pl-2 justify-start items-start flex">
    <div className="w-2 h-2 bg-zinc-400 rounded" />
    <div className="text-black pl-1 text-[9px] font-normal leading-[13.50px]">1 Number</div>
  </div>
</div>

      </div>
      <div className="grow shrink basis-0 pb-6 flex-col justify-start items-start inline-flex">
        <div className="w-[351px] h-12 relative bg-gray-100 rounded-xl">
        {passwordVisible ? (
        <img
          className="w-[21px] h-5 left-[313px] top-[13px] absolute cursor-pointer"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693995228/view_ius6b9.png"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <img
          className="w-[21px] h-5 left-[313px] top-[13px] absolute cursor-pointer"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693995227/hidden_swgs82.png"
          onClick={togglePasswordVisibility}
        />
      )}
          <div className="h-4 pr-[229px] left-[16px] top-[16px] absolute flex-col justify-start items-start inline-flex">
          <input className="text-zinc-600 bg-gray-100 text-xs outline-none font-normal leading-none" placeholder='Confrom password' />
          </div>
        </div>
      </div>
    </div>
    <div className="h-[136px] pb-7 left-0 top-[813px] absolute flex-col justify-start items-center gap-5 inline-flex">
      <div className="self-stretch h-[62px] p-3.5 bg-green-100 rounded-3xl flex-col justify-start items-start flex">
        <div className="w-[699px] h-[34px] relative">
        <div className="w-[33px] h-5 pr-[13px] left-0 top-0 absolute flex-col justify-center items-start inline-flex">
  <input type="checkbox" id="myCheckbox" className="w-5 h-5" />
  <label htmlFor="myCheckbox" className="cursor-pointer">
  
  </label>
</div>

          <div className="pr-[5.55px] left-[33px] top-[2px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-zinc-600 text-sm font-normal leading-none">Opt for Whatsapp Support</div>
          </div>
          <div className="h-3.5 pl-[33px] pr-[143px] left-0 top-[20px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-gray-800 text-[9px] font-normal leading-[14px]">We will be sharing Delivery & precious order related communication. Also provide you with an interactive whatsapp support</div>
          </div>
          <div className="w-[35px] h-[35px] px-[7px] py-1.5 left-[668px] top-[1px] absolute bg-green-50 rounded-xl justify-center items-center inline-flex">
            <img className="w-[21px] h-[23px]" src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693993868/pseudo_m45doh.png" />
          </div>
        </div>
      </div>
      <div className=" justify-between items-start inline-flex">
  <label className="py-[3px] flex-col justify-start items-start inline-flex">
    <div className="justify-start items-center gap-[-20px] inline-flex"> {/* Reduce the gap */}
      <input type="radio" name="gender" className="radio-input" />
      <span className="radio-style"></span>
      <div className="pr-[20px] flex-col items-start inline-flex"> {/* Reduce the padding */}
        <div className="text-gray-800 text-xs font-light leading-[18px]">Male</div>
      </div>
    </div>
  </label>
  <label className="py-[3px] flex-col justify-start items-start inline-flex">
    <div className="justify-start items-center gap-1 inline-flex"> {/* Reduce the gap */}
      <input type="radio" name="gender" className="radio-input" />
      <span className="radio-style"></span>
      <div className="pr-[15px] flex-col justify-start items-start inline-flex"> {/* Reduce the padding */}
        <div className="text-gray-800 text-xs font-light leading-[18px]">Female</div>
      </div>
    </div>
  </label>
  <label className="py-[3px] flex-col justify-start items-start inline-flex">
    <div className="justify-start items-center gap-1 inline-flex"> {/* Reduce the gap */}
      <input type="radio" name="gender" className="radio-input" />
      <span className="radio-style"></span>
      <div className="pr-[10px] flex-col justify-start items-start inline-flex"> {/* Reduce the padding */}
        <div className="text-gray-800 text-xs font-light leading-[18px]">I don’t want to specify</div>
      </div>
    </div>
  </label>
</div>



    </div>
    <div className="w-[355px] h-12 pl-[136.66px] pr-[136.34px] py-[15.50px] left-[186px] top-[949px] absolute bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-xl justify-center items-start inline-flex">
      <button className="text-center text-white text-sm font-normal uppercase">SIGN ME UP </button>
    </div>
    <div className="w-[727px] pl-[276.74px] pr-[276.52px] pb-[60.50px] left-0 top-[1013px] absolute justify-center items-start inline-flex">
      <div className="text-center text-gray-800 text-[11px] font-normal leading-none">Already have an account? </div>
      <div className="flex-col justify-start items-center inline-flex">
        <button className="text-center text-fuchsia-500 text-[11px] font-normal leading-none" onClick={handleLoginClick}>LOG IN</button>
      </div>
    </div>
  </div>
</div>



<Footer/>
    </>
  )
}
