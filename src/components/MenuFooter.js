import React, { useState } from "react";
import "./MenuFooter.css";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuFooter = ({
    subtotal,
    setSubtotal,
    handleClearAll,
    menuItems,
    counts,
}) => {
    const [isOrderPopupVisible, toggleOrderPopup] = useState(false);

    return (
        <div class="menuFooter">
            <div>{`Subtotal: $${Number(subtotal).toFixed(2)}`}</div>
            <div class="buttonDiv">
                <button onClick={() => toggleOrderPopup(!isOrderPopupVisible)}>
                    Order
                </button>

                {isOrderPopupVisible &&
                    (counts.some((num) => num !== 0) ? (
                        <div class="orderPopup">
                            <span class="orderTitleText">Order placed!</span>
                            <div>
                                {menuItems.map((item, index) => {
                                    if (counts[index] > 0) {
                                        return (
                                            <div>
                                                {`${item.title} x${counts[index]}`}
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            <button onClick={() => toggleOrderPopup()}>
                                Ok
                            </button>
                        </div>
                    ) : (
                        <div class="orderPopup">
                            <div>No items in order</div>
                            <button onClick={() => toggleOrderPopup()}>
                                Ok
                            </button>
                        </div>
                    ))}

                <button onClick={() => handleClearAll()}>Clear All</button>
            </div>
        </div>
    );
};

export default MenuFooter;
