import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

List.propTypes = {
	pokemons: PropTypes.array.isRequired,
	selectedPokemonUrl: PropTypes.string.isRequired,
	onPokemonClick: PropTypes.func.isRequired
};

function List({ pokemons, selectedPokemonUrl, onPokemonClick }) {
	console.info('List');
	let list = null;
	if (pokemons && pokemons.length > 0)
		list = pokemons.map(pokemon => (
			<Item
				key={pokemon.url}
				onClick={() => onPokemonClick(pokemon.url)}
				active={pokemon.url === selectedPokemonUrl}
			>
				{pokemon.name}
			</Item>
		));

	return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
	display: inline-block;
	width: 150px;
	height: 500px;
	border: 3px solid #333;
	border-left: 0px;
	overflow-y: scroll;
`;
const Item = styled.div`
	cursor: pointer;
	height: 50px;
	padding: 10px 10px;
	font-size: 20px;
	font-weight: 600;
	color: ${props => (props.active ? '#fff' : '#333')};
	background-color: ${props => (props.active ? '#333' : '#f9f9f9')};
`;

export default List;
