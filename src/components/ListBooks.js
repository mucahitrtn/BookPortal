import LocalStorageService from "../util/LocalStorageUtil";
import { useEffect, useState } from "react";
import { Table, Divider, Input, Modal, Button } from 'antd';
import axios from 'axios';
import { Delete, GetBooks } from "../service/HTTPService";
const { confirm } = Modal;
const { Search } = Input;

function ListBooks() {
    const info = LocalStorageService.getToken();
    const [data, setData] = useState([]);
    const [isCreate, setIsCreate] = useState();
    const [searchWord, setSearch] = useState("");

    const onSearch = (event) => {
        setSearch(event.target.value);
    };

    function showDeleteConfirm(bookId) {
        confirm({
            title: 'Are you sure you want to delete this book?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                const url = "http://localhost:8080/api/book/delete/" + bookId;            
                const response = Delete(url);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Author Name',
            dataIndex: 'authorName',
            key: 'authorName',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Publisher',
            key: 'publisher',
            dataIndex: 'publisher',
        },
        {
            title: 'Author ID',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => showDeleteConfirm(record.id)} danger>
                        Delete
                    </Button>
                </span>
            ),
        },
    ];
    
    const getBooks = () => {
        const error = "HATA";
        const url = "http://localhost:8080/api/book/books/";
        GetBooks(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setData(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    useEffect(() => {
        getBooks()
    }, [])


    return (
        <div >
            <br /><br />
            <Search
                onChange={onSearch}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="middle"
                style={{ "width": "600px", "margin": "auto", "zIndex": -5, "marginLeft": "40.5em" }}
            />
            <br /><br /><br /><br />
            <Table columns={columns} dataSource={data.filter(user => user.name.toLowerCase().includes(searchWord))} />
        </div>
    );
}

export default ListBooks;
