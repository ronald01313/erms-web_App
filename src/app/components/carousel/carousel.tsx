/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel() {
    const settings = {
      dots: true, // Show navigation dots
      infinite: true, // Enable infinite loop
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,  
    };
  
    return (
      <div className="max-w-[640px] mx-auto">
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/N9hLqhx/calltoaction.png" alt="Image 1" className="mx-auto h-full w-full object-cover" />
          </div>
          {/* Add more images as needed */}
          <div>
            <img src="https://i.ibb.co/YfLGcC1/6.png" alt="Image 2" className="mx-auto h-full w-full object-cover" />
          </div>
          <div>
            <img src="https://i.ibb.co/YPJ7fT2/3.png" alt="Image 1" className="mx-auto h-full w-full object-cover" />
          </div>
          {/* Add more images as needed */}
          <div>
            <img src="https://i.ibb.co/rfTpmk9/7.png" alt="Image 2" className="mx-auto h-full w-full object-cover" />
          </div>
          <div>
            <img src="https://i.ibb.co/1njm7wK/9.png" alt="Image 1" className="mx-auto h-full w-full object-cover" />
          </div>
          {/* Add more images as needed */}
          <div>
            <img src="https://i.ibb.co/dfPzL5n/10.png" alt="Image 2" className="mx-auto h-full w-full object-cover" />
          </div>
          <div>
            <img src="https://i.ibb.co/zSVNdQw/11.png" alt="Image 2" className="mx-auto h-full w-full object-cover" />
          </div>
          {/* Add more images here */}
        </Slider>
      </div>
    );
  }
  