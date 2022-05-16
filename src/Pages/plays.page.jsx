import React from "react";
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/playsFilters";
const Plays=()=>{
    return(
        <>
        <div className="container mx-auto px-4">

            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                <h2 className="text-2xl font-bold">Plays in bengaluru </h2>
                <div className="flex flex-wrap ">
                <div className="w-1/2  md:w-1/3 my-3">
                    <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327354-gjnqtrkcyq-portrait.jpg"
                     title="PERIYAPPA"
                     subtitle="Telugu Rs 100"
                     />
                </div>

                    <div className="w-1/2 md:w-1/3 my-3">
                    <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327354-gjnqtrkcyq-portrait.jpg"
                     title="PERIYAPPA"
                     subtitle="Telugu Rs 100"
                     />
                     </div>
                     <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327354-gjnqtrkcyq-portrait.jpg"
                     title="PERIYAPPA"
                     subtitle="Telugu Rs 100"
                     />
                     </div>
                </div>
            </div>
            <div className="lg:w-3/12  ">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
             <PlaysFilter title="Date" tags={["Today","Tomorrow","This weekend"]} />
                </div>
                <div>
             <PlaysFilter title="Language" tags={["English","Hindi","Punjabi"]} />
                </div>
              
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Plays;