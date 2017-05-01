let nextMarkerId = 0
export const addMark = (text) => {
  return {
    type: 'ADD_MARK',
    id: nextMarkerId++,
    text
  }
}
