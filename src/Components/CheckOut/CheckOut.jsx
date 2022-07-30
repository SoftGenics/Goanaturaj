import React, { useContext } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Footer from "../Footer/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CheckOut.css";
import { Box, MenuItem, TextField } from "@mui/material";
import { Store } from "../../utils/Store";

//table components @mui

const CheckOut = () => {
  const { state, dispatch } = useContext(Store);

  const { promoCode, promoAmount, vatAmount, totalPrice } =
    state?.cart?.cartCheckOutDetails;

  //need to fetch from database
  const shippingFee = 100;

  const States = [
    {
      value: "Bihar",
      label: "Bihar",
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Maharastra",
      label: "Maharastra",
    },
  ];
  const [indstate, setindstate] = React.useState([]);

  const handleChange = (event) => {
    setindstate(event.target.value);
  };
  return (
    <div>
      <NavbarMenu />
      <Container className="checkout">
        <Row>
          <Col md={6}>
            <h2 className="mb-5">Billing Detail</h2>
            <TextField
              id="outlined-textarea"
              label="Full Name"
              placeholder="Enter your full name"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />

            <TextField
              id="outlined-textarea"
              label="Address"
              placeholder="House number and street name"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="City"
              placeholder="Enter your city"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mb: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                color="success"
                select
                label="Select state"
                fullWidth
                value={indstate}
                onChange={handleChange}
                helperText="Please select your State"
              >
                {States.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              id="outlined-textarea"
              label="Postcode / ZIP"
              placeholder="Enter your Pin code"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />
            {/* phone and email field in row col*/}
            {/* start row */}
            <Row>
              <Col md={6}>
                <TextField
                  id="outlined-textarea"
                  label="Phone"
                  placeholder="Enter Phone number"
                  required
                  fullWidth
                  color="success"
                  sx={{ mb: "2rem" }}
                  multiline
                />
              </Col>
              <Col md={6}>
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Enter Email address"
                  required
                  fullWidth
                  color="success"
                  sx={{ mb: "2rem" }}
                  multiline
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2 className="mb-5">Ship to a different address?</h2>
            <TextField
              id="outlined-textarea"
              label="Full Name"
              placeholder="Enter your full name"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />

            <TextField
              id="outlined-textarea"
              label="Address"
              placeholder="House number and street name"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="City"
              placeholder="Enter your city"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mb: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                color="success"
                select
                label="Select state"
                fullWidth
                value={indstate}
                onChange={handleChange}
                helperText="Please select your State"
              >
                {States.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              id="outlined-textarea"
              label="Postcode / ZIP"
              placeholder="Enter your Pin code"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />
          </Col>
        </Row>

        <div class="col-md-8">
          <div class="card mb-4 px-4">
            <div className="card-header py-3">
              <h5 className="mb-0 nt-2">Order Summary</h5>
            </div>
            <div className="card-body ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>₹{totalPrice}</span>
                </li>

                {promoAmount != 0 && (
                  <li class="list-group-item d-flex justify-content-between border-0 align-items-center px-0">
                    Coupon code:{promoCode}
                    <span>{promoAmount}</span>
                  </li>
                )}
                <li class="list-group-item d-flex justify-content-between border-0 align-items-center px-0">
                  Vat(0.14%)
                  <span>{vatAmount}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping fee:
                  <span>{shippingFee}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>

                  <span>
                    <strong>
                      {totalPrice - promoAmount + vatAmount + shippingFee}
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="btn btn-success btn-block btn-lg mb-5"
              //onClick={ProceedToPayment}
              style={{ width: "100%" }}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CheckOut;
