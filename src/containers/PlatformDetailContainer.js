import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as dataActionCreators from '../action-creators/data'
import * as platformActionCreators from '../action-creators/platform'
import PlatformDetail from '../components/PlatformDetail'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.dataReducer.regions,
    platformId: ownProps.match.params.platformId,
    selectedRegions: state.dataReducer.selectedRegions,
    currentSettings: state.settingsReducer.currentSettings,
    settingGroups: state.settingsReducer.settingGroups,
    platformName: state.settingsReducer.componentName,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, dataActionCreators, platformActionCreators), dispatch)
}

const PlatformDetailContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(PlatformDetail))

export default PlatformDetailContainer
