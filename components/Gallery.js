import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "/r1.jpg", alt: "Project 1" },
  { src: "/r2.jpg", alt: "Project 2" },
  { src: "/r3.jpg", alt: "Project 3" },
  { src: "/r4.jpg", alt: "Project 4" },
  { src: "/r5.jpg", alt: "Project 5" },
  { src: "/r6.jpg", alt: "Project 6" },
  { src: "/r7.jpg", alt: "Project 7" },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '80%',
    height: '80%',
    maxHeight: '90vh',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    &rsaquo;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    &lsaquo;
  </div>
);

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    initialSlide: selectedImageIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg w-full cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal} className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full z-50">
          Close
        </button>
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </Slider>
      </Modal>
    </section>
  );
};

export default Gallery;