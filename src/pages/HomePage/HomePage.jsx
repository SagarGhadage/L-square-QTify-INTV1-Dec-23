import React from "react";
import styles from "./HomePage.module.css"
import Navbar from "../../components/Navbar/Navbar";
import HeroSession from "../../components/HeroSession/HeroSession";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
export default function HomePage(){
    const{ data}=useOutletContext();
    const {topAlbum,newAlbum,songs}=data;
    return (
        <>
        {/* <Navbar searchData={[]} /> */}
        <HeroSession/>
        <div className={styles.section_wrapper}>
            <Section title={"Top Album"} data={topAlbum} type={"album"} />
            <Section title={"New Album"} data={newAlbum} type={"album"}/>
            {/* <Section title={"Songs"} data={songs} type={"songs"}/> */}
        </div>
        </>
    )
}