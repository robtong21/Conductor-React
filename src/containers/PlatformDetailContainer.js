import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actionCreators from '../action-creators/regions'
import PlatformDetail from '../components/PlatformDetail'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.regions,
    platformId: ownProps.match.params.platformId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const PlatformDetailContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(PlatformDetail))

export default PlatformDetailContainer
