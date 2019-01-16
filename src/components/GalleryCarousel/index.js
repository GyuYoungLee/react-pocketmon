import React from "react";
import styled from "styled-components";

class GalleryCarousel extends React.Component {
  render() {
    const { images, onSelect } = this.props;

    return (
      <Wrapper>
        {images
          ? images.map(image => {
              const { type, url } = image;
              return (
                <Box key={type} onClick={() => onSelect(type)}>
                  <img src={url} alt={type} />
                </Box>
              );
            })
          : null}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  white-space: nowrap;
`;

const Box = styled.div`
  display: inline-block;
  margin-right: 5px;
  border: 3px solid #333;
  width: 70px;
  height: 70px;
  background-color: #fff;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default GalleryCarousel;
