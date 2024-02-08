import React from "react";
import "./MenuItem.css";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, desc, img, price }) => {
    return (
        <div class="menuItem row">
            <img src={`images/${img}`} class="col-5" alt={`${title}`} />
            <div class="menuText col">
                <div class="fs-5 fw-bold">{title}</div>
                <div class="fs-6 fw-lighter">{desc}</div>
                <div class="me-3 d-flex align-items-center justify-content-between">
                    <div>{`$${price}`}</div>
                    <button class="btn">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
