import React from 'react';
import styled from 'styled-components';
import Gallery from '../Gallery';
import PropTypes from 'prop-types';

Main.propTypes = {
	selectedPokemonData: PropTypes.object.isRequired
};

function Main({ selectedPokemonData }) {
	console.info('Main');
	return (
		<Wrapper>
			<Gallery sprites={selectedPokemonData && selectedPokemonData.sprites} />
			<Info>
				{selectedPokemonData && (
					<div>
						<p>이름: {selectedPokemonData.name}</p>
						<p>신장: {selectedPokemonData.height}</p>
						<p>무게: {selectedPokemonData.weight}</p>
					</div>
				)}
			</Info>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: inline-block;
	width: 800px;
	height: 500px;
	border: 3px solid #333;
	background-color: #df0025;
	padding: 10px 100px;
`;
const Info = styled.div`
	height: 110px;
	border: 3px solid #333;
	background-color: #fff;
	padding: 20px;
	text-align: left;
	p {
		font-size: 20px;
		font-weight: 800;
		margin: 0px;
	}
	`;

export default Main;
