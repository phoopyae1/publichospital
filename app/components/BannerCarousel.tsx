'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BannerSlide {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const slides: BannerSlide[] = [
  {
    image: '/newsweek-slider8.png',
    alt: 'Newsweek Top-Ranked Specialties'
  },
  {
    image: '/APAC-Newsweek-logo.png',
    alt: 'APAC Newsweek Award'
  },
  {
    image: '/banner-2-icon1.png',
    alt: 'Sunway Medical Centre'
  }
];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full flex items-center gap-4 mt-3">
      {/* Bubble Buttons - Left Vertical Outside */}
      <div className="flex flex-col gap-2 flex-shrink-0 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? 'w-3 h-8 bg-cyan-200'
                : 'w-3 h-3 bg-cyan-200/50 hover:bg-cyan-200/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative flex-1 h-[500px] overflow-hidden bg-gray-100 rounded-[10px]">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain rounded-[5px]"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons - Inside Carousel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 px-3 py-2 rounded shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 px-3 py-2 rounded shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          &gt;
        </button>

        {/* Action Buttons - Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 flex z-10">
          <div className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow text-center min-w-[120px]">
            <div className="text-3xl mb-2">👨‍⚕️</div>
            <div className="font-semibold text-gray-900 text-xs">Find a Doctor</div>
          </div>
          <div className="bg-white  p-4 shadow-md hover:shadow-lg transition-shadow text-center min-w-[120px]">
            <div className="text-3xl mb-2">📅</div>
            <div className="font-semibold text-gray-900 text-xs">Make Appointment</div>
          </div>
          <div className="bg-white  p-4 shadow-md hover:shadow-lg transition-shadow text-center min-w-[120px]">
            <div className="text-3xl mb-2">🏥</div>
            <div className="font-semibold text-gray-900 text-xs">Health Packages</div>
          </div>
        </div>
      </div>
    </div>
  );
}

