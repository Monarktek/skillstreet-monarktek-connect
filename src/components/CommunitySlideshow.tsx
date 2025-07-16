import { useState, useEffect } from 'react';
import handshakeImage from '@/assets/slideshow-handshake.jpg';
import lawnImage from '@/assets/slideshow-lawn.jpg';
import deliveryImage from '@/assets/slideshow-delivery.jpg';
import plumberImage from '@/assets/slideshow-plumber.jpg';
import phonesImage from '@/assets/slideshow-phones.jpg';

const slides = [
  {
    image: handshakeImage,
    title: "Building Connections",
    description: "Meet your neighbors and build lasting relationships"
  },
  {
    image: lawnImage,
    title: "Helping Hands",
    description: "Find help with yard work and home maintenance"
  },
  {
    image: deliveryImage,
    title: "Local Services",
    description: "Support local businesses and delivery services"
  },
  {
    image: plumberImage,
    title: "Professional Services",
    description: "Connect with trusted local professionals"
  },
  {
    image: phonesImage,
    title: "Stay Connected",
    description: "Coordinate and communicate with your community"
  }
];

export default function CommunitySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-5xl mx-auto">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.description}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {slide.title}
            </h3>
            <p className="text-white/90 text-lg">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-glow' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}