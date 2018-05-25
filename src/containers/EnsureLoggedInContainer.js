import React from 'react';
import { connect } from 'react-redux'
import { isLoggedIn } from '../AuthService';
import { logIn } from '../action-creators/auth'

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL } = this.props

    let isLoggedIn = isLoggedIn() 
    console.log('isLoggedIn', isLoggedIn)
    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      dispatch(logIn(isLoggedIn))
      
      // browserHistory.replace("/login")
    }
  }

  render() {
    if (isLoggedIn) {
      return this.props.children
    } else {
      return (
        <button className="btn btn-default" onClick={this.initAuthState} type="submit">Log In</button>
      )
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)