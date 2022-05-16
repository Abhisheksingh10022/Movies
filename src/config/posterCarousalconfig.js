const settings={
    infinity:false,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    responsive:[
        {
        breakpoints:1024,
        settings:{
            slidesToShow:2,
            slidesToScroll:2,
            infinite:true,
           
        }
    },{
        breakpoints:600,
        settings:{
            slidesToShow:2,
            slidesToScroll:2,
        InitialSlide:1,
           
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
export default settings