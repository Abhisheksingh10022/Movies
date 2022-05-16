import React,{useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainmennt/entertainment.components";
import axios from "axios";
import TempImages from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlider/posterSlider.components";
const HomePage=()=>{
const[images,setImages]=useState([]);
const[images1,setImages1]=useState([]);
const[images2,setImages2]=useState([]);


useEffect(()=>{
const getUpcoming=async()=>{
   const getImages= await axios.get("/movie/upcoming");
   setImages(getImages.data.results);
}
const getTopTrending=async()=>{
    const getImages1=await axios.get("/movie/top_rated");
    setImages1(getImages1.data.results);
}

const getNowPlaying= async()=>{
    const getImages2=await axios.get("/movie/now_playing")
    setImages2(getImages2.data.results)
}
   
        

getUpcoming();
getTopTrending();
getNowPlaying();

},[])

    return(
    
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
          <EntertainmentCardSlider />
            
            </div>
            <div className="bg-bms-800 py-12 " >
            <div className="container mx-auto px-4  flex flex-col gap-3">
                   <div className>
                  <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" 
                   alt="premier"
                   className="w-full h-full"/>
                   </div>

               <PosterSlider images={images} title="Premieres" subtitle="Brand new Releases every friday" isDark={true} />
                </div>
                </div>

            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={images1} 
                title="Top Rated Movies" 
                isDark={false} />
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={images2} 
                title="Now playing" 
                isDark={false} />
            </div>
        </>
    )

    
    
}
export default HomePage;