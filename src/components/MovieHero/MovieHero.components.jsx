
import React ,{useContext}from "react";
import MovieInfo from "./movieInfo.components";
import { MovieContext } from "../../context/movie.context";
const MovieHero=()=>{
const {movie}=useContext(MovieContext)
    return(
        <>
        <div>
            {/* small devices*/ }
           <div className="md:hidden w-full" style={{heigh:"calc(180vw)"}}>
           <div className="absolute z-20 bottom-4 left-4">
                   <MovieInfo />
               </div>
               <div className="w-full h-56 absolute  bg-opacity-50  bg-black z-10 bottom-0"/>

               <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt="poster"
                 className="w-full h-full"/>
           </div>
           {/* medium devices*/ }
           <div className=" relative hidden md:block  w-full    lg:hidden" style={{heigh:"calc(100vw)"}}>
          
           <div className="w-full h-56 absolute  bg-opacity-50  bg-black z-10 bottom-0"/>
           <div className="absolute z-20 bottom-4 ">
                   <MovieInfo />
               </div>
           <img   src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt="poster"
                 className="w-full h-full"/>
           </div>
          
             {/* large devices*/ }
           <div className=" relative hidden lg:block" style={{height:"30rem"}}>
               
           <div className="absolute h-full z-10 w-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34,34,34) 24.97%,rgb(34,34,34) 38.3%,rgba(34,34,34,0.04)97.47%,rgb(34,34,34)100%"}} />
               
               <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
               <div className=" w-64 h-96  ">
               <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                   alt="poster"
                   className="w-full h-full rounded-xl"
                   />
                   </div>
                   <div>
                   <MovieInfo />
                   </div>
                   </div>
                   <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                     alt="poster"
                     className="w-full h-full"/>
        
        </div>

        
        </div>
        </>
    )
}
export default MovieHero;