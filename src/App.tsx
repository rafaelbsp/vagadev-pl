import './App.css'

import BannerSlider from './components/BannerSlider/BannerSlider'
import Navbar from './components/Navbar/Navbar'

// import { Routes, Route } from 'react-router-dom'
// import Contato from './Pages/contato'
// import Home from './Pages/home'

import bannerRed from './assets/imgs/banner_red.png'
import bannerMortal from './assets/imgs/banner_mortal.png'


function App() {

  const arryImages = [
    <img src={bannerMortal} key="img1" alt="slider01" />,
    <img src={bannerRed} key="img2" alt="slider02" />,
    <img src={bannerMortal} key="img3" alt="slider03" />,
  ]

  return (
    <>
      <div className="container" >
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
        slidesToShow={1}
        slidesToScroll={1}
        autoplaySpeed={0}
        speed={0}
        infinite
        autoplay
        centerMode={false}
        centerPadding="60px"
        usePagination={false}
        showNavigationArrows="always"
        showPaginationDots="always"
        nextArrow="/banner/arrowRight.png"
        prevArrow="/banner/arrowLeft.png"
      >
        {arryImages}{' '}
      </BannerSlider>


        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes> */}
      </div>
    </>
  )
}

export default App
