import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
export default function Search({placeH,}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    return <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} placeholder={placeH}/>
            <button type="submit" className={styles.searchBtn}>
                <SearchIcon/>
            </button>
        </form>
    </>
}