import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import LocalStorageService from "../util/LocalStorageUtil";
import { QqOutlined } from '@ant-design/icons';

const { Header } = Layout;

function Navbar() {

    const info = LocalStorageService.getToken()
    const username = info.username;
    const profilePath = "/profile/" + username;
    const navigate = useNavigate();
    const menuItem = {
        color: "#2b6777",
    }

    const menuItemLogin = {
        color: "#2b6777",
        marginLeft: 'auto',

    }

    const logOut = async () => {
        LocalStorageService.clearToken();
        navigate("/");
    };



    console.log(info.role_admin);

    return (
        <>
            <div style={{ "display": "block" }}>

                <Header style={{ position: "fixed", zIndex: 10, width: "100%", background: "#212121", top: 0 }}>
                    <div className="logo" />
                    <Menu style={{ background: "#212121", zIndex: 10 }} theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>

                        <Menu.Item key="1" style={menuItem}>
                            <Link to="/">
                                <QqOutlined />
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="2" style={menuItem}>

                            <Link to="/books">
                                <div className="text">
                                    Books
                                </div>
                            </Link>
                        </Menu.Item>

                        {
                            info.token !== null ?
                                <>
                                    <Menu.Item key="3" style={menuItem}>
                                        <Link to="/favouritelist">
                                            <div className="text" >
                                                Favourite List
                                            </div>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" style={menuItem}>
                                        <Link to="/readlist">
                                            <div className="text" >
                                                Read List
                                            </div>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="5" style={menuItem}>
                                        <Link to="/profile">
                                            <div className="text">
                                                Profile
                                            </div>
                                        </Link>
                                    </Menu.Item>
                                </>
                                :
                                <></>
                        }
                        {

                            info.role_admin === "true" ?
                                <Menu.Item key="6" style={menuItem}>
                                    <Link to="/admin">
                                        <div className="text" >
                                            Admin
                                        </div>
                                    </Link>
                                </Menu.Item>
                                :
                                (
                                    <></>
                                )

                        }

                        <Menu.Item key="7" style={menuItemLogin}>
                            {
                                info.token == null ?
                                    <Menu.Item key="8" style={menuItem}>
                                        <Link to="/login" >
                                            Login
                                        </Link>
                                    </Menu.Item>
                                    :
                                    (

                                        <Menu.Item key="9" onClick={logOut} style={menuItem}>
                                            <Link to={profilePath}>
                                                Logout
                                            </Link>
                                        </Menu.Item>)
                            }
                        </Menu.Item>

                    </Menu>
                </Header>


            </div>
        </>
    );
}

export default Navbar;
