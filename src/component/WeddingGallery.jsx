import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Pagination, Navigation } from 'swiper';
// import SwiperCore, { EffectCoverflow, Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageDir = 'src/assets/gallery/';
const images = [
  {
    id: 1,
    src: `${imageDir}wedding1.jpg`,
    thumbnail: `${imageDir}thumbnail1.jpg`,
  },
  {
    id: 2,
    src: `${imageDir}wedding2.jpg`,
    thumbnail: `${imageDir}thumbnail2.jpg`,
  },
  {
    id: 3,
    src: `${imageDir}wedding3.jpg`,
    thumbnail: `${imageDir}wedding3.jpg`,
  },
  {
    id: 4,
    src: `${imageDir}wedding4.jpg`,
    thumbnail: `${imageDir}wedding4.jpg`,
  },
  {
    id: 5,
    src: `${imageDir}wedding5.jpg`,
    thumbnail: `${imageDir}wedding5.jpg`,
  },
  {
    id: 6,
    src: `${imageDir}wedding6.jpg`,
    thumbnail: `${imageDir}thumbnail6.jpg`,
  },
  {
    id: 7,
    src: `${imageDir}wedding7.jpg`,
    thumbnail: `${imageDir}wedding7.jpg`,
  },
  {
    id: 8,
    src: `${imageDir}wedding8.jpg`,
    thumbnail: `${imageDir}wedding8.jpg`,
  },
  {
    id: 9,
    src: `${imageDir}wedding9.jpg`,
    thumbnail: `${imageDir}wedding9.jpg`,
  },
  {
    id: 10,
    src: `${imageDir}wedding10.jpg`,
    thumbnail: `${imageDir}thumbnail10.jpg`,
  },
  {
    id: 11,
    src: `${imageDir}wedding11.jpg`,
    thumbnail: `${imageDir}thumbnail11.jpg`,
  },
  {
    id: 12,
    src: `${imageDir}wedding12.jpg`,
    thumbnail: `${imageDir}wedding12.jpg`,
  },
  {
    id: 13,
    src: `${imageDir}wedding13.jpg`,
    thumbnail: `${imageDir}wedding13.jpg`,
  },
  {
    id: 14,
    src: `${imageDir}wedding14.jpg`,
    thumbnail: `${imageDir}wedding14.jpg`,
  },
  {
    id: 15,
    src: `${imageDir}wedding15.jpg`,
    thumbnail: `${imageDir}wedding15.jpg`,
  },
  {
    id: 16,
    src: `${imageDir}wedding16.jpg`,
    thumbnail: `${imageDir}wedding16.jpg`,
  },
  {
    id: 17,
    src: `${imageDir}wedding17.jpg`,
    thumbnail: `${imageDir}thumbnail17.jpg`,
  },
  {
    id: 18,
    src: `${imageDir}wedding18.jpg`,
    thumbnail: `${imageDir}thumbnail18.jpg`,
  },
  {
    id: 19,
    src: `${imageDir}wedding19.jpg`,
    thumbnail: `${imageDir}wedding19.jpg`,
  },
  {
    id: 20,
    src: `${imageDir}wedding20.jpg`,
    thumbnail: `${imageDir}thumbnail20.jpg`,
  },
  {
    id: 21,
    src: `${imageDir}wedding21.jpg`,
    thumbnail: `${imageDir}thumbnail21.jpg`,
  },
];

const WeddingGallery = () => {
  const [zoomSlideIsOpen, setzoomSlideIsOpen] = useState(false);
  const [zoomSlideIndex, setzoomSlideIndex] = useState(0);

  const openzoomSlide = (index) => {
    setzoomSlideIndex(index);
    setzoomSlideIsOpen(true);
  };

  const closezoomSlide = () => {
    setzoomSlideIsOpen(false);
  };

  return (
    <>
      <h3>저희의 스튜디오 웨딩 사진</h3>
      <div className="flex items-center justify-center text-center">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 3,
            fill: 'row',
          }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Grid, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.thumbnail}
                alt="wedding picture"
                onClick={() => openzoomSlide(index)}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {zoomSlideIsOpen && (
        <div
          className="fixed top-[45%] left-1/2 z-40 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-400/50 drop-shadow-sm"
          onClick={closezoomSlide}
        >
          <button
            className="absolute -top-6 right-5 rounded-full bg-gray-300/50"
            onClick={closezoomSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Swiper
            spaceBetween={10}
            pagination={{ type: 'fraction' }}
            modules={[Pagination]}
            onSlideChange={(swiper) => setzoomSlideIndex(swiper.activeIndex)}
            initialSlide={zoomSlideIndex}
            autoHeight
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="z-50">
                  <img src={image.src} alt="wedding picture" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default WeddingGallery;
