import { useSelector } from "react-redux";

import CartItem from "../Features/Cart/CartItem";
import CartSummary from "../Features/Cart/CartSummary";
import Header from "../Components/Header/Header";
import CartHeader from "../Features/Cart/CartHeader";
import EmptyCart from "../Features/Cart/EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <Header />
      <div className="mt-5 space-y-5 p-3">
        <CartHeader />
        {!cart.length ? (
          <p className="text-sm font-semibold">Your cart is empty ):</p>
        ) : (
          <div className="mt-2 grid grid-cols-[1fr_15rem] items-start justify-between gap-5">
            <div>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
              <EmptyCart />
            </div>
            <CartSummary totalPrice={900} numItems={cart.length} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
