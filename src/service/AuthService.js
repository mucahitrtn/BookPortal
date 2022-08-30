import axios from "axios";
import LocalStorageUtil from "../util/LocalStorageUtil";
import qs from 'qs';

const AuthService = (function () {
  const _signin = async (credentials) => {
    let token = null;
    const url = "http://localhost:8080/api/login";
    try {
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(credentials),
        url,
      };
      const response = await axios(options);

      if (response !== null) {
        token = response.data;
        LocalStorageUtil.setToken(token);
        
      }
      else {
        console.log("CATCH ERROR");
        LocalStorageUtil.setToken(null);
      }

    
      return response;

    } catch (error) {
      console.log(error);
    }
    return null;
  };
 
  return {
    signin: _signin
  };
})();

export default AuthService;
