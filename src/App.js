import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import List from "./components/List";

class App extends Component {
  state = {
    pokemons: [],
    selectedPokemonUrl: null,
    selectedPokemonData: null
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      // console.log(data);

      const { results } = data;
      this.setState({
        pokemons: results
      });
    } catch (err) {
      console.error(err);
    }
  }

  handlePokemonClick = url => {
    // alert(url);
    this.setState({
      selectedPokemonUrl: url
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { selectedPokemonUrl } = this.state;
    try {
      if (selectedPokemonUrl !== prevState.selectedPokemonUrl) {
        const response = await fetch(selectedPokemonUrl);
        const data = await response.json();
        // console.log(data);

        this.setState({
          selectedPokemonData: data
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { pokemons, selectedPokemonUrl, selectedPokemonData } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <Main selectedPokemonData={selectedPokemonData} />
        <List
          pokemons={pokemons}
          onPokemonClick={this.handlePokemonClick}
          selectedPokemonUrl={selectedPokemonUrl}
        />
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
