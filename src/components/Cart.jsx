import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, IconButton } from "@mui/material";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  setCartOpen,
} from "./features/cartSlice";
import { Link } from "react-router-dom";

const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (eventId, newQuantity) => {
    dispatch(updateQuantity({ eventId, quantity: newQuantity }));
  };

  const handleRemove = (eventId) => {
    dispatch(removeFromCart(eventId));
  };

  const handleClose = () => {
    dispatch(setCartOpen(false));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <IconButton
        onClick={() => dispatch(setCartOpen(true))}
        sx={{ color: "white", position: "relative" }}
      >
        <CartIcon />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 bg-primaryMain text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "400px" },
            backgroundColor: "#191919",
            color: "white",
          },
          className: "bg-neutral-n900",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-neutral-n700">
            <h2 className="text-2xl font-bold">Cart</h2>
            <button
              onClick={handleClose}
              className="text-neutral-n200 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CartIcon />
                <p className="text-neutral-n400 mt-4 text-lg">
                  Your cart is empty
                </p>
                <p className="text-neutral-n500 mt-2">
                  Add events to your cart to get started
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-neutral-n800 rounded-lg border border-neutral-n700"
                    >
                      <Link
                        to={`/product/${item.id}`}
                        onClick={handleClose}
                        className="flex-shrink-0"
                      >
                        <img
                          src={item.img}
                          alt={item.artistName || item.sportName || item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={handleClose}
                          className="font-semibold text-white hover:text-primaryMain transition-colors mb-1"
                        >
                          {item.artistName || item.sportName || item.name}
                        </Link>
                        <p className="text-sm text-neutral-n300 mb-2">
                          {item.location}
                        </p>
                        <p className="text-sm text-neutral-n300 mb-2">
                          {item.date}
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded border border-neutral-n600 bg-neutral-n700 hover:bg-tint-wt text-white flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="text-white font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded border border-neutral-n600 bg-neutral-n700 hover:bg-tint-wt text-white flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-primaryMain font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-neutral-n400 hover:text-red-400 transition-colors"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M3 6h14M8 6V4a2 2 0 012-2h0a2 2 0 012 2v2m3 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v4M6 11v4"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {items.length > 0 && (
                  <button
                    onClick={handleClearCart}
                    className="mt-4 text-sm text-neutral-n400 hover:text-red-400 transition-colors"
                  >
                    Clear all items
                  </button>
                )}
              </>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-neutral-n700 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primaryMain">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full bg-primaryMain hover:bg-tint-wt text-white font-semibold py-3 rounded-lg transition-colors"
                onClick={() => {
                  alert("complete...");
                }}
              >
                continue
              </button>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
