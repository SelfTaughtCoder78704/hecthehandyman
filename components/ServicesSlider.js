'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  "Plumbing fixtures",
  "Lighting fixtures",
  "Small Home Repair",
  "Decks",
  "Tile",
  "Laminate Wood Floors",
  "Drywall / Sheetrock / Tape Float / Texture",
  "Window Installation",
  "General Troubleshooting / Finding Where Problems Stem From",
  "Waterproofing",
  "Door Installation",
  "Epoxy Floor Installation",
  "Sidewalks, Patios",
  "Paint",
  "Appliance Installation",
  "Smoke Detector Change/Install",
  "Full Demolition",
  "Demolition Cleanup",
  "Cabinet Installation",
  "Carpet Installation",
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="py-8 bg-yellow-400">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
      <Slider {...settings} className="mx-4">
        {services.map((service, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-prev:before, .slick-next:before {
          color: black;
        }

        .slick-dots li button:before {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default ServiceSlider;
