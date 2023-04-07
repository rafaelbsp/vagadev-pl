import './App.css'

import Navbar from './components/Navbar/Navbar'
import BannerSlider from './components/BannerSlider/BannerSlider'
import CardsGames from './components/CardsGames/CardsGames'
import CategorySelector from './components/CategorySelector/CategorySelector'
import ProductShelf from './components/ProductShelf/ProductShelf'

import { ShoppingCartProvider } from './context/ShoppingCartContext'

import arrowBannerRight from './assets/svgs/angle-right-solid.svg'
import arrowBannerLeft from './assets/svgs/angle-left-solid.svg'
import arrowBannerRightGreen from './assets/svgs/angle-right-solid-green.svg'
import arrowBannerLeftGreen from './assets/svgs/angle-left-solid-green.svg'

import games from "./data/data.json"

function App() {

  return (
    <>
      <div className="container">
        <ShoppingCartProvider>
          <Navbar/>

          <BannerSlider
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  centerMode: false,
                  dots: true,
                  arrows: true,
                },
              },
              {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  centerMode: false,
                  dots: true,
                  arrows: true,
                },
              },
            ]}
            className="carrousel-images"
            slidesToShow={2}
            slidesToScroll={2}
            autoplaySpeed={0}
            speed={0}
            infinite={true}
            autoplay
            centerMode={true}
            centerPadding="60px"
            usePagination={false}
            showNavigationArrows="always"
            showPaginationDots="never"
            nextArrow={arrowBannerRight}
            prevArrow={arrowBannerLeft}
          >
            {games}
          </BannerSlider>

          <CardsGames/> 

          <ProductShelf
            responsive={[
              {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  centerMode: false,
                  dots: true,
                  arrows: true,
                },
              },
            ]}
            className="carrousel-images"
            slidesToShow={2}
            slidesToScroll={2}
            autoplaySpeed={0}
            speed={0}
            infinite={true}
            autoplay
            centerMode={true}
            centerPadding="60px"
            usePagination={false}
            showNavigationArrows="always"
            showPaginationDots="never"
            nextArrow={arrowBannerRightGreen}
            prevArrow={arrowBannerLeftGreen}
          >
            {games}
          </ProductShelf>

          <CategorySelector/>
        </ShoppingCartProvider>
      </div>
    </>
  )
}

export default App
