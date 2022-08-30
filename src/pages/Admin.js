import Login from "../components/Login";
import { useEffect, useState } from "react";
import { Menu, Button } from 'antd';
import { Layout, Breadcrumb, Icon } from 'antd';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
import Loginpage from "./Loginpage";
import Readlist from "./Readlist";
import ListAuthors from "../components/ListAuthors";
import ListUsers from "../components/ListUsers";
import ListBooks from "../components/ListBooks";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState("");

  const selectHandler = (event) =>{
    setSelect(event.key);
  }

  const returnComp = () =>{
    switch (select) {
      case "1":
        return <ListUsers/>
      case "2":
        return <ListAuthors/>
      case "3":
        return <ListBooks/>
       
    }
  }

  const toggleCollapsed = () => {
    setCollapsed(true);
  };
  return (

    <div style={{ "margin-top": "100px"}}>

      <Content style={{ padding: '0 50px' }}>

        <Layout style={{ padding: '24px 0', background: '#fff'  }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>

                    User
                  </span>
                }
              >
                <Menu.Item key="1" onClick={selectHandler}>List Users</Menu.Item>
              </SubMenu>
              
              <SubMenu
                key="sub2"
                title={
                  <span>
                    Author
                  </span>
                }
              >
                <Menu.Item key="2" onClick={selectHandler}>List Authors</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    Book
                  </span>
                }
              >
                <Menu.Item key="3" onClick={selectHandler}>List Books</Menu.Item>
              </SubMenu>
              
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

                {
                  returnComp()
                }
          </Content>
        </Layout>
      </Content>
      
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );

}

export default Admin;