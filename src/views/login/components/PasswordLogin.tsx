import React from 'react';
import {Form, Toast, Button} from '@douyinfe/semi-ui';
import {api} from "../../../axios/request";
import {useNavigate} from "react-router-dom";


interface PhoneLoginParams {
  username: string,
  password: string,
  agree: boolean
}

export const PasswordLogin = (props: any) => {
  const navigate = useNavigate();

  const handleSubmit = (values: PhoneLoginParams) => {
    // console.log(values);
    api.login(values).then(res => {
      console.log(res.data)
      if (res.data.code === 500) {
        Toast.error('账号或密码不正确');
      } else if (res.data.code === 0) {
        navigate("/editor")
      }
    }).catch((error) => {
      console.log(error.toJSON());
    })
    Toast.info({
      content: '正在登录',
      duration: 1
    });
  };
  return (
    <div>
      <Form onSubmit={values => handleSubmit(values)} style={{width: "100%"}}>
        {({formState, values, formApi}) => (
          <>
            <Form.Input showClear field='username' label='用户名' style={{width: '100%'}}
                        placeholder='Enter your username'
                        rules={[{required: true, message: "用户名不可为空"}]}></Form.Input>
            <Form.Input showClear mode="password" field='password' label='密码' style={{width: '100%'}}
                        placeholder='Enter your password'
                        rules={[{required: true, message: "密码不可为空"}]}></Form.Input>
            <Form.Checkbox field='agree' noLabel>I have read and agree to the terms of service</Form.Checkbox>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>
                <span>Or</span>
                <Button theme='borderless'
                        style={{color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer'}}>
                  Sign up
                </Button>
              </p>
              <Button disabled={!values.agree} htmlType='submit' type="tertiary">Log in</Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};


