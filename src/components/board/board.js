import React, { Component } from "react";
import { Animated } from "react-animated-css";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoreDisplay";

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const initalChars = [
  {
    name: "Bowser",
    img: "img/200x200/Bowser.png",
    clicked: false
  },
  {
    name: "Dr. Mario",
    img: "img/200x200/DrMario.png",
    clicked: false
  },
  {
    name: "Duck Hunt",
    img: "img/200x200/DuckHunt.png",
    clicked: false
  },
  {
    name: "Incineroar",
    img: "img/200x200/Incineroar.png",
    clicked: false
  },
  {
    name: "Inkling",
    img: "img/200x200/Inkling.png",
    clicked: false
  },
  {
    name: "Jigglypuff",
    img: "img/200x200/Jiggly.png",
    clicked: false
  },
  {
    name: "Joker",
    img: "img/200x200/Joker.png",
    clicked: false
  },
  {
    name: "Mario",
    img: "img/200x200/Mario.png",
    clicked: false
  },
  {
    name: "Mii Gunner",
    img: "img/200x200/MiiGunner.png",
    clicked: false
  },
  {
    name: "Mr. Game & Watch",
    img: "img/200x200/MrGame.png",
    clicked: false
  },
  {
    name: "Nes",
    img: "img/200x200/Nes.png",
    clicked: false
  },
  {
    name: "Pikachu",
    img: "img/200x200/Pikachu.png",
    clicked: false
  },
  {
    name: "Ridley",
    img: "img/200x200/Ridley.png",
    clicked: false
  },
  {
    name: "Sonic",
    img: "img/200x200/Sonic.png",
    clicked: false
  },
  {
    name: "Zero Suit Samus",
    img: "img/200x200/ZeroSuit.png",
    clicked: false
  }
];

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0,
        topScore: 0
      },
      characters: shuffleArray(initalChars)
    };
  }
  onCharacterClick = index => {
    if (!this.state.characters[index].clicked) {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map((character, current) => {
            return current === index
              ? { ...character, clicked: true }
              : character;
          })
        ),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
        }
      });
      if (this.state.user.score >= this.state.user.topScore) {
        this.setState({
          user: {
            ...this.state.user,
            score: this.state.user.score + 1,
            topScore: this.state.user.topScore + 1
          }
        });
      }
      if (this.state.user.topScore === 15) {
        alert("Congratualtions! You have a fantstic memory!");
      }
    } else {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map(character => {
            return { ...character, clicked: false };
          })
        ),
        user: {
          ...this.state.user,
          score: 0
        }
      });
    }
  };

  render() {
    return (
      <div className="Board">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>
            <h2>
              SUPER
              <br />
              MEMORY
              <br />
              BROS.!
            </h2>
          </div>
        </Animated>
        <h3>
          Click on each Smash Bros. Chatacter, but only once! <br /> Each time
          you click, the board will shuffle!
          <br />
          Try to get the high score! <br />
          Clicking on the same character will end the game!
        </h3>

        <ScoreDisplay
          score={this.state.user.score}
          topScore={this.state.user.topScore}
        />
        <CharacterBox
          characters={this.state.characters}
          onCharacterClick={this.onCharacterClick}
        />
      </div>
    );
  }
}
