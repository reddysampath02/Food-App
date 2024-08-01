import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import { Link } from "react-router-dom";
import CardItems from "./CartItems";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const cartMsg =
    "Your cart is empty You can go to home page to view more restaurants";

  console.log(cartItems);

  const dispatch = useDispatch();

  const handelClearCart = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <div className="text-center w-[50%] ms-[25%]">
      <div className="text-start my-10 flex justify-normal">
        <h1 className="font-bold text-3xl">🛒Cart</h1>
        <button
          className="px-4 border-black border-[1px] rounded-md py-1 my-1 ms-[350px] font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={handelClearCart}
        >
          ClearCart
        </button>
      </div>
      <div>
        <span>
          {cartItems.length === 0 ? (
            <div>
              <div className="font-bold -ms-24 text-red-600">{cartMsg}</div>
              <div className="text-center m-6 -ms-20 font-bold">
                <Link
                  to="/"
                  className="px-4 py-2 border border-orange-600 rounded-lg  bg-orange-600 text-white hover:bg-white hover:text-orange-600"
                >
                  Home
                </Link>
              </div>
            </div>
          ) : (
            <CardItems items={cartItems} />
          )}
        </span>
      </div>
    </div>
  );
};
export default Cart;
