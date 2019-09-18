import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Main from './components/Main';
import List from './components/List';
import axios from 'axios';

class App extends Component {
	state = {
		pokemons: [],
		selectedPokemonUrl: '',
		selectedPokemonData: null
	};

	async componentDidMount() {
		const pokemons = await this.fetchPokemons({ url: 'https://pokeapi.co/api/v2/pokemon/' });
		const selectedPokemonUrl = pokemons[0].url;
		const selectedPokemonData = await this.fetchSelectedPokemon({ url: selectedPokemonUrl });
		this.setState({
			pokemons,
			selectedPokemonUrl,
			selectedPokemonData
		});
	}
	async fetchPokemons({ url }) {
		const { data } = await axios.get(url);
		return data.results;
	}
	async fetchSelectedPokemon({ url }) {
		const { data } = await axios.get(url);
		return data;
	}
	handlePokemonClick = async url => {
		const selectedPokemonData = await this.fetchSelectedPokemon({ url });
		this.setState({
			selectedPokemonUrl: url,
			selectedPokemonData
		});
	};

	render() {
		console.info('App');
		const { pokemons, selectedPokemonUrl, selectedPokemonData } = this.state;
		return (
			<Wrapper>
				<GlobalStyle />
				{selectedPokemonData && <Main selectedPokemonData={selectedPokemonData} />}
				{pokemons && selectedPokemonUrl && (
					<List
						pokemons={pokemons}
						onPokemonClick={this.handlePokemonClick}
						selectedPokemonUrl={selectedPokemonUrl}
					/>
				)}
			</Wrapper>
		);
	}
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: "NanumSquare";
  }
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export default App;
