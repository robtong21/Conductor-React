import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../action-creators/regions'
import PlatformDetail from '../components/PlatformDetail'

function mapStateToProps(state, ownProps) {
  console.log('ownprops', ownProps)
  return {
    regions: state.regions,
    id: ownProps.match.params.platformId
  }
}

function mapDispatchToProps(dispatch) {
  console.log('actioncreators!', actionCreators)
  return bindActionCreators(actionCreators, dispatch)
}

const PlatformDetailContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(PlatformDetail))

export default PlatformDetailContainer
