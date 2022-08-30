import { Button, Input, Form, Alert, Modal } from "antd";
import { useEffect, useState } from "react";
import LocalStorageService from "../util/LocalStorageUtil";
import axios from 'axios';
import qs from 'qs';
import { Create } from "../service/HTTPService";

const { confirm } = Modal;

function CreateUser() {
  const [newUser, setnewUser] = useState({});
  const [isCreated, setIsCreated] = useState(false);
  const info = LocalStorageService.getToken();
  const [isCreate, setIsCreate] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setnewUser({
      ...newUser,
      [event.target.name]: event.target.value
    });

    console.log(newUser);
  };

  function showConfirm() {
    confirm({
      title: `Do you Want to create ?`,
      content: 'Some descriptions',
      onOk() {
        const url = "http://localhost:8080/api/user/save";
        try {         

          Create(url, newUser).then((user) => {
            if (user.username !== null) {
              setIsCreate(true);
            }
          });
        } catch (error) {
          console.log(error);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }


  const handleClick = () => {
    setIsCreate(false);
  };

  return (
    <div >
      {

        isCreate ? <><Button type="primary" onClick={handleClick}> Create User</Button></> : <><Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 12
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
              value={newUser.username}
            />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input
              onChange={handleChange}
              name="name"
              value={newUser.name}
            />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input
              onChange={handleChange}
              name="age"
              value={newUser.age}
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
              value={newUser.password}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit" onClick={showConfirm}>
              Submit
            </Button>
          </Form.Item>
        </Form></>

      }
    </div>
  );
}

export default CreateUser;
