import LocalStorageService from "../util/LocalStorageUtil";
import { Button, Input, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Create } from "../service/HTTPService";

const { confirm } = Modal;
const { TextArea } = Input;
function CreateAuthor() {

    const [newAuthor, setnewAuthor] = useState({});
    const info = LocalStorageService.getToken();
    const [isCreate, setIsCreate] = useState(true);

    const handleChange = (event) => {
        setnewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value,
            "books": []
        });
    };

    function showConfirm() {
        confirm({
            title: `Do you Want to create ?`,
            content: 'Some descriptions',
            onOk() {
                const url = "http://localhost:8080/api/author/create";
                try {

                    Create(url, newAuthor);
                    setIsCreate(true);
                    
                } catch (error) {
                    console.log(error);
                }

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <div >

            {
                isCreate ? <><Button type="primary" onClick={() => setIsCreate(false)}> Create Author</Button></>
                    :
                <>
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
                                value={newAuthor.name}
                            />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={showConfirm} >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form></>
            }

        </div>
    );
}

export default CreateAuthor;
