import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../action-creators/data'
import Sidebar from '../components/Sidebar';

function mapStateToProps(state, ownProps) {
  return {
    platforms: state.dataReducer.platforms,
    settingGroups: state.dataReducer.settingGroups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
