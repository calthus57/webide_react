import React from 'react';
import {Form, Toast, Button} from '@douyinfe/semi-ui';

export const PasswordLogin = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    Toast.info('表单已提交');
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
