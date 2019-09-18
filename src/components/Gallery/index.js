import React from 'react';
import styled from 'styled-components';
import GalleryCarousel from '../GalleryCarousel';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
	static propTypes = {
		sprites: PropTypes.object.isRequired
	};
	state = {
		selectedImageType: 'front_default'
	};

	handleSelectImage = type => {
		this.setState({
			selectedImageType: type
		});
	};

	render() {
		console.info('Gallary');
		const { sprites } = this.props;
		const { selectedImageType } = this.state;

		let seletedImageUrl = '';
		let carouselImages = null;
		if (sprites) {
			seletedImageUrl = sprites[selectedImageType];
			carouselImages = Object.keys(sprites)
				.filter(key => sprites[key] !== null)
				.map(key => {
					return {
						type: key,
						url: sprites[key]
					};
				});
		}

		return (
			<Wrapper>
				<Main image={seletedImageUrl} />
				<GalleryCarousel
					images={carouselImages.slice(0, 4)}
					onSelect={this.handleSelectImage}
					selectedImageType={selectedImageType}
				/>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	margin-bottom: 20px;
`;
const Main = styled.div`
	width: 100%;
	height: 200px;
	border: 3px solid #333;
	background-color: #fff;
	${props => {
		if (props.image) {
			return `background-image: url(${props.image});`;
		}
	}}
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: contain;
	margin-bottom: 20px;
`;

export default Gallery;
