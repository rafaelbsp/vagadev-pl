import React, {useState, useEffect} from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import "./BannerSlider.scss"

type SlidesDeviceToShow = "mobileOnly" | "desktopOnly" | "always" | "never";

interface Props {
    showNavigationArrows: SlidesDeviceToShow;
    showPaginationDots: SlidesDeviceToShow;
    infinite: boolean;
    usePagination: boolean;
    children: React.ReactNode [];
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

export default function BannerSlider({ children,
    showNavigationArrows = "always",
    showPaginationDots = "always",
    nextArrow = "",
    prevArrow = ""
}: Props) {
    const [ showArrowsInDevice, setShowArrows ] = useState(true);
    const [ showDotsInDevice, setShowDots ] = useState(true);
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

    function SampleNextArrow({ className, style, onClick }: PropsSlickArrow) {
        return (
            <img
                src={nextArrow}
                className={className}
                style={{ ...style }}
                onClick={onClick}
                onKeyDown={()=>{}}
                alt={"nextArrow"}
            />
        );
    }
    function SamplePrevArrow({ className, style, onClick }: PropsSlickArrow) {
        return (
            <img
                src={prevArrow}
                className={className}
                style={{ ...style }}
                onClick={onClick}
                onKeyDown={()=>{}}
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
        centerMode: false,
        centerPadding: "0px",
        arrows:showArrowsInDevice,
        autoplay: false,
        usePagination: false,
        autoplaySpeed: 0,
        nextArrow: nextArrow !== "" ? <SampleNextArrow /> : undefined,
        prevArrow: prevArrow !== "" ? <SamplePrevArrow /> : undefined,
    };

    return (
        <>
            <Slider {...settings}>
                {children?.length > 0 ? children : null}
            </Slider>
        </>
    );
};