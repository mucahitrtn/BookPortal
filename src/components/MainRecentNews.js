import { Card, List, Divider } from "antd";
import LocalStorageService from "../util/LocalStorageUtil";
const { Meta } = Card;
function MainRecentNews() {

    const data =
        [
            { title: "title 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
            ,
            { title: "title 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
            ,
            { title: "title 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }

        ];


    return (
        <div style={{ margin: "auto", width: "60em" }}>
            <Divider orientation="left">Recent news</Divider>
            <List
                style={{ height: "80%" }}
                grid={{
                    gutter: 12,
                    column: 3,
                }}

                dataSource={data}
                renderItem={(item) => (
                    <List.Item style={{ margin: "auto", width: "20em" }}>
                        {
                            <Card title={item.title} bordered={false}>
                                {item.description}
                            </Card>
                        }
                        <br /><br />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default MainRecentNews;


