import React,{useEffect,useContext} from "react";
import {useParams} from "react-router-dom"
import MovieNavbar from "../components/Navbar/MovieNavbar.components";
import { MovieContext } from "../context/movie.context";
import axios from "axios";
const MovieLayout=(props)=>{

    const {id}=useParams();

  const {movie,setMovie}=useContext(MovieContext);

  useEffect(()=>
  {
const requestMovie=async()=>{
const getMovieData=await axios.get(`/movie/${id}`)
if(getMovieData)
{
setMovie(getMovieData.data)

}


}
requestMovie();
console.log(movie )
  },[id])
    return(
        <>
        <MovieNavbar />
        {props.children}
      
        </>
    )
}
export default MovieLayout;