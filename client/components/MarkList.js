import React from 'react'
import Mark from './Mark'

const MarkList = ({ marks, onMarkClick }) => (
  <ul>
    {marks.map(mark =>
      <Mark
        key={mark.id}
        {...mark}
        onClick={() => onMarkClick(mark.id)}
      />
    )}
  </ul>
)

export default MarkList
