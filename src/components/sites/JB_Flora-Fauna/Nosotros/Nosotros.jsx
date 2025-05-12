import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './gallery.css'; // asegúrate de que esta ruta sea correcta

const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
  '16.jpeg', '17.jpg',
];

export default function Galeria() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="image-wrapper" key={index}>
            <Image
              src={`/pulmon_verde/gallery/${img}`}
              alt={`Imagen ${index + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
