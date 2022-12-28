import {api} from "../../axios/request";
async function getUserInfoAction(username:string){
  let res=await api.getUserInfo();
  return {
    type:"add-userInfo",
    payload:{
      username:res.data.user.username,
      email: res.data.user.email,
      mobile:res.data.user.mobile
    }
  }
}

export default getUserInfoAction