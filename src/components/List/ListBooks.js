import ListBookCard from "./ListBookCard";
import { Layout, List, Input } from "antd";

function ListBooks({ data, isBooks, isReadListParam }) {

    return (
        <div className="container">
            <List
                style={{ height: "100%" }}
                grid={{
                    gutter: 24,
                    column: 4,
                }}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 12,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item style={{ margin: "auto", width: "30em" }}>
                        {
                            isBooks ?
                                <ListBookCard name={item.name} authorName={item.authorName} bookId={item.id} img={item.imgLink} isBooks={true} isReadListParam={isReadListParam} >Card content</ListBookCard>
                                :
                                <ListBookCard name={item.name} authorName={item.authorName} bookId={item.id} img={item.imgLink} isBooks={false} isReadListParam={isReadListParam} >Card content</ListBookCard>
                            }
                        <br /><br />
                    </List.Item>
                )}
            />
             <br/><br/><br/>
        </div>
    );
}

export default ListBooks;
