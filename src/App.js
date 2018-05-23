import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Sidebar from './components/Sidebar';
import Router from './components/Router';
import { getAccessToken } from './AuthService'
import axios from 'axios'
import './styles/css/Sidebar.css'
import { Provider } from 'react-redux'
import store, { env } from './store'
import { getRegionsList, getPlatformList, getSettingGroupsList} from './action-creators/data'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: '',
      config: '',
      groups: [],
      platforms: [],
      regions: [],
      environmentURL: 'http://devplatform.rightnow.org',
    }
  } 
  
  getData = () => {
    const accessToken = getAccessToken()
    const AuthStr = 'Bearer '.concat(accessToken);
      axios.get(`${env.environmentURL}/administration/v1/settings/home`, { headers: { Authorization: AuthStr}})
      .then(res => {
        console.log('res', res)
        store.dispatch(getRegionsList(res.data.regions))
        store.dispatch(getPlatformList(res.data.components))
        store.dispatch(getSettingGroupsList(res.data.groups))
      })
  }

  componentDidMount() {
    this.getData()
  }

render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Auth />
          <Sidebar />
          <Router />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
