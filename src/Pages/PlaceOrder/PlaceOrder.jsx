import "./placeOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Street Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>{" "}
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p>{20}</p>
            </div>{" "}
            <hr />
            <div className="cart-total-details">
              <p>Total</p>

              <b>${getTotalCartAmount() ? getTotalCartAmount() + 20 : 0}</b>
            </div>
          </div>
          <button>Pay Now</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
