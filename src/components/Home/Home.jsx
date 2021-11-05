import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image "
        src="https://www.hso.org/wp-content/uploads/Sale-Website-Banner-1600x600.png"
        alt="home"
      />
      <div className="home__container">
        <Container>
          <div className="home__row ">
            <Row>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="23445930"
                  description="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                  price={98.99}
                  rating={5}
                  img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="49538094"
                  description="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater"
                  price={239.0}
                  rating={4}
                  img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="4903850"
                  description="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={199.99}
                  rating={3}
                  img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
              </Col>

              <Col md={6} xs={12} xl={4}>
                <Product
                  id="3254354345"
                  description="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={598.99}
                  rating={4}
                  img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="3254354800"
                  description="Hamilton Beach Dual Breakfast Sandwich Maker with Timer, Silver"
                  price={40.0}
                  rating={5}
                  img="https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFreTBwb3RFRUwuX0FDX1NMMTUwMF8uanBn.jpg"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="90829332"
                  description="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual "
                  price={1094.98}
                  rating={4}
                  img="https://images.samsung.com/is/image/samsung/p6pim/uk/lc27g73tqsrxxu/gallery/uk-odyssey-g7-c27g75t-lc27g73tqsrxxu-397241946?$624_624_PNG$"
                />
              </Col>

              <Col md={6} xs={12} xl={4}>
                <Product
                  id="64542289"
                  description="Amazon Basics Kids Fleece Tail Blanket - 26'' x 56'', Shark for both genders"
                  price={14.99}
                  rating={4}
                  img="https://m.media-amazon.com/images/I/81OueVbne7L._AC_UL480_FMwebp_QL65_.jpg"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="64563214"
                  description="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 "
                  price={59.99}
                  rating={4}
                  img="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
                />
              </Col>
              <Col md={6} xs={12} xl={4}>
                <Product
                  id="64542293"
                  description="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling"
                  price={78.99}
                  rating={5}
                  img="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL480_QL65_.jpg"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
