import React from "react";
import styles from "./HeroSession.module.css"
import { ReactComponent as HeroImgIcon } from "../../assets/vibrating-headphone 1.svg"
export default function HeroSession() {
    return <div className={styles.heroSession}>
        <div className={styles.hero_inner}>
            <div className={styles.heroTxtGP}>
            <p className={styles.hero_txt1}>
                100 Thousand Songs, ad-free
            </p>
            <p className={styles.hero_txt2}>
                Over thousands podcast episodes
            </p></div>
            <HeroImgIcon className={styles.heroImgIcon}/>
        </div>
    </div>
}