import { connect } from 'react-redux'
import { initializeRandom } from '../actions'
import Slider from '../components/Slider'

const mapStateToProps = (state, ownProps) => ({
  min: 0,
  max: 100
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    ...ownProps,
    onChange: (percentage) => dispatch(initializeRandom(percentage))
})

const RandomDistributionSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)

export default RandomDistributionSlider
