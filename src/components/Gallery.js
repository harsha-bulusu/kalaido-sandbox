import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from '../data/images.json'
import './styles.css';
import { Button } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation () {
  const lenisRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState([])

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, [loadedImages]);

  useEffect(() => {
    const elements = document.querySelectorAll(".elem");

    elements.forEach((elem) => {
      const image = elem.querySelector("img");
      const xTransform = gsap.utils.random(-100, 100);

      const tl = gsap.timeline();

      tl.set(image, {
        transformOrigin: xTransform < 0 ? "0%" : "100%",
      }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }, "start");
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [loadedImages]);

  useEffect(() => {
    const sliceImageCount = () => {
      if (window.innerWidth <= 640) {
        setLoadedImages(images.data.slice(0, 5));
      } else {
        setLoadedImages(images.data);
      }
    }
    sliceImageCount()
    window.addEventListener('resize', sliceImageCount)

    return () => window.addEventListener('resize', sliceImageCount)
  }, [])

  return <div className="w-full p-5 md:p-10">
    <div className="p-3 sm:p-2">
        <div className="gap-1 sm:columns-2 md:columns-3 lg:columns-4">
        {
          loadedImages.map((imageUrl, index) => <div key={index} className="elem">
            <img src={imageUrl} alt={`image-${index}`}/>
          </div>)
        }
        </div>
    </div>
    <div className="load-more-btn-container">
      <Button variant="contained">Load more Images</Button>
    </div>
</div>
}