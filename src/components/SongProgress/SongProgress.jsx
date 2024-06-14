import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./SongProgress.module.css"
export default function SongProgress({}){
    return <div className={styles.container}>
        <div className={styles.imageSession}>
            <img src="#" alt={"#"} className={styles.img}/>
            <p className={styles.songName}>Song Name</p>
            <p className={styles.albumName}>Album Name</p>
        </div>
        <div className={styles.songProgress}>

        </div>
    </div>
}