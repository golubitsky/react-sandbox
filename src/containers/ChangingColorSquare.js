import { connect } from 'react-redux'
import { startChangeColors, stopChangeColors, changeColors } from '../actions'
import Square from './../components/Square'

const toggleOn = (isRunning, dispatch) => {
  if(isRunning){
    dispatch(stopChangeColors())
    return;
  }

  const interval = setInterval(() => {
    dispatch(changeColors())
  }, 150);
  
  dispatch(startChangeColors(interval));
}

const mapStateToProps = (state, ownProps) => ({
  color: state.gradientTest.color,
  otherColor: state.gradientTest.otherColor,
  gradientDegrees: state.gradientTest.gradientDegrees,
  isRunning: state.isRunning
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch,
})

function mergeProps(stateProps, dispatchProps, ownProps) {
  // use this to use the state in a callback?
  const { isRunning } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ...ownProps,
    ...stateProps,
    onClick: () => toggleOn(isRunning, dispatch)
  };
}

const ChangingColorSquare = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Square)

export default ChangingColorSquare
