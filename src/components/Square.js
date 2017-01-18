import React from 'react'

const Square = ({color, otherColor, gradientDegrees, onClick}) => (
  <div
    style={{
      background: `linear-gradient( ${gradientDegrees}deg, ${color}, ${otherColor} )`,
      width: 400,
      height: 400
    }}
    onClick={onClick}
  >Click me, I'm a linear-gradient React demo
  </div>
)

export default Square;
