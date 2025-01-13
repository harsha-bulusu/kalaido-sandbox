import { useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import SliderWrapper from './components/Slider'
import ProgressBar from './components/ProgressBar';
import PromptBox from './components/PromptBox';
import { Button } from '@mui/material';
import './components/Galaxy';
import Galaxy from './components/Galaxy';
import Features from './components/Features';
import Explore from './components/Explore';

function App() {

  const images = ["https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/1.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/2.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/3.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/4.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/5.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/6.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/7.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/8.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/9.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/10.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/11.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/12.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/13.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/14.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/15.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/16.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/17.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/18.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/19.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/20.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/21.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/22.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/23.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/24.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/25.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/26.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/27.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/28.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/29.webp",
"https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/hero-inspirations-compressed-new/30.webp"
]

useEffect(() => {
  const cursorOutline = document.querySelector(".cursor-outline")
  const handleOutlineMove = e => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.style.visibility = 'visible'

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, {duration: 500, fill: "forwards"})
  }
  document.addEventListener('mousemove', handleOutlineMove)

  return () => {
    document.removeEventListener('mousemove', handleOutlineMove)
  }
}, [])

  return (
    <div className="App">
     {/* BEGIN: Top level elements */}
     <Galaxy />
     <ProgressBar />
     <div className="cursor-outline"></div>
      {/* END: Top level elements */}

      {/* BEGIN: Hero Section */}
      <div className='h-[80vh] hero-container mt-[50px]'>
        <div className='hero-slider-gallery sm:p-3'>
          <div className='mask h-screen'>
          </div>
          <SliderWrapper images={images.slice(0,10)} duration={40}/>
          <SliderWrapper images={images.slice(10,20)} duration={50}/>
          <SliderWrapper images={images.slice(20,30)} duration={40}/>
        </div>
        <div className='main-container'>
          <div className='meta-container'>
            <div className='title-container'>
              <span className='logo-container'><img src='logo.png'/></span>
              <span className='title'>Kalaido.ai</span>
            </div>
            <div className='description-container'>
              <p><span style={{fontWeight: 'bold'}}>Fractal’s</span> diffusion model for multi-language text-to-image generation</p>
            </div>
          </div>
          <div className='promptbox-container'>
            <PromptBox />
          </div>
          <div className='try-btn-container'>
            <Button variant='contained' color='primary' >Try it out</Button>
          </div>
        </div>
      </div>
      {/* END: Hero Section */}

      <div className='features-wrapper h-[50vh]'>
        <Features />
      </div>
      {/* BEGIN: Gallery Section */}
      <div className='gallery-container'>
        <Gallery />
      </div>
      {/* END: Gallery Section */}

      <div className='h-screen explore-wrapper'>
        <Explore />
      </div>
    </div>
  );
}

export default App;
