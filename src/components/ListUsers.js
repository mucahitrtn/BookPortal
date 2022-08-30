
import LocalStorageService from "../util/LocalStorageUtil";
import { useEffect, useState } from "react";
import { Table, Divider, Tag, Input, Button, Modal } from 'antd';
import axios from 'axios';
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import { AddRole, Delete, GetData } from "../service/HTTPService";
const { confirm } = Modal;
const { Search } = Input;

function ListUsers() {
  const info = LocalStorageService.getToken();
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [searchWord, setSearch] = useState("");
  
  const error = "HATA";

  const onSearch = (event) => {
          setSearch(event.target.value);
  };

  function showDeleteConfirm(userId) {
    confirm({
      title: 'Are you sure you want to delete this user?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {

        const url = "http://localhost:8080/api/user/" + userId;  
        const response = Delete(url);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  function showUpdateConfirm(record) {
    setUpdatedUserData(record);
    setIsUpdate(true);
  }

  function showAddRoleConfirm(userId) {
    confirm({
      title: 'Are you sure you want to update this user as admin?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {

        const url = "http://localhost:8080/api/role/addToUser/" + userId;  
        const response = AddRole(url);

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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Roles',
      key: 'roles',
      dataIndex: 'roles',
      render: roles => (
        <span>
          {roles.map(role => {
            let color = role.name === "ROLE_ADMIN" ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={role}>
                {role.name}
              </Tag>
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
          <Button onClick={() => showUpdateConfirm(record)} >
            Update
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => showDeleteConfirm(record.id)} danger>
            Delete
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => showAddRoleConfirm(record.id)} primary>
            Add Admin Role
          </Button>

        </span>
      ),
    },
  ];

  const getUsers = () => {
    const url = "http://localhost:8080/api/users";
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
    getUsers()
  }, [])
  
  
  
  return (
    <div >
      <br /><br /><br /><br />
      
      {
        isUpdate ? <><UpdateUser props={updatedUserData}></UpdateUser></> : <></>
      }
      <Search
        onChange={onSearch}     
        placeholder="search for user"
        allowClear
        enterButton="Search"
        size="middle"
        style={{ "width": "600px", "margin": "auto", "zIndex": -5, "marginLeft": "40.5em" }}
      />
      <br /><br />
      <CreateUser></CreateUser>
      <br /><br />
      <Table columns={columns} 
             dataSource={data.filter(user => user.name.toLowerCase().includes(searchWord))}
              />

    </div>
  );
}

export default ListUsers;
