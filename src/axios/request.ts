import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:88'
});

const url = {
  login: "/api/sys/login",
  getUserInfo:"api/sys/user/info"
}

interface loginParams {
  username: string,
  password?: string,
  verificationCode?: string
}

export const api = {
  login(params: loginParams) {
    return instance.post(url.login, params)
  },
  getUserInfo(){
    return instance.get(url.getUserInfo)
  }
}
