import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum quibusdam dicta consequatur id, sequi molestiae sint
                  minima placeat, voluptatem labore velit repellat quod beatae
                  commodi. Iusto, animi. Mollitia, earum possimus?
                </p>
                <button className="buy__btn">SHOP NOW</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
