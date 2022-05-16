import DefaultHoc from "./HOC/Default.Hoc";
import HomePage from "./Pages/Home.pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHoc from "./HOC/MovieHoc";
import MoviePage from "./Pages/MoviePage";
import Plays from "./Pages/plays.page";
import axios from "axios";

//axios default settings

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY

function App() {

  return(
    <>
    <DefaultHoc path="/" exact component={HomePage} />
    <MovieHoc path="/movie/:id" exact component={MoviePage} />
    <DefaultHoc path="/plays" exact component={Plays}/>
    </>
  )
}

export default App;
