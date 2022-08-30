import Books from "../pages/Books";
import { Carousel, Divider,Card } from "antd";
import MainRecentNews from "../components/MainRecentNews";
const { Meta } = Card;

const Main = () => {
  const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <section>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </section>
      <br/>
      <Divider orientation="left"></Divider>
      <section>
      
        <MainRecentNews></MainRecentNews>
      </section>
    </div>
  )
}

export default Main;