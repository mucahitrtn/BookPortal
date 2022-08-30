import { Layout, Row, Tag, } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
const { Footer } = Layout;

function App() {

  const style = {
    backgroundColor: "#e3e3e3",
    textAlign: "center",
    position: "relative",
    marginBottom: "0"
  }

  return (
    <>
      <Footer style={style} theme="dark" mode="horizontal">
        
          <p style={{textAlign: "center"}}>Book portal ©2022</p>
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
      </Footer></>

  );
}

export default App;



/*
      position : "absolute",
bottom : 0,
height : "60px",
marginBottom: "auto",
width: "100%", */
