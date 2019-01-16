import React from "react";
import styled from "styled-components";
import Gallery from "../Gallery";

export default class Main extends React.Component {
  render() {
    let { selectedPokemonData } = this.props;

    return (
      <Wrapper>
        <Gallery
          sprites={selectedPokemonData ? selectedPokemonData.sprites : null}
        />
        <Info>
          {selectedPokemonData ? (
            <div>
              <p>이름: {selectedPokemonData.height}</p>
              <p>신장: {selectedPokemonData.weight}</p>
              <p>무게: {selectedPokemonData.name}</p>
            </div>
          ) : null}
        </Info>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-block;
  width: 1110px;
  height: 800px;
  background-color: #df0025;
  border: 3px solid #333;
  padding: 10px 100px;
`;

const Info = styled.div`
  padding: 30px;
  border: 3px solid #333;
  height: 180px;
  background-color: #fff;
  text-align: left;
  p {
    font-size: 20px;
    font-weight: 800;
    margin: 0px;
  }
`;
