import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, emptyItem } from "../actions/cartActions";

const Cart = () => {
    const state = useSelector((state) => state);
    const numOfItems = state.numOfItems;
    const dispatch = useDispatch();

    return (
        <div className="cart">
        <h2>Number of items in Cart: {numOfItems}</h2>
        <button
            className="button green"
            onClick={() => {
            dispatch(addItem());
            }}
        >
            Add Item to Cart
        </button>
        <button
            className="button gray"
            disabled={numOfItems > 0 ? false : true}
            onClick={() => {
            dispatch(emptyItem());
            }}
        >
            Empty Cart Items
        </button>
        <button
            className="button red"
            disabled={numOfItems > 0 ? false : true}
            onClick={() => {
            dispatch(deleteItem());
            }}
        >
            Remove Item from Cart
        </button>
        </div>
    );
};

export default Cart;
