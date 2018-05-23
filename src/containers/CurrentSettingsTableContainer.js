import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dataActionCreators from '../action-creators/data'
import * as settingGroupActionCreators from '../action-creators/settingGroup'
import CurrentSettingsTable from '../components/CurrentSettingsTable'

function mapStateToProps(state, ownProps) {
  return {
    regions: state.dataReducer.regions,
    selectedRegions: state.dataReducer.selectedRegions,
    currentSettings: state.settingsReducer.currentSettings, 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, dataActionCreators, settingGroupActionCreators), dispatch)
}

const CurrentSettingsTableContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentSettingsTable)

export default CurrentSettingsTableContainer
