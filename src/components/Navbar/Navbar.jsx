import React from "react";
import styles from "./Navbar.module.css";
import Button from '../Button/Button';
import Search from '../Search/Search';
import { ReactComponent as HeadPhoneIcon } from "../../assets/Logo.svg";
import { ReactComponent as QtifyLogo } from "../../assets/Q tify.svg";
export default function Navbar({ comp }) {
    return <div className={styles.navbar}>
        <div className={styles.logo}>
            <HeadPhoneIcon className={styles.headPhoneIcon} /><QtifyLogo className={styles.qtifyLogo}/>
            {/* <p className={styles.logoText}>Q </p><p className={styles.logoText}> tify</p> */}
        </div>
        <Search placeH={"Search a album of your choice"} />
        <Button>Give feedback</Button>
    </div>
}