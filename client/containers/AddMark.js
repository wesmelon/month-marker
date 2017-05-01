import React from 'react'
import { connect } from 'react-redux'
import { addMark } from '../actions'

let AddMark = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        dispatch(addMark(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Mark
        </button>
      </form>
    </div>
  )
}

AddMark = connect()(AddMark)

export default AddMark
