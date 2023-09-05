//@ts-check
import React from "react";
import IconFacebook from "../assets/icons/FacebookIcon";
import IconInstagram from "../assets/icons/InstagramIcon";
import IconHyegine from "../assets/icons/HyegineIcon";
import IconHearth from "../assets/icons/LoveIcon";
import IconCurrency from "../assets/icons/CurrencyIcon";
//Images
import MenuKavarma from "../assets/images/kavarma.jpg";
import MenuBanitsa from "../assets/images/banitsa.jpg";
import MenuBurger from "../assets/images/aside-three.jpg";
import MenuHotdog from "../assets/images/hotdog.jpg";
import MenuChickenWrap from "../assets/images/chicken-wrap.jpg";
import MenuHalloumiWrap from "../assets/images/halloumi-wrap.jpg";


const data = {
    headerLinks: [
        {
            id: 1,
            title: "Home",
            href: "#home-section",
        },
        {
            id: 2,
            title: "About",
            href: "#about-section",
        },
        {
            id: 3,
            title: "Menu",
            href: "#menu-section",
        },
        {
            id: 4,
            title: "Gallery",
            href: "#gallery-section",
        },
        {
            id: 5,
            title: "Location",
            href: "#location-section",
        },
        {
            id: 6,
            title: "Contact",
            href: "#contact-section",
        }
    ],
    serviceContainer: [
        { icon: <IconHyegine />, title: "Hyegine 100%", text: "We guarantee that all of the products are fresh." },
        { icon: <IconHearth />, title: "Enjoy the taste", text: "You will 100% experience mouth-watering taste." },
        { icon: <IconCurrency />, title: "Secure Payment", text: "Experiance worry-fee transactions with our secure payment options in place." }
    ],
    menuItems: [
        {
            title: "Kavarma",
            alt: "menu-item",
            img: MenuKavarma,
            text: "This is a hearty meat with vegetable stew that is cooked slowly to create a rich and flavorful dish. We only fresh ingredients to ensure that our Kavarma is as authentic, delicious as possible.",
        },
        {
            title: "Banitsa",
            alt: "menu-item",
            img: MenuBanitsa,
            text: " This is a savory pastry that is made with layers of filo pastry and a filling of cheese and spinach. It is a popular breakfast food in Bulgaria, but we think it's perfect for any time of day.",
        },
        {
            title: "Gourmet Burgers",
            alt: "menu-item",
            img: MenuBurger,
            text: "Burgers that are made with high-quality beef: 6oz 100% Beef Smoked cheese, bacon, tomato, crispy onions, mix leaf salad, sauce of your choice.",
        },
        {
            title: "Halloumi & Falafel Wrap",
            alt: "menu-item",
            img: MenuHalloumiWrap,
            text: "Falafel, halloumi cheese, Yogurt cucumber dip, tomato, onion, pita bread.",
        },
        {
            title: "Chicken Wrap",
            alt: "menu-item",
            img: MenuChickenWrap,
            text: "Chicken gyros, fries, Yogurt cucumber dip, tomato, onion, pita bread.",
        },
        {
            title: "Fully loaded hotdog",
            alt: "menu-item",
            img: MenuHotdog,
            text: "100% Pork farm sausage, crispy onions, bacon crumbs, gherkins, sauce of your choice.",
        }
    ],
    footerLinks: [
        {
            id: 1,
            title: "Home",
            href: "#home-section",
        },
        {
            id: 2,
            title: "About",
            href: "#about-section",
        },
        {
            id: 3,
            title: "Menu",
            href: "#menu-section",
        },
        {
            id: 4,
            title: "Gallery",
            href: "#gallery-section",
        },
        {
            id: 5,
            title: "Location",
            href: "#location-section",
        },
        {
            title: "Contact",
            href: "#contact-section",
        }
    ],
    websiteLinks: [
        { id: 1, title: "Mishmash@yahoo.com", link: "mailto:Mishmash.catering@yahoo.com" },
        { id: 2, title: "+447 549 464 341", link: "tel:+447549464341" }
    ],
    socialMedia: [
        { id: 1, icon: <IconFacebook />, link: "https://www.facebook.com/profile.php?id=100089182007933" },
        { id: 2, icon: <IconInstagram />, link: "https://www.instagram.com/MISHMASH_GRILL_AND_MEAL/" },
    ],
}

export default data;