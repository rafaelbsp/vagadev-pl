import './App.css'

import Navbar from './components/Navbar/Navbar'
import BannerSlider from './components/BannerSlider/BannerSlider'
import CardsGames from './components/CardsGames/CardsGames'
import CategorySelector from './components/CategorySelector/CategorySelector'

// import { Routes, Route } from 'react-router-dom'
// import Contato from './Pages/contato'
// import Home from './Pages/home'

// import bannerRed from './assets/imgs/banner_red.png'
// import bannerMortal from './assets/imgs/banner_mortal.png'
import arrowBannerRight from './assets/svgs/angle-right-solid.svg'
import arrowBannerLeft from './assets/svgs/angle-left-solid.svg'

import games from "./data/data.json"


function App() {

  // const arryImages = [
  //   <img src={bannerMortal} key="img1" alt="slider01" />,
  //   <img src={bannerRed} key="img2" alt="slider02" />,
  // ]

  // const arryBrandImages = [
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/colcci.png" key={'imgbrand1'} alt="sliderbrand01" />
  //     <span>Colcci</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/myshoes.png" key={'imgbrand2'} alt="sliderbrand02" />
  //     <span>My shoes</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/aramis.png" key={'imgbrand3'} alt="sliderbrand03" />
  //     <span>My shoes</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/aramis.png" key={'imgbrand4'} alt="sliderbrand04" />
  //     <span>My shoes</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/vizzano.png" key={'imgbrand5'} alt="sliderbrand05" />
  //     <span>My shoes</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/nike.png" key={'imgbrand6'} alt="sliderbrand06" />
  //     <span>My shoes</span>
  //   </div>,
  //   <div className='brandContainer'>
  //     <img src="/BrandSlider/colcci.png" key={'imgbrand7'} alt="sliderbrand07" />
  //     <span>My shoes</span>
  //   </div>    
  // ]


  return (
    <>
      <div className="container">
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

        <CategorySelector/>

        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes> */}
      </div>
    </>
  )
}

export default App
