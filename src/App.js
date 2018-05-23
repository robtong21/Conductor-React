import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Router from './components/Router';
import { getAccessToken } from './AuthService'
import axios from 'axios'
import './styles/css/Sidebar.css'
import { Provider } from 'react-redux'
import store, { env } from './store'
import { getData } from './action-creators/data'
import SidebarContainer from './containers/SidebarContainer';

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
        store.dispatch(getData(res.data))
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
          <SidebarContainer />
          <Router />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
