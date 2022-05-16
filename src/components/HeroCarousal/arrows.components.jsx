import React from "react";



export const NextArrow=(props)=>{

return(
    <>
    <div className={props.className} style={{...props.style ,backgroundColor:"black"}} onclick={props.onclick} />
    </>

)

}

export const PrevArrow=(props)=>{
    return(
        <>
        <div className={props.className} style={{...props.style ,backgroundColor:"black"}} onclick={props.onclick} />
        </>
    )

}