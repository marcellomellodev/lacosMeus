
// img carousel
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.png'


import  { useState, useEffect } from 'react';
import { CarouselContainer, Button, SlideList, SlideItem, SlideImage } from "./styles";

export function MyCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [img1, img2, img3, img4];
  const intervalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <CarouselContainer>
      <Button id="prev" onClick={prevSlide}>&#10096;</Button>
      <Button id="next" onClick={nextSlide}>&#10097;</Button>
      <SlideList>
        {slides.map((slide, index) => (
          <SlideItem key={index} isActive={index === slideIndex}>
            <SlideImage src={slide} alt={`Imagem ${index + 1}`} />
          </SlideItem>
        ))}
      </SlideList>
    </CarouselContainer>
  );
}



