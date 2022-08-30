import { Layout, List, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ListBooks from "../components/List/ListBooks";
import { GetBooks } from "../service/HTTPService";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function Books() {
    const [data, setData] = useState([]);
    const error = "HATA";
    const [searchWord, setSearch] = useState("");

    const onSearch = (event) => {
        setSearch(event.target.value);
    };

    const url = "http://localhost:8080/api/book/books/";
    const getBooks = () => {

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
        <>
            <div className="container" style={{ "margin-top": "100px", "zIndex": -5 }}>
                <Search
                    onChange={onSearch}
                    placeholder="Search book by name"
                    allowClear
                    enterButton="Search"
                    bordered
                    size="middle"
                    style={{ "width": "600px", "margin": "auto", "zIndex": -5, "marginLeft": "49em" }}
                />
                <br /><br /><br /><br />
            </div>
            <div className="container">
                <ListBooks data={data.filter(book => book.name.toLowerCase().includes(searchWord))} isBooks={true} isReadListParam={false}></ListBooks>
            </div>
        </>
    );
}

export default Books;
