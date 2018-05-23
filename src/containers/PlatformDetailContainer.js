import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as regionActionCreators from '../action-creators/data'
import * as platformActionCreators from '../action-creators/platform'
import PlatformDetail from '../components/PlatformDetail'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.regionsReducer.regions,
    platformId: ownProps.match.params.platformId,
    environmentURL: state.environmentURL,
    selectedRegions: state.regionsReducer.selectedRegions,
    componentSettings: state.platformReducer.componentSettings,
    currentSettings: state.platformReducer.currentSettings,
    settingGroups: state.platformReducer.settingGroups,
    selectedComponentSettings: state.platformReducer.selectedComponentSettings,
    componentName: state.platformReducer.componentName,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, regionActionCreators, platformActionCreators), dispatch)
}

const PlatformDetailContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(PlatformDetail))

export default PlatformDetailContainer
