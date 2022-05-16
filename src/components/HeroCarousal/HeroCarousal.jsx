import React,{useState,useEffect} from "react";
import HeroSlider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "./arrows.components";
import axios from "axios";
const HeroCarousal=()=>{
const [images,setImages]=useState([]);

useEffect(()=>{
    const requestNowPlaying =async()=>{
        const getImages= await axios.get("/movie/popular")
       
        setImages(getImages.data.results);
    };
    requestNowPlaying();
},
[])
console.log(images)

const settingsLG={
    arrows:true,
    autoplay:true,
    centerMode:true,
    centerPadding:"300px",
    slidesToShow:1,
    slidesToScroll: 1,
    infinite:true,
  
};


    const settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      
      };
    
    return(
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings} >
            {images.map((image)=>{
                
                        return(<>
                <div className="w-full h-40 md:h-80 px-3 ">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}  className="w-full h-full "
                    />
                </div>
                </>
                        )
            
                
            })}
        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider {...settingsLG} >
            {images.map((image)=>{
                
                
                        return<>
                <div className="w-full h-96 px-2 py-2 ">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full "
                    />
                </div>
                </>
                
            })}
        </HeroSlider>
        </div>
        </>
    )
}
export default HeroCarousal;