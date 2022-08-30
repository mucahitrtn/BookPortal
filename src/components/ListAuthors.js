import LocalStorageService from "../util/LocalStorageUtil";
import { useEffect, useState } from "react";
import { Table, Divider, Tag, Button, Modal, Input } from 'antd';
import CreateBook from "./CreateBook";
import CreateAuthor from "./CreateAuthor";
import { Delete, GetData } from "../service/HTTPService";

const { confirm } = Modal;
const { Search } = Input;
function CreateUser() {

  const info = LocalStorageService.getToken();

  const [data, setData] = useState([]);
  const [authorData, setAuthorData] = useState({});
  const [createBook, setCreateBook] = useState(false);
  const [searchWord, setSearch] = useState("");

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  function showDeleteConfirm(authorId) {
    confirm({
      title: 'Are you sure you want to delete this author?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        const url = "http://localhost:8080/api/author/delete/" + authorId;
        const response = Delete(url);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  function showAddBook(record) {
    setCreateBook(true);
    setAuthorData(record);
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
      title: 'Books',
      key: 'books',
      dataIndex: 'books',
      render: books => (
        <span>
          {books.map(book => {
            let color = 'geekblue';
            return (
              <li>
                <Tag color={color} key={book}>
                  {book.name.toUpperCase()}
                </Tag>
              </li>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={() => showAddBook(record)} >
            Add Book
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => showDeleteConfirm(record.id)} danger>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const getAuthors = () => {
    const url = "http://localhost:8080/api/author/authors";
    const error = "HATA";
    GetData(url)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }
  
  useEffect(() => {
    getAuthors()
  }, [])

  return (
    <div >
      <br /><br /><br /><br />
      
      {
        createBook ? <CreateBook props={authorData}></CreateBook> : <></>
      }
      <Search
        onChange={onSearch}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="middle"
        style={{ "width": "600px", "margin": "auto", "zIndex": -5, "marginLeft": "40.5em" }}
      />

      <br /><br />
      <CreateAuthor></CreateAuthor>
      <br /><br />
      <Table columns={columns} dataSource={data.filter(author => author.name.toLowerCase().includes(searchWord))} />
    </div>
  );
}

export default CreateUser;



/*
const expandedRowRender = () => {
 const columns = [
          { title: 'Book Id', dataIndex: 'id', key: 'id' },
          { title: 'Book Name', dataIndex: 'name', key: 'name' },
          { title: 'Publish Date', dataIndex: 'date', key: 'date' },
          { title: 'Publisher', dataIndex: 'publisher', key: 'publisher' },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a>Delete</a>
              </span>
            ),
          },
        ];}


*/