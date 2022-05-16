import React from "react";
import Slider from "react-slick"
const EntertainmentCard=(props)=>{
    return <>
    <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl rounded-xl" src={props.src} alt="entertainment image" />
    </div>
    </>

}

const EntertainmentCardSlider=()=>{
    const EntertainmentImages=["https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTMwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202011150107.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/cooking-collection-202007222211.png"


];
const settings={
    infinity:false,
    autoplay:false,
    slidesToShow:4,
    slidesToScroll:4,
    InitialSlide:0,
    responsive:[
        {
        breakpoints:1024,
        settings:{
            slidesToShow:3,
            slidesToScroll:2,
            infinite:true,
           
        }
    },{
        breakpoints:600,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
        InitialSlide:1,
           
        }
        
    },
    {
        breakpoints:480,
        settings:{
            slidesToShow:2,
            slidesToScroll:1
        }
    }
],


}
    return (<>
    <div className="px-4">
    <Slider {...settings}>
        {
            EntertainmentImages.map((image)=><EntertainmentCard src={image}/>)
        }

    </Slider>
    </div>
    
    </>)
}
export default EntertainmentCardSlider;
