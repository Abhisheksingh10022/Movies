import React from "react";
import Navbar from "../components/Navbar/Navbar.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal";
const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        <HeroCarousal />
        {props.children}
      
        </>
    )
}
export default DefaultLayout;