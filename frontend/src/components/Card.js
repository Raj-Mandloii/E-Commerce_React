import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const Card = ({ items }) => {
  let location = useLocation();
  return (
    <section class="container mx-auto row">
      {items.map((item) => {
        return (
          <section class="col-sm-12 col-md-6 col-lg-3 border">
            <Link
              to={`${
                location.pathname == "/"
                  ? "/product/:id"
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}
              className="product-card position-relative"
            >
              {/* <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src={wish} alt="wishlist" />
                </button>
              </div> */}
              <div className="product-image card-img-top">
                <img
                  src={item.thumbnail}
                  className="img-fluid rounded"
                  alt="product image"
                />
                <img
                  src={item.image}
                  className="img-fluid"
                  alt="product image"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item.brand}</h6>
                <h5 className="product-title">{item.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="overflow-y-hidden card-body">{item.description}</p>
                <p className="price card-footer border-0 bg-transparent">Rs. {item.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button>
                </div>
              </div>
            </Link>
          </section>
        );
      })}
    </section>
  );
};

export default Card;
