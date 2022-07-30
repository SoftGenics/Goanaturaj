import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarMenu.css";
// React-bootstrap components
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Col,
  Row,
  Image,
  Card,
} from "react-bootstrap";
import { Store } from "../../utils/Store";

// Logo components
import Logo from "../Assets/images/goalogo.png";

// Modal Left Image
import ModalImage from "../Assets/Goa-natural/Goa-Natural-modal1.png";
import { Link } from "react-router-dom";
// SignIn component
import SignIn from "../SignIn/SignIn";
// Sign UP Components
import SignUp from "../SignUp/SignUp";
const NavbarMenu = () => {
  // close mobile menu Navbar
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // lOGO size changed
  const [size, setsize] = useState(false);
  const changeSize = () => {
    if (window.scrollY >= 90) {
      setsize(true);
    } else {
      setsize(false);
    }
  };
  window.addEventListener("scroll", changeSize);

  // Show drop down on mousehover
  const [showdropdown, setshowdropdown] = useState(false);
  const HandleShowDropDown = ()=> setshowdropdown(!showdropdown)
 

  //Modal state
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  // Toggler switch state
  const [switcher, setswitcher] = useState("active");
  const handleSwitcher = () => setswitcher(!switcher);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  console.log(dispatch);

  // LOGGED IN STATUS CHANGE NAVBAR ITEM FROM LOGIN TO USERNAME
  let loggedIn = true;
  let gettoken=localStorage.getItem('token')
  if(gettoken==null){
    loggedIn=false;
  }
  let navigave = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem("token")
    navigave("/")
    setClick(false)
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={color ? "navbar navbar-bg " : "navbar"}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className={
              size ? "navbar-brand img" : "navbar-brand-changed-size img"
            }
          >
            <img src={Logo} alt="Goa Natural Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} style={{color:"white"}} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Product dropdown start here */}
              <NavDropdown
                title={"Prodcuts"}
                id="collasible-nav-dropdown"
                show={showdropdown}
                onMouseEnter={() => setshowdropdown(true)}
                onMouseLeave={() => setshowdropdown(false)}
                onClick={HandleShowDropDown}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/products"
                  eventKey={1}
                  onClick={closeMobileMenu}
                >
                  All Products
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/safflower"
                  eventKey={1}
                  onClick={closeMobileMenu}
                >
                  Safflower Oil
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/turmeric"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Turmeric Powder
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/groundnut"
                  eventKey={3}
                  onClick={closeMobileMenu}
                >
                  Groundnut Oil
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/coconut"
                  eventKey={4}
                  onClick={closeMobileMenu}
                >
                  Coconut Oil
                </NavDropdown.Item>
              </NavDropdown>
              {/* Product dropdown end */}

              {/* More section Dropdown start */}
              <Nav.Link
                as={Link}
                to="/Contact-Us"
                onClick={closeMobileMenu}
                eventKey={1}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/About-Us"
                onClick={closeMobileMenu}
                eventKey={2}
              >
                About Us
              </Nav.Link>

              {/* Login Link */}
              {loggedIn?
              <NavDropdown                 
              title={"Loggedin-user"}
              id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={closeMobileMenu} eventKey={1}>My Account</NavDropdown.Item>
                <NavDropdown.Item onClick={Logout} eventKey={2}>logout</NavDropdown.Item>
              </NavDropdown>
              :
              <Nav.Link onClick={closeMobileMenu && handleShow}>Login</Nav.Link>
                }
            </Nav>
          </Navbar.Collapse>

          <Link to="/ViewCart">
            <span
              className="fa-stack fa-1x has-badge"
              data-count={cart.cartItems.length}
            >
              <i className="fa fa-shopping-cart ms-3 red-cart"></i>
            </span>
          </Link>
        </Container>
      </Navbar>
      {/* Login signup Modal box */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        className="auth-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={5}>
              <Image src={ModalImage} fluid />
            </Col>
            <Col lg={7}>
              {/* card button for switch SignIn to signup */}
              <div className="d-flex toggler mt-4">
                <Card
                  onClick={handleSwitcher}
                  className={switcher ? "active" : "notactive"}
                >
                  Sign In
                </Card>
                <Card
                  onClick={handleSwitcher}
                  className={switcher ? "notactive" : "active"}
                >
                  sign Up
                </Card>
              </div>
              {switcher ? <SignIn /> : <SignUp />}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarMenu;
