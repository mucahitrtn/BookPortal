import LocalStorageService from "../util/LocalStorageUtil";
import { useEffect, useState } from "react";
import ListBooks from "../components/List/ListBooks";
import { GetData } from "../service/HTTPService";


function Favouritelist() {
  const token = LocalStorageService.getToken();
  const [data, setData] = useState([]);
  const error = "HATA";

  const getReadList = () => {
    const url = "http://localhost:8080/api/readlist/" + token.id;
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
    getReadList()
  }, [])
  
  return (
    <div>

      <div className="container" style={{ "margin-top": "100px" }}>
        <ListBooks data={data} isBooks={false} isReadListParam={true}></ListBooks>
      </div>
    </div>
  );
}

export default Favouritelist;