export function getAccessToken() {
  if (localStorage.getItem("AccessToken") && localStorage.getItem("exp")) {

    let expired = parseInt(localStorage.getItem("exp"), 0) < (new Date().getTime() / 1000);

    if (expired) {
      localStorage.removeItem("AccessToken")
      
    } else {
      let accessToken = localStorage.getItem("AccessToken");
      return accessToken;
    }
  } 

  return null;
}

export function isLoggedIn() {
  let token = getAccessToken();
  return token != null; 
}