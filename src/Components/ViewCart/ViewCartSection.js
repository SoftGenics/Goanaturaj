import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../utils/Store";
// import { FaWindowClose } from "react-icons/fa";

import "./ViewCart.css";
const ViewCartSection = () => {
  const { state, dispatch } = useContext(Store);

  let navigate = useNavigate();

  console.log("cart data", state);
  let totalPrice = state?.cart?.cartItems?.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  let vatAmount = parseFloat((totalPrice * 0.14).toFixed(2));

  const onRemove = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const onMinus = (product) => {
    const quantity = product.quantity - 1;

    if (quantity < 1) {
      window.alert("quantity should not be less than 1");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  const onAdd = (product) => {
    const quantity = parseInt(product.quantity) + 1;

    if (product.stock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  const onQuantityChange = async ({ product, quantity }) => {
    if (parseInt(product.stock) < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    if (quantity < 1) {
      window.alert("quantity should not be less than 1");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  //promo code
  const [promoValid, setpromoValid] = useState([]);
  const [promomsg, setpromsg] = useState([]);
  const [promo, setpromo] = useState("");
  const [promoAmount, setpromoAmount] = useState(0);
  const ApplyPromo = () => {
    if (promo === "goa") {
      setpromsg("Coupon apllied");
      setpromoValid("text-success");
      setpromoAmount(100);
    } else {
      setpromsg("invalide promo");
      setpromoValid("text-danger");
      setpromoAmount(0);
    }
  };

  const ProceedToShippingPage = () => {
    if (state?.cart?.cartItems?.length !== 0) {
      dispatch({
        type: "SAVE_TOTAL_AMOUNT_WITH_COUPON_CODE",
        payload: {
          promoCode: promo,
          promoAmount,
          vatAmount,
          totalPrice,
        },
      });
      navigate("/CheckOut", { replace: true });
    } else {
      toast("Cart is empty", {
        icon: "🛒",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        duration: 2000,
      });
    }
  };
  return (
    <Container fluid style={{ marginTop: "6rem" }}>
      <Toaster />
      <section className="h-100 sec">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black text-center">
                  Shopping Cart
                </h3>
              </div>
              {state?.cart?.cartItems?.length === 0 && (
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex empty-cart align-items-center">
                      <p class="lead fw-normal mb-2 ">Cart is empty</p>
                    </div>
                  </div>
                </div>
              )}

              {state?.cart?.cartItems?.map((item, index) => {
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`https://golden.softgenics.in/uploads/${item.image}`}
                            className="img-fluid rounded-3"
                            alt={item.image}
                          />
                        </div>

                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">{item.p_name}</p>
                          <p>
                            <span class="text-muted">Weight: </span>
                            {item.waight}{" "}
                            {/* <span class="text-muted">Category: </span>
                          {item.category} */}
                          </p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            class="btn btn-link px-2"
                            onClick={() => onMinus(item)}
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id={`quantity ${index}`}
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => {
                              onQuantityChange({
                                product: item,
                                quantity: e.target.value,
                              });
                            }}
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button
                            class="btn btn-link px-2"
                            onClick={() => onAdd(item)}
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">₹{item.price * item.quantity}</h5>
                        </div>
                        <div
                          class="col-md-1 col-lg-1 col-xl-1 text-end"
                          onClick={() => onRemove(item)}
                        >
                          <p class="text-danger">
                            <i class="fas fa-trash fa-lg"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div class="col-md-8">
                <div class="card mb-4 px-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 nt-2">Summary</h5>
                  </div>
                  <div className="card-body ">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>₹{totalPrice}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                        Vat(0.14%)
                        <span>{vatAmount}</span>
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
                            {totalPrice + vatAmount - promoAmount}
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="row py-3 ">
                      <div class="col-sm-9">
                        <input
                          type="text"
                          id="form1"
                          className="form-control form-control-lg"
                          value={promo}
                          onChange={(e) => setpromo(e.target.value)}
                        />
                        <label className="form-label mt-3" htmlFor="form1">
                          <span>
                            Discound code{" "}
                            <span className={promoValid}>{promomsg}</span>
                          </span>
                        </label>
                      </div>
                      <div className="col-sm-3">
                        <button
                          type="button"
                          class="btn btn-outline-success btn-lg"
                          onClick={ApplyPromo}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-success btn-block btn-lg mb-5"
                    onClick={ProceedToShippingPage}
                    style={{ width: "100%" }}
                  >
                    Proceed to Add Shipping Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ViewCartSection;
