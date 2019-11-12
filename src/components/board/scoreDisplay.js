import React from "react";

const ScoreDisplay = props => (
  <div className="score-keeper">Score: {props.score} / Your Top Score: {props.topScore} / High Score: 15</div>
);

export default ScoreDisplay;