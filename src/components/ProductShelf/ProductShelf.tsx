
import { useMediaQuery } from 'react-responsive' 
import Slider, { ResponsiveObject } from 'react-slick';
import iconTittle from '../../assets/svgs/iconTitle.svg'
import { PRODUCTS } from '../../data/products';

import "./ProductShelf.scss"
import Product from './Product/Product';
import { useEffect, useState } from 'react';

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


export default function ProductShelf({
    children,
    showNavigationArrows = "always",
    showPaginationDots = "always",
    nextArrow = "",
    prevArrow = ""
}: Props) {
    
    const isTabletScreen = useMediaQuery({ query: '(max-width: 1025px)' })

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

    function SampleNextArrow({ className, style, onClick}: PropsSlickArrow) {
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
    function SamplePrevArrow({ className, style, onClick}: PropsSlickArrow) {
        return (
            <>
                <img
                    src={prevArrow}
                    className={className}
                    style={{ ...style }}
                    onClick={onClick}
                    onKeyDown={()=>{}}
                    alt={"prevArrow"}
                />
            </>
            
        );
    }
    const settings = {        
        dots: showDotsInDevice,
        infinite: true,
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

        <section className="shelf-product">
          {isTabletScreen ? (

            <div className="containerShelf">
                <div className="containerTitleShelf">
                    <img src={iconTittle} className="icon-title" alt="Icon title" />
                    <p className="titleShelf">Produtos em destaque</p> 
                </div>

                <div className="containerCardCategoryCustom">
                    <Slider {...settings}>
                        { PRODUCTS?.map((card: any, index: any) =>(
                            <Product {...card}/>
                        ))}
                    </Slider>
                </div>
            </div>

          ) : (
            
            <div className="containerShelf">
                <div className="containerTitleShelf">
                    <img src={iconTittle} className="icon-title" alt="Icon title" />
                    <p className="titleShelf">Produtos em destaque</p> 
                </div>

                <div className="containerCardCategoryCustom">

                    { PRODUCTS?.map((card: any, index: any) =>(
                        <Product {...card}/>
                    ))}
                </div>
            </div>

          )}
        </section>
    )

};