import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Sortnavbar from '../Components/Sortnavbar'
import Sidesort from '../Components/Sidesort'


function Ring() {
  return (
    <>
    <Navbar/>


<Banner image={"https://s3-alpha-sig.figma.com/img/4185/d385/843a39e9fc512998f39dbf011efb4a11?Expires=1694995200&Signature=i47yFkFR09vp90OTo87q4ln2A5A78xMKzZ60rDnT2XAWKO77XZLl~yMljfsQb28nMGmpD5psMd4y0V0xRlb712y3pOWbPw2XkxQRBsn-MUjKwuLmCMiSbf1zxQ-ByUIkOMSoE22viGACujjPj2FdnGyEItqty1FShCDClN4nFmi2utwKJh62vO0xALW-vJ8xBVqrgjWQBf1WHCQSzEioxVcez4ChDuN90MZhOr4TPQgWIDevQ0cqJ2tTgz5a2YruEnGyGPX~dWB0CYIJ0OzMABck18BADRhFj5qHh5ci3Fk5Wud0JrZJHYIJL6ZeZ0EXL6uUkheeUSL1y9QH3av0Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>

<Sortnavbar name={"Rings"}/>

<Sidesort/>


    <Footer/>
 
    </>
  )
}

export default Ring