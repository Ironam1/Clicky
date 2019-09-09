import React from "react";

const ScoreDisplay = props => (
  <div className="score-keeper">Score: {props.score} / Top Score: {props.topScore}</div>
);

export default ScoreDisplay;