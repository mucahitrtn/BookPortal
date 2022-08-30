import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/AuthService";


function Login() {

  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  
  const onFinish = async (values) => {
    const response = await AuthService.signin(credentials);
    if (response != null) {
      navigate("../profile");
    }
    setShowWarning(true);
    //UserService.delete();
  };

  
  const handleChange = (event) => {
   
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };


  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div>
    
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
    >
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input
          onChange={handleChange}
          name="username"
          value={credentials.username}
        />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password
          onChange={handleChange}
          name="password"
          value={credentials.password}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          Submit
        </Button>
        <br/>
        {showWarning ? <Alert message="Wrong username or password" onClick={()=> setShowWarning(false)} type="error" showIcon closable />: <></>}
        
      </Form.Item>
    </Form>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  );
}

export default Login;