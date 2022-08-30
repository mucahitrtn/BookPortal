import LocalStorageService from "../util/LocalStorageUtil";
import { Button, Input, Form } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
import { Update } from "../service/HTTPService";

function CreateBook(props) {
    const [hide, setHide] = useState(false);
    const [newBook, setNewBook] = useState({});
    const info = LocalStorageService.getToken();

    const handleChange = (event) => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        });

        console.log(newBook);
    };

    const createNewBook = () => {
        const url = `http://localhost:8080/api/author/createBook/${props.props.id}`;
        try {
            Update(url, newBook);
            setHide(true);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        !hide ? <div >
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
                <Form.Item label="Author Name">
                    <Input
                        onChange={handleChange}
                        name="authorName"
                        value={props.props.name}
                        disabled
                    />
                </Form.Item>
                <Form.Item label="Author ID">
                    <Input
                        onChange={handleChange}
                        name="authorId"
                        value={props.props.id}
                        disabled
                    />
                </Form.Item>
                <Form.Item
                    label="Book Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input book name!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="name"
                        value={newBook.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Publish Date"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: "Please input Publish Date!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="date"
                        value={newBook.date}
                    />
                </Form.Item>
                <Form.Item
                    label="Publisher"
                    name="publisher"
                    rules={[
                        {
                            required: true,
                            message: "Please input publisher!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="publisher"
                        value={newBook.publisher}
                    />
                </Form.Item>

                <Form.Item
                    label="Img Link"
                    name="imgLink"
                    rules={[
                        {
                            required: true,
                            message: "Please input book image!"
                        }
                    ]}
                >
                    <Input
                        onChange={handleChange}
                        name="imgLink"
                        value={newBook.imgLink}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={createNewBook}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div> : <></>
    );
}

export default CreateBook;
