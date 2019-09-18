import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

GalleryCarousel.protoTypes = {
	images: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	selectedImageType: PropTypes.string.isRequired
};

function GalleryCarousel({ images, onSelect, selectedImageType }) {
	console.info('GalleryCarousel');
	let list = null;
	if (images && images.length > 0)
		list = images.map(image => (
			<Box key={image.type} onClick={() => onSelect(image.type)} active={image.type === selectedImageType}>
				<img src={image.url} alt={image.type} />
			</Box>
		));

	return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
	white-space: nowrap;
`;
const Box = styled.div`
	display: inline-block;
	cursor: pointer;
	width: 70px;
	height: 70px;
	border: 3px solid #333;
	background-color: ${props => (props.active ? 'orange' : '#fff')};
	img {
		width: 100%;
		height: 100%;
	}
	margin-right: 10px;
`;

export default GalleryCarousel;
