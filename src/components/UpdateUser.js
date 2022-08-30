import LocalStorageService from "../util/LocalStorageUtil";
import { Button, Input, Form } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
import { Update } from "../service/HTTPService";

function CreateBook(props) {
    console.log(props.props.id)
    const [updatedUser, setUpdatedUser] = useState({});
    const info = LocalStorageService.getToken();
    const [showForm, setShowForm] = useState(true);

    const handleChange = (event) => {
        setUpdatedUser({
            ...updatedUser,
            [event.target.name]: event.target.value
        });

    };

    const UpdateUser = () => {
        const url = `http://localhost:8080/api/user/update/${props.props.id}`;
        try {
            
            Update(url, updatedUser);
            setShowForm(false);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div >
       { showForm ?
            <Form
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
                <Form.Item label="Id">
                    <Input
                        onChange={handleChange}
                        name="id"
                        value={props.props.id}
                        disabled
                    />
                </Form.Item>
                <Form.Item label="username">
                    <Input
                        onChange={handleChange}
                        name="username"
                        value={props.props.username}
                        disabled
                    />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Name!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="name"
                        value={updatedUser.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Age!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="age"
                        value={updatedUser.age}
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
                        value={updatedUser.password}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={UpdateUser}>
                        Update
                    </Button>
                </Form.Item>
            </Form>
           :
           <></> }
        </div>
    );
}

export default CreateBook;
