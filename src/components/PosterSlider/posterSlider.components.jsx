import { React } from "react";
import settings from "../../config/posterCarousalconfig";
import PremierImages from "../../config/TempPoster.config";
import Slider from"react-slick";
import Poster from "../Poster/Poster.component";
const PosterSlider =(props)=>{
    const sliderConfig=props.config?props.config:settings
    return (
        <>
        <div className="flex flex-col items-start my-2">
            <h3 className={`text-2xl font-bold  ${props.isDark?"text-white":"text-gray-700"}`}>
            {props.title
            }
            </h3>
            <p className={`text-sm   ${props.isDark?"text-white":"text-gray-700"}`}>{props.subtitle}</p>
            </div>
        <Slider {...sliderConfig}>
            {props.images.map((image)=>{
               return(
                <Poster {...image} isDark={props.isDark}/>
               )
                
                
            })
           }
           </Slider>
           </>

    )
}
export default PosterSlider;