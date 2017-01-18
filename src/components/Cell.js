import React, { PropTypes } from 'react'
import './Cell.css';
import classNames from 'classnames';

let determineColor = (isAlive) => {
  return classNames('square', { alive: isAlive })
}

const Cell = ({ onClick, isAlive, displaySize }) => (
  <div
    style={{width: displaySize , height: displaySize }}
    onClick={() => onClick()}
    className={determineColor(isAlive)}
  />
)

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAlive: PropTypes.bool.isRequired
}

export default Cell;
