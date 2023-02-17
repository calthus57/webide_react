import React, {useState} from 'react';
import {Form, Button} from '@douyinfe/semi-ui';
import {useNavigate} from "react-router-dom";

export const PhoneLogin = () => {
  const [verCodeButtonState, setVerCodeButtonState] = useState(true)
  const [verCodeButtonText, setVerCodeButtonText] = useState('获取验证码')

  const push = useNavigate();

  const sendVerCode = () => {
    setVerCodeButtonState(false)
    let maxTime = 60
    let timer = setInterval(() => {
      if (maxTime > 0) {
        --maxTime
        setVerCodeButtonText(maxTime + '秒后可重新获取')
      } else {
        setVerCodeButtonText('获取验证码')
        setVerCodeButtonState(true)
        maxTime = 60
        clearInterval(timer)
      }
    }, 1000)
    // axios.ajax({
    //   //这里写后台接口就行了
    // }).then(res => {
    //   //调用接口的回调
    // })
  }
  return (
    <div>
      <Form onSubmit={(values) => console.log(values)} labelPosition='top' style={{width: "100%"}}>
        {({formState, values, formApi}) => (
          <>
            <Form.InputGroup style={{width: "100%"}} label={{text: (<span>手机号码</span>), required: true}}
                             labelPosition='top'>
              <Form.Select style={{width: "25%"}} field='phonePrefix' initValue='+86' rules={[{required: true}]}>
                <Form.Select.Option value='+1'>美国+1</Form.Select.Option>
                <Form.Select.Option value='+852'>香港+852</Form.Select.Option>
                <Form.Select.Option value='+86'>中国+86</Form.Select.Option>
                <Form.Select.Option value='+81'>日本+81</Form.Select.Option>
              </Form.Select>
              <Form.Input initValue='18912345678' style={{width: "75%"}} field='phoneNumber'
                          rules={[{required: true, message: "手机号不可为空"}]}
                          showClear/>
            </Form.InputGroup>

            <Form.Input showClear field='验证码' trigger='blur' initValue='Semi'
                        style={{width: "100%"}} rules={[{required: true, message: "验证码不可为空"}]}></Form.Input>
            <div style={{overflow: "hidden"}}>
              <Button style={{float: "right"}} disabled={!verCodeButtonState}
                      onClick={sendVerCode}>{verCodeButtonText}</Button>
            </div>

            <Form.Checkbox field='agree' noLabel>I have read and agree to the terms of service</Form.Checkbox>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>
                <span>Or</span><Button theme='borderless'
                                       style={{color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer'}}>Sign
                up</Button>
              </p>
              <Button disabled={!values.agree} htmlType='submit' type="tertiary">Log in</Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
