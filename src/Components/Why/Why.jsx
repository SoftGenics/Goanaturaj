import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import oil from "../Assets/images/oil.jpg";

import whyimg1 from "../Assets/images/whyimg1.png";
import whyimg2 from "../Assets/images/whyimg2.png";
import whyimg3 from "../Assets/images/whyimg3.png";
import whyimg4 from "../Assets/images/whyimg4.png";
import whyimg5 from "../Assets/images/whyimg5.png";
import whyimg6 from "../Assets/images/whyimg6.png";
import "./Why.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Why = () => {
  AOS.init();
  return (
    <Container fluid className="why">
      <Row>
        <Col
          lg={6}
          style={{ padding: "0" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image src={oil} fluid />
        </Col>
        <Col lg={6}>
          <h2
            className="text-center mt-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Why Goa natural?
          </h2>
          <Row>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg1}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">Only the best</p>
              <p className="mt-2 desc">
                {" "}
                Selected ingredients, unrefined, chemical-free hygenic processes
                to provide genuine products
              </p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg2}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">Reviving Traditions</p>
              <p className="mt-2 desc">
                {" "}
                Use of techniques like Cold Press, Stone Grinder, Mortar Pestle,
                Sun Drying, etc. to promote local craft.
              </p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg3}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">Higher Nutrition</p>
              <p className="mt-2 desc">
                {" "}
                Natural, Whole & Unrefined food retain more nutrients than
                conventionally produced food.
              </p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg4}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">Residue-Free</p>
              <p className="mt-2 desc">
                All by-products after processing are used as livestock feed,
                thus leaving zero leftovers.
              </p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg5}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">Sustainability</p>
              <p className="mt-2 desc">
                {" "}
                Supports natural, organic agricultural practices that serve and
                protect Mother Nature.
              </p>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={whyimg6}
                alt="only best"
                className="features-grid-card-img"
              />
              <p className="head">And only the Best</p>
              <p className="mt-2 desc">
                {" "}
                Our endeavor is to create not just the best products but the
                best lifestyle.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // <div className="why-container">
    //   <div className="img-container">
    //     <img src={oil} alt="olive oil"></img>
    //   </div>
    //   <div className="features-container">
    //     <h1>Why Goa naturals</h1>
    //     <div className="features-grid">
    //       <div className="grid-col">
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg1}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">Only the best</p>
    //           <p className="features-grid-card-description">
    //             Selected ingredients, unrefined, chemical-free hygenic processes
    //             to provide genuine products
    //           </p>
    //         </div>
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg2}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">Reviving Traditions</p>
    //           <p className="features-grid-card-description">
    //             Use of techniques like Cold Press, Stone Grinder, Mortar Pestle,
    //             Sun Drying, etc. to promote local craft.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid-col">
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg3}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">Higher Nutrition</p>
    //           <p className="features-grid-card-description">
    //             Natural, Whole & Unrefined food retain more nutrients than
    //             conventionally produced food.
    //           </p>
    //         </div>
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg4}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">Residue-Free</p>
    //           <p className="features-grid-card-description">
    //             All by-products after processing are used as livestock feed,
    //             thus leaving zero leftovers.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid-col">
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg5}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">Sustainability</p>
    //           <p className="features-grid-card-description">
    //             Supports natural, organic agricultural practices that serve and
    //             protect Mother Nature.
    //           </p>
    //         </div>
    //         <div className="features-grid-card">
    //           <img
    //             src={whyimg6}
    //             alt="only best"
    //             className="features-grid-card-img"
    //           ></img>
    //           <p className="features-grid-card-title">And only the Best</p>
    //           <p className="features-grid-card-description">
    //             Our endeavor is to create not just the best products but the
    //             best lifestyle.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Why;
