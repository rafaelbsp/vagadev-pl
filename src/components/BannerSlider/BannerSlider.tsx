import React, {useState, useEffect, useRef} from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import { useMediaQuery } from 'react-responsive' 

import "./BannerSlider.scss"

type SlidesDeviceToShow = "mobileOnly" | "desktopOnly" | "always" | "never";

interface Props {
    showNavigationArrows: SlidesDeviceToShow;
    showPaginationDots: SlidesDeviceToShow;
    infinite: boolean;
    usePagination: boolean;
    children: any;
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean;
    autoplaySpeed: number;
    centerMode: boolean;
    centerPadding: string;
    className: string;
    responsive: ResponsiveObject[];
    nextArrow: string;
    prevArrow: string;
}

interface PropsSlickArrow {
    className?: string;
    style?: (arg:unknown)=> unknown;
    onClick?: (arg:unknown)=> unknown;
}

export default function BannerSlider({
    children,
    showNavigationArrows ,
    showPaginationDots,
    nextArrow,
    prevArrow,
}: Props) {

    const slider:any = useRef(null);
    
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' })

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ showArrowsInDevice, setShowArrows ] = useState(true);
    const [ showDotsInDevice, setShowDots ] = useState(true);

    const [ gameName, setGameName ] = useState("MORTAL KOMBAT");
    
    const isMobile = false;

    useEffect(() => {
        if(isMobile)
        {
            setShowArrows(showNavigationArrows === "always" || showNavigationArrows === "mobileOnly");
            setShowDots(showPaginationDots === "always" || showPaginationDots === "mobileOnly");
        }
        else
        {
            setShowArrows(showNavigationArrows === "always" || showNavigationArrows === "desktopOnly");
            setShowDots(showPaginationDots === "always" || showPaginationDots === "desktopOnly");
        }
    }, [isMobile, showNavigationArrows, showPaginationDots]);

    function SampleNextArrow({ className, style, onClick}: PropsSlickArrow) {
        return (
            <img
                src={nextArrow}
                className={className}
                style={{ ...style }}
                onClick={onClick}
                alt={"nextArrow"}
            />
        );
    }

    function SamplePrevArrow({ className, style, onClick}: PropsSlickArrow) {
        return (
            <img
                src={prevArrow}
                className={className}
                style={{ ...style }}
                onClick={onClick}
                alt={"prevArrow"}
            />   
        );
    }

    const settings = {        
        dots: showDotsInDevice,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className :"carrousel-images",
        responsive: [],
        centerMode: true,
        centerPadding: "0px",
        arrows:showArrowsInDevice,
        autoplay: false,
        usePagination: false,
        autoplaySpeed: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="big-banner">
          {isTabletScreen ? (
            <>
                <Slider {...settings} ref={slider}>
                    { children.map((item: any, index: React.Key | null | undefined)=>(
                        <div className="containerBannerCustom">
                            
                            <div className="infoBanner">
                                <div className="nameBannerCustom">
                                    <p>{item.game}</p>
                                </div>
                                <div className="priceBannerCustom">
                                    <p>{item.price}</p>
                                </div>
                                <div className="textBannerCustom">
                                    <p>{item.textGame}</p>
                                </div>
                            </div>

                            <img className="imageBanner" src={item.imgUrlMobile} /> 
                        </div>
                        
                    ))}
                </Slider>
            </>
          ) : (
            <>
                <Slider {...settings} ref={slider}> 
                    { children?.map((item: any, index: React.Key | null | undefined)=>(
                        <div className="containerBannerCustom">
                            
                            <div className="infoBanner">
                                <div className="nameBannerCustom">
                                    <p>{item.game}</p>
                                </div>
                                <div className="priceBannerCustom">
                                    <p>{item.price}</p>
                                </div>
                                <div className="textBannerCustom">
                                    <p>{item.textGame}</p>
                                </div>
                            </div>

                            <img className="imageBanner" src={item.imgUrl} /> 
                        </div>
                    ))}

                </Slider>
                <div className="infoBarBanner">
                    
                    <div className="nameBarBanner">
                        <p>{gameName}</p>
                        
                        <div className="lineBarBanner"/>
                    </div> 
                    <div className="textBarBanner">

                        <div className="pageActiveBarBanner">{currentPage} / {children.length}</div>
                        
                        <div className="containerArrow">
                            <button className="itemArrow"
                                onClick={() =>{
                                    slider.current.slickPrev();
                                    currentPage > 1 && setCurrentPage(currentPage - 1);
                                    setGameName("MORTAL KOMBAT")
                                }} 
                            >
                                <img src={prevArrow} /> 
                            </button>

                            <button className="itemArrow"
                                onClick={() =>{
                                    slider.current.slickNext();
                                    currentPage < children.length && setCurrentPage(currentPage + 1);
                                    setGameName("RED DEAD REDEMPTION")
                                }} 
                            >
                                <img src={nextArrow} /> 
                            </button>
                        </div>
                    </div>
                    
                </div>
            </>
          )}
        </section>
    )

};