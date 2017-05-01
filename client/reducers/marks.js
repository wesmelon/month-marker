const mark = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MARK':
      return {
        id: action.id,
        text: action.text
      }

    default:
      return state
  }
}

const marks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARK':
      return [
        ...state,
        mark(undefined, action)
      ]
    default:
      return state
  }
}

export default marks
