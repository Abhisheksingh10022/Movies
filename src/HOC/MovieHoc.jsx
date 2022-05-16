import React from "react";
import { Route,Routes } from "react-router-dom";
import MovieLayout from "../layouts/Movie.layout";

const MovieHoc=({component,...rest})=>{
    const Component=component;

    return(<>
    <Routes>
    <Route {...rest} element={<MovieLayout ><Component />
        </MovieLayout>} />
    </Routes>
    </>
    )
}
export default MovieHoc;