import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dataActionCreators from '../action-creators/data'
import * as settingGroupActionCreators from '../action-creators/settingGroup'
import SettingsTable from '../components/SettingsTable'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.dataReducer.regions,
    selectedRegions: state.dataReducer.selectedRegions,
    settings: state.settingsReducer.settings, 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, dataActionCreators, settingGroupActionCreators), dispatch)
}

const SettingsTableContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsTable)

export default SettingsTableContainer
