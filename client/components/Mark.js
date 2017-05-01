import React from 'react'

const Mark = ({ onClick, text }) => (
  <li onClick={onClick}>
    {text}
  </li>
)

export default Mark;
