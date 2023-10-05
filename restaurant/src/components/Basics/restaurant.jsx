import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";
import { useState } from "react";

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const uniqueList = [
        ...new Set(Menu.map((curElem) => curElem.category)),
        "All",
    ];
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu); // Reset menuData to the original Menu array
            return;
        }
        const updatedList = Menu.filter((curElem) => curElem.category === category);
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
