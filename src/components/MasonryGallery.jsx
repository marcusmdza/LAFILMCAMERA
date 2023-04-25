import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const breakpointColumnsObj = {
  default: 2,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryGallery = ({ images }) => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    setGalleryImages(images);
  }, [images]);

  return (
    <GalleryContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryImages.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image.src} alt={`Image ${index}`} />
          </ImageWrapper>
        ))}
      </Masonry>
    </GalleryContainer>
  );
};

export default MasonryGallery;
