import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state, ownProps) => ({
  value: state.cellCountHistory.slice(-1)[0].cellCount
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatusDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display)

export default StatusDisplay
