import React, {useState} from 'react';
import styles from './login.module.css'
import {Nav} from '@douyinfe/semi-ui';
import {IconSmartphoneStroked, IconKey} from "@douyinfe/semi-icons";
import qrcode from './assets/img/CodeAT.png'
import {PhoneLogin} from "./components/PhoneLogin";
import {PasswordLogin} from "./components/PasswordLogin";


export const Login = () => {
  const [loginMode, setLoginMode] = useState("password")
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.qrcode}>
          <p>扫码关注公众号</p>
          <img src={qrcode} alt="二维码"/>
        </div>
        <div style={{
          width: "65%", height: "100%", float: "left", padding: "20px"
        }}>
          <Nav mode={'horizontal'}>
            <Nav.Item itemKey={'phone-login'} text={"验证码登录"} icon={<IconSmartphoneStroked/>}
                      onClick={() => setLoginMode('phone')}/>
            <Nav.Item itemKey={'password-login'} text={"密码登录"} icon={<IconKey/>}
                      onClick={() => setLoginMode('password')}/>
          </Nav>
          {loginMode === 'phone' && <PhoneLogin/>}
          {loginMode === 'password' && <PasswordLogin/>}
        </div>

      </div>
    </div>
  );
};
