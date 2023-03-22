import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageDir = '/photos/';
const images = [
  {
    id: 1,
    src: `${imageDir}wedding1.webp`,
    thumbnail: `${imageDir}thumbnail1.webp`,
  },
  {
    id: 2,
    src: `${imageDir}wedding2.webp`,
    thumbnail: `${imageDir}thumbnail2.webp`,
  },
  {
    id: 3,
    src: `${imageDir}wedding3.webp`,
    thumbnail: `${imageDir}wedding3.webp`,
  },
  {
    id: 4,
    src: `${imageDir}wedding4.webp`,
    thumbnail: `${imageDir}wedding4.webp`,
  },
  {
    id: 5,
    src: `${imageDir}wedding5.webp`,
    thumbnail: `${imageDir}wedding5.webp`,
  },
  {
    id: 6,
    src: `${imageDir}wedding6.webp`,
    thumbnail: `${imageDir}thumbnail6.webp`,
  },
  {
    id: 7,
    src: `${imageDir}wedding7.webp`,
    thumbnail: `${imageDir}wedding7.webp`,
  },
  {
    id: 8,
    src: `${imageDir}wedding8.webp`,
    thumbnail: `${imageDir}wedding8.webp`,
  },
  {
    id: 9,
    src: `${imageDir}wedding9.webp`,
    thumbnail: `${imageDir}wedding9.webp`,
  },
  {
    id: 10,
    src: `${imageDir}wedding10.webp`,
    thumbnail: `${imageDir}thumbnail10.webp`,
  },
  {
    id: 11,
    src: `${imageDir}wedding11.webp`,
    thumbnail: `${imageDir}thumbnail11.webp`,
  },
  {
    id: 12,
    src: `${imageDir}wedding12.webp`,
    thumbnail: `${imageDir}wedding12.webp`,
  },
  {
    id: 13,
    src: `${imageDir}wedding13.webp`,
    thumbnail: `${imageDir}wedding13.webp`,
  },
  {
    id: 14,
    src: `${imageDir}wedding14.webp`,
    thumbnail: `${imageDir}wedding14.webp`,
  },
  {
    id: 15,
    src: `${imageDir}wedding15.webp`,
    thumbnail: `${imageDir}wedding15.webp`,
  },
  {
    id: 16,
    src: `${imageDir}wedding16.webp`,
    thumbnail: `${imageDir}wedding16.webp`,
  },
  {
    id: 17,
    src: `${imageDir}wedding17.webp`,
    thumbnail: `${imageDir}thumbnail17.webp`,
  },
  {
    id: 18,
    src: `${imageDir}wedding18.webp`,
    thumbnail: `${imageDir}thumbnail18.webp`,
  },
  {
    id: 19,
    src: `${imageDir}wedding19.webp`,
    thumbnail: `${imageDir}wedding19.webp`,
  },
  {
    id: 20,
    src: `${imageDir}wedding20.webp`,
    thumbnail: `${imageDir}thumbnail20.webp`,
  },
  {
    id: 21,
    src: `${imageDir}wedding21.webp`,
    thumbnail: `${imageDir}thumbnail21.webp`,
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
      <div className="bg-gray-50 pt-4 pb-7 shadow-inner">
        <h3 className="font-italianno text-4xl">Photos</h3>
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
      </div>
    </>
  );
};

export default WeddingGallery;
