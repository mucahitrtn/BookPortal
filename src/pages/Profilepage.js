import LocalStorageService from "../util/LocalStorageUtil";
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Menu, Avatar } from 'antd';
import React, { useState, useEffect } from 'react';

function Profilepage() {
    const info = LocalStorageService.getToken();
    const [data, setData] = useState([]);
    const error = "HATA";

    useEffect(() => {
        const url = "http://localhost:8080/api/user/getUser/" + info.id;
        if (info.token !== null) {
            fetch(url, {
                method: 'get',
                headers: { "Authorization": `Bearer ${info.token}` }
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result);
                        console.log(result);
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }
        else {
            console.log(error);
        }
    }, []);

    const style = {
        height: "45em",
    }

    const items = [
        
        {
            label: 'Edit Profile',
            key: 'edit'
        },
        {
            label: 'Activity',
            key: 'activity'
        },
        {
            label: 'Lists',
            key: 'lists'
        }
    ]

    return (
        <>
            <div className="container" style={{ "margin-top": "100px" }}>
                <Divider orientation="left">
                    <Avatar
                        size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                        }}
                        icon={<UserOutlined />}
                    /><h5>{data.name}</h5>
                </Divider>

            </div>
            <div style={{width: "30em", marginLeft: "150px", borderRadius: "2px"}}>
                <Menu mode="horizontal" style={{ borderRadius: "25px" , backgroundColor: "#e3e3e3", color: "#212121"}} items={items} />
            </div>
            <br/><br/><br/><br/><br/><br/>
        </>
    );
}

export default Profilepage;