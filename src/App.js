import "./App.css";

import React, { useState } from "react";

import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import MenuFooter from "./components/MenuFooter";

import gyoza from "./images/gyoza.png";
import sushi from "./images/sushi.png";
import ramen from "./images/ramen.png";
import matchaCake from "./images/matcha-cake.png";
import mochi from "./images/mochi.png";
import yakitori from "./images/yakitori.png";
import takoyaki from "./images/takoyaki.png";
import sashimi from "./images/sashimi.png";
import okonomiyaki from "./images/okonomiyaki.png";
import katsuCurry from "./images/katsu-curry.png";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
    {
        id: 1,
        title: "Gyoza",
        description: "Japanese dumplings",
        imageName: gyoza,
        price: 5.99,
    },
    {
        id: 2,
        title: "Sushi",
        description: "Japanese rice rolls",
        imageName: sushi,
        price: 6.99,
    },
    {
        id: 3,
        title: "Ramen",
        description: "Japanese noodle soup",
        imageName: ramen,
        price: 7.99,
    },
    {
        id: 4,
        title: "Matcha Cake",
        description: "Japanese green tea cake",
        imageName: matchaCake,
        price: 4.99,
    },
    {
        id: 5,
        title: "Mochi",
        description: "Japanese rice cake",
        imageName: mochi,
        price: 3.99,
    },
    {
        id: 6,
        title: "Yakitori",
        description: "Japanese skewered chicken",
        imageName: yakitori,
        price: 2.99,
    },
    {
        id: 7,
        title: "Takoyaki",
        description: "Japanese octopus balls",
        imageName: takoyaki,
        price: 5.99,
    },
    {
        id: 8,
        title: "Sashimi",
        description: "Japanese raw fish",
        imageName: sashimi,
        price: 8.99,
    },
    {
        id: 9,
        title: "Okonomiyaki",
        description: "Japanese savory pancake",
        imageName: okonomiyaki,
        price: 6.99,
    },
    {
        id: 10,
        title: "Katsu Curry",
        description: "Japanese curry with fried pork",
        imageName: katsuCurry,
        price: 9.99,
    },
];

function App() {
    const [subtotal, setSubtotal] = useState(0);
    const [counts, setCounts] = useState(new Array(menuItems.length).fill(0));

    const handleClearAll = () => {
        setSubtotal(0);
        setCounts(counts.fill(0));
    };

    return (
        <div>
            <link rel="stylesheet" href="https://use.typekit.net/gdy2zfd.css" />
            <MenuHeader />
            <div className="menu">
                {/* Display menu items dynamically here by iterating over the provided menuItems */}
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={item.id}
                        title={item.title}
                        desc={item.description}
                        img={item.imageName}
                        price={item.price}
                        subtotal={subtotal}
                        setSubtotal={setSubtotal}
                        count={counts[index]}
                        setCount={(newCount) => {
                            let newCounts = [...counts];
                            newCounts[index] = newCount;
                            setCounts(newCounts);
                        }}
                    />
                ))}
            </div>
            <div style={{ height: "4em" }} />
            <MenuFooter
                subtotal={subtotal}
                setSubtotal={setSubtotal}
                handleClearAll={handleClearAll}
                menuItems={menuItems}
                counts={counts}
            />
        </div>
    );
}

export default App;
