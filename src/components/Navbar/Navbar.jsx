import React from "react";
import styles from "./Navbar.module.css";
import Button from '../Button/Button';
import Search from '../Search/Search';
// import { ReactComponent as HeadPhoneIcon } from "../../assets/Logo.svg";
// import { ReactComponent as QtifyLogo } from "../../assets/Q tify.svg";
import Logo from "../Logo/Logo";
export default function Navbar({ comp }) {
    return <nav className={styles.navbarContainer}>
        <Logo/>
        <Search placeH={"Search a album of your choice"} />
        <Button>Give feedback</Button>
    </nav>
}