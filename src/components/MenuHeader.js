import React from "react";
import "./MenuHeader.css";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuHeader = () => {
    return (
        <div class="d-flex flex-column justify-content-center">
            <img src="images/Cafe Logo.png" class="img-fluid" alt="Cafe Logo" />
            <div class="descText">
                <h2>Everything you could ever want on campus</h2>
                <h3>#1 Chinese-Inspired Cafe</h3>
            </div>
        </div>
    );
};

export default MenuHeader;
