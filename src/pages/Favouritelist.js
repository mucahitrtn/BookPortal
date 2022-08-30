import LocalStorageService from "../util/LocalStorageUtil";
import { Layout, List } from "antd";
import { useEffect, useState } from "react";
import ListBooks from "../components/List/ListBooks";
import { GetData } from "../service/HTTPService";
const { Header, Content, Footer } = Layout;


function Favouritelist() {
  const token = LocalStorageService.getToken();
  const [data, setData] = useState([]);
  const error = "HATA";

  const getFavouriteList = () => {
    const url = "http://localhost:8080/api/favouritelist/" + token.id;
    GetData(url) 
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    getFavouriteList()
  }, [])

  return (
    <div>

      <div className="container" style={{ "margin-top": "100px" }}>
        <ListBooks data={data} isBooks={false} isReadListParam={false}></ListBooks>
      </div>
    </div>
  );
}

export default Favouritelist;