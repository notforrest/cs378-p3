import React, { useState } from "react";
import "./MenuItem.css";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({
    title,
    desc,
    img,
    price,
    subtotal,
    setSubtotal,
    count,
    setCount,
}) => {
    return (
        <div class="menuItem row">
            <img src={img} class="col-5" alt={title} />
            <div class="menuText col">
                <div class="fs-5 fw-bold">{title}</div>
                <div class="fs-6 fw-lighter">{desc}</div>
                <div class="priceCounter">
                    <div>{`$${price}`}</div>
                    <div class="counter">
                        <button
                            class="btn"
                            onClick={() => {
                                if (count > 0) {
                                    setCount(count - 1);
                                    setSubtotal(
                                        Number((subtotal - price).toFixed(2))
                                    );
                                }
                            }}
                        >
                            -
                        </button>
                        <div class="number">{count}</div>
                        <button
                            class="btn"
                            onClick={() => {
                                setCount(count + 1);
                                setSubtotal(
                                    Number((subtotal + price).toFixed(2))
                                );
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
