import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as dataActionCreators from '../action-creators/data'
import * as settingGroupActionCreators from '../action-creators/settingGroup'
import SettingGroupDetail from '../components/SettingGroupDetail'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.dataReducer.regions,
    selectedRegions: state.dataReducer.selectedRegions,
    settingGroupId: ownProps.match.params.settingGroupId,
    settingGroupName: state.settingsReducer.settingGroupName,
    groupSettings: state.settingsReducer.groupSettings, 
    settingGroupComponents: state.settingsReducer.settingGroupComponents,
    selectedGroupSettings: state.settingsReducer.selectedGroupSettings
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, dataActionCreators, settingGroupActionCreators), dispatch)
}

const SettingGroupContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingGroupDetail))

export default SettingGroupContainer
