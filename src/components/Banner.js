import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="allign-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!</span>
            <h1>
              {" "}
              {`Hi I'm webcoded!`} <span className="wrap"> web developer </span>
            </h1>
            <p> Test Test Test Test Test</p>
            <button onClick={() => console.log("connect")}>
              Let's Connect!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
