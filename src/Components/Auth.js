import React from 'react'
import axios from 'axios'

class Auth extends React.Component {
  constructor() {
    super()
    this.oauthService = {
      loginUrl: 'https://devarbiter.rightnow.org/connect/authorize',
      redirectUri: 'http://localhost:4400/',
      clientId: "conductor",
      scope: "api.platform api.platform.administration",
      responseType: "token"    
    }

    this.initAuthState = this.initAuthState.bind(this)
    this.tryLogin();

    // this.state = {
    //   isLoggedIn: this.isLoggedIn()
    // }
  }

  initAuthState() {
    var state = Date.now() + "" + Math.random();
    localStorage.setItem("state", state);
    localStorage.setItem("redirect_uri", window.location.pathname)

    var url =
          this.oauthService.loginUrl + "?" +
          "client_id=" + encodeURI(this.oauthService.clientId) + "&" +
          "redirect_uri=" + encodeURI(this.oauthService.redirectUri) + "&" +
          "response_type=" + encodeURI(this.oauthService.responseType) + "&" +
          "scope=" + encodeURI(this.oauthService.scope) + "&" +
          "state=" + encodeURI(state) + "&" + 
          "request_uri=" + encodeURI(window.location.pathname);

    window.location = url

  }
  
  tryLogin() {
    let parts;
    
    parts = this.getHashParams(); // { "" : undefined }
    let params = JSON.stringify(parts); // "{}"
    
    if (params !== "{}") {
      
      let accessToken = JSON.parse(params);
      localStorage.setItem("AccessToken", accessToken.access_token);
      
      let token = this.parseJwt(accessToken.access_token);
      localStorage.setItem("exp", token.exp)

      // remove token from query string in url
      window.history.replaceState({},
        window.document.title,
        window.location.origin + window.location.pathname);
        
        if (localStorage.getItem("redirect_uri")) {
          let path = localStorage.getItem("redirect_uri")
          localStorage.removeItem("redirect_uri")
          window.location.href = path
        }
      }
  }

  getHashParams() {
    var hash = window.location.hash.substr(1);
    return hash.split('&').reduce(function (result, item) {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {});
  }


  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  render() {
    const button = !this.props.isLoggedIn ? (
      <button className="btn btn-default" onClick={this.initAuthState} type="submit">Log In</button>
    ) : ""
    return null
  }
}

export default Auth