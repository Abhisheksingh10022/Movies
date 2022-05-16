import React from "react";
import { Route,Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHoc=({component,...rest})=>{
    const Component=component;

    return(<>
    <Routes>
    <Route {...rest} element={<DefaultLayout ><Component />
        </DefaultLayout>} />
    </Routes>
    </>
    )
}
export default DefaultHoc;