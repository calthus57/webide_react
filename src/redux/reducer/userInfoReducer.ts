import GetUserInfoAction from "../actionCreater/getUserInfoAction";

interface UserInfo{
  username:string,
  email: string,
  mobile:string
}

interface UserInfoAction{
  type:string,
  payload:UserInfo
}
const userInfoReducer=(prevState={
  userinfo:{}
},action:UserInfoAction)=>{
  let newState={...prevState}
  switch (action.type){
    case "add-userInfo":
      newState.userinfo=action.payload
      return newState
    default:
      return prevState
  }
}

export default userInfoReducer