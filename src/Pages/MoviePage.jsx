import React ,{useContext,useState,useEffect}from "react";
import{FaCcVisa,FaApplePay} from "react-icons/fa"
import Cast from "../components/Cast.components";
import MovieHero from "../components/MovieHero/MovieHero.components";
import { MovieContext } from "../context/movie.context";
import PremierImages from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlider/posterSlider.components";
import axios from "axios";
import Slider from "react-slick"
import { useParams } from "react-router-dom";
const MoviePage=()=>{
    const {id}=useParams()
    const{movie}=useContext(MovieContext)
    const [cast,setCast]=useState([]);
    const[similar,setSimilar]=useState([]);
    const[recommended,setRecommended]=useState([]);

    useEffect(()=>{
        const requestCast=async()=>{
            const getCast= await axios.get(`/movie/${id}/credits`)
            if(getCast)
            {
           setCast(getCast.data.cast)
            }

        };
        const requestSimilar= async()=>{
            const getImages2=await axios.get(`/movie/${id}/similar`)
            setSimilar(getImages2.data.results)
        }
        const requestRecommended= async()=>{
            const getRecommended=await axios.get(`/movie/${id}/recommendations`)
            setRecommended(getRecommended.data.results)
        }
        requestCast();
        requestSimilar();
        requestRecommended();

    },[id])


    const settings={
        infinity:false,
       speed :500,
        slidesToShow:3,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[
            {
            breakpoints:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
               
            }
        },{
            breakpoints:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
            InitialSlide:2,
               
            }
            
        },
        {
            breakpoints:480,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        }
        ]
    }
      const settingsCast={
        infinity:false,
       speed :500,
        slidesToShow:6,
        slidesToScroll:4,
        initialSlide:0,
        responsive:[
            {
            breakpoint:1024,
            settings:{
                slidesToShow:4,
                slidesToScroll:3,
                infinite:true,
               
            },
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:5,
                slidesToScroll:2,
            initialSlide:2,
               
            }
            
        },
        {
            breakpoint:480,
            settings:{
                slidesToShow:2,
                slidesToScroll:1
            }
        }
        ]
    }

  
    return (
        <>
       <MovieHero />
       <div className=" my-24 container  px-4 lg:ml-20 lg:w-2/3">
           <div className="flex flex-col items-start gap-3">
           <h2 className="text-gray-800 font-bold text-2xl ">About the Movie</h2>
           <p>{movie.overview}</p>
           </div>
           <div className="my-8">
           <hr />
           </div>
           <div className="my-8">
            <h1 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h1>
            <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full " />
                </div>
                <div className="flex flex-col items-start lg:flex-row">
                    <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offers</h3>
                    <p className="text-gray-600">
                        Get 50% off upto INR 150 on all visa cards 
                    </p>
                </div>
            </div> 
            <div className="flex items-start gap-2 bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaApplePay className="w-full h-full " />
                </div>
                <div className="flex flex-col items-start lg:flex-row">
                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                    <p className="text-gray-600">
                        Get Rs 75+ off on 3 movies.
                    </p>
                </div>
            </div> 
          
            
           
            </div>
            </div>
            <div className="my-8">
           <hr />
           </div>
            <div className="my-8 flex flex-col gap-3">
            <h2 className="text-gray-800 font-bold text-2xl ">Cast and crew</h2>
            
                <Slider {...settingsCast}>
                {cast.map((castdata)=>{
                    return(
                     <Cast 
                     image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                     castName={castdata.original_name}
                     role={castdata.character} />
                    )
                })}
                </Slider>
              

            </div>
            <div className="my-8">
           <hr />
           </div>
            <div className="my-8">
            <PosterSlider
            config={settings} images={recommended}
                title="You might also like" 
                isDark={false} />
            </div>
            <div className="my-8">
           <hr />
           </div>
            <div className="my-8">
            <PosterSlider
            config={settings} images={similar}
                title="BMS Xclusive" 
                isDark={false} />
            </div>
            </div>
           
           

       
        </>
    )
}
export default MoviePage;
