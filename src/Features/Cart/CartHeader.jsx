import Heading from "../../Components/Heading";

function CartHeader() {
  return (
    <div className="flex justify-start gap-2">
      <Heading type="h1" className="text-2xl font-bold capitalize">
        Shopping Cart
      </Heading>{" "}
      <img src="/cart.png" alt="cart" className="h-10 w-10 items-center" />
    </div>
  );
}

export default CartHeader;
