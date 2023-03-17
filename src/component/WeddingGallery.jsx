import ImageGallery from 'react-image-gallery';

const images = [];

const WeddingGallery = () => {
  return (
    <>
      <h3>저희의 스튜디오 웨딩 사진</h3>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
      />
    </>
  );
};
