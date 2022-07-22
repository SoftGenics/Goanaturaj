import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const CoconutSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="Product mb-5">
      <span>
        <Link to="/">Home</Link> » ColdPressed Coconut Oil
      </span>
      <br></br>
      <span
        style={{ fontSize: "0.95rem", textTransform: "none" }}
        className="text-muted mt-5"
      >
        Showing all 2 resuls
      </span>
      <Row className="mt-5">
        <Col lg={3} sm={6} className="Product-col">
          <Card as={Link} to="/ViewProduct">
            <Card.Img src="/item-pics/100ml-coconut-front.jpg" />

            <Card.Body>
              <div className="d-flex justify-content-center mb-3">
                <BsStarFill color="#00d084" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarHalf color="#00d084" className="ms-2" />
                <BsStar color="#00d084" className="ms-2" />
              </div>
              <Card.Title>
                Coconut Oil<br></br>100ml{" "}
              </Card.Title>
              <Card.Text>₹ 62.00 - ₹ 75.00 </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="Product-col">
          <Card as={Link} to="/ViewProduct">
            <Card.Img src="/item-pics/500ml-coconut-front.jpg" />

            <Card.Body>
              <div className="d-flex justify-content-center mb-3">
                <BsStarFill color="#00d084" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
              </div>
              <Card.Title>
                {" "}
                Coconut Oil<br></br>500 ml{" "}
              </Card.Title>
              <Card.Text>₹ 259.00 - ₹ 300.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CoconutSection;
