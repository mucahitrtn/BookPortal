const LocalStorageService = (function () {
    const TOKEN = "token";
    const ID = "id";
    const USERNAME = "username";
    const ROLES = "roles";
    const ROLE_ADMIN = "role_admin";
    const ROLE_USER = "role_user"
  
    function _setToken(response) {
      localStorage.setItem(TOKEN, response.token);
      localStorage.setItem(ID, response.id);
      localStorage.setItem(USERNAME, response.username);
      localStorage.setItem(ROLE_ADMIN, false);
      localStorage.setItem(ROLE_USER, false);
      response.roles.forEach(element => {
          if(element.authority === "ROLE_ADMIN"){
            localStorage.setItem(ROLE_ADMIN, true);
          }
          else{
            localStorage.setItem(ROLE_USER, true);
          }
      });
      
      localStorage.setItem(ROLES, response.roles);
    }
  
    function _getToken() {
      const res = {
        id: localStorage.getItem(ID),
        username: localStorage.getItem(USERNAME),
        token: localStorage.getItem(TOKEN),
        roles: localStorage.getItem(ROLES),
        role_admin: localStorage.getItem(ROLE_ADMIN),
        role_user: localStorage.getItem(ROLE_USER)
      }
      return res;
    }
  
    function _clearToken() {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(ID);
      localStorage.removeItem(USERNAME);
      localStorage.removeItem(ROLES);
      localStorage.removeItem(ROLE_ADMIN);
      localStorage.removeItem(ROLE_USER);
    }
  
    return {
      setToken: _setToken,
      getToken: _getToken,
      clearToken: _clearToken
    };
  })();
  
  export default LocalStorageService;
  