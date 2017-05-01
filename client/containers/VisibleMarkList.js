import { connect } from 'react-redux'
import MarkList from '../components/MarkList'

const mapStateToProps = (state) => {
  return {
    marks: state.marks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const VisibleMarkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkList)

export default VisibleMarkList
