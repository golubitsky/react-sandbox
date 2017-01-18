import GradientTest from './../business_logic/GradientTest'

var gradientTestModel = new GradientTest();
let initialState = {
  gradientTest: {
    color: '#000',
    otherColor: '#aa0',
    gradientDegrees: 0
  },
  isRunning: false,
  interval: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_CHANGE_COLORS':
      return {
        ...state,
        interval: action.interval,
        isRunning: true
      }
    case 'STOP_CHANGE_COLORS':
      clearInterval(state.interval);

      return {
        ...state,
        interval: null,
        isRunning: false
      }
    case 'CHANGE_COLORS':
      console.log('changing')
      let c1 = state.gradientTest.color;
      let c2 = state.gradientTest.otherColor;
      let d = state.gradientTest.gradientDegrees;

      return {
        ...state,
        gradientTest: {
          color: c1,
          otherColor: gradientTestModel.nextColor(c2),
          gradientDegrees: gradientTestModel.nextDegrees(d)
        }
      }
    default:
      return state
  }
}
