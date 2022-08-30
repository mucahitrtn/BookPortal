import { BookOutlined, HeartOutlined, DeleteOutlined,ExclamationCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Avatar, Card, Modal } from 'antd';
import LocalStorageService from "../../util/LocalStorageUtil";
import axios from 'axios';
import React, { useState } from 'react';
import { Delete } from '../../service/HTTPService';
const { Meta } = Card;
const { confirm } = Modal;

function ListBookCard({ name, authorName, bookId, img, isBooks, isReadListParam }) {

  const info = LocalStorageService.getToken();
  const favListUrl = "http://localhost:8080/api/favouritelist/";
  const readListUrl = "http://localhost:8080/api/readlist/";


  const likeHandler = (isReadList) => {
    let url;
    let listname;
    if (isReadList) {
      url = readListUrl + info.id + "/" + bookId;
      listname = "Read List";
    }
    else {
      url = favListUrl + info.id + "/" + bookId;
      listname = "Favourite List";
    }

    confirm({
      title: 'Do you Want to Add to '+listname+'?',
      icon: <ExclamationCircleOutlined />,
  
      onOk() {
        const options = {
          method: 'POST',
          headers: { "Authorization": `Bearer ${info.token}` },
          url,
        };
        const response = axios(options);
      },
  
      onCancel() {
        console.log('Cancel');
      },
    });

  };

  const deleteHandler = () => {
    let url;
    if (isReadListParam) {
      url = readListUrl + info.id + "/" + bookId;
    }
    else {
      url = favListUrl + info.id + "/" + bookId;
    }
    
    confirm({
      title: 'Do you Want to Delete This Book?',
      icon: <WarningOutlined />,
  
      onOk() {
        const response = Delete(url);
      },
  
      onCancel() {
        console.log('Cancel');
      },
    });
  };


  return (
    <div style={{marginTop: "8px"}}>
      <br/><br/>
      <Card
        bordered={true}
        style={{
          borderRadius: "25px",
          overflow: "hidden",
          borderStyle: "solid",
          borderColor: "#98a09e",
          backgroundColor: "#f0f2f5",
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={img !== null ? img : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
            width="300" height="250"
          />
        }
        actions={

          isBooks ?
            [
              <HeartOutlined key="ellipsis" onClick={() => likeHandler(false)} theme="filled" />,
              <BookOutlined onClick={() => likeHandler(true)} />
            ]
            :
            [<DeleteOutlined onClick={deleteHandler} theme="filled" />]

        }
      >
        <Meta
          style={{ backgroundColor: "#f0f2f5", color: '#08c'}}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={name}
          description={authorName}
        />
      </Card>
      <br/>
    </div>
  )
}

export default ListBookCard;