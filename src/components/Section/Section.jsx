import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
export default function Section({ data,type,title }) {
    const [isCarousal, setIsCarousal] = useState(false)
    const handleCollaps = () => {
        setIsCarousal(!isCarousal)
    }
    return <div className={styles.sectionOuter}>
        <div className={styles.section_heading}>
            <h3 className={styles.section_name}>{title}</h3>
            <h4 className={styles.toggletxt} onClick={handleCollaps}>{!isCarousal ? "Collapse" : "Show All"}</h4>
        </div>
        <div>
            {data.length === 0 ? <div className={styles.circularProgress}><CircularProgress /></div> : (
                <div className={styles.cards}>
                    {isCarousal ? (<>
                    C
                    </>) : (<div  className={styles.cardGroup}>
                        {data.map((item)=><Card key={item.id} data={item} type={type}/>
                        )
                    }
                    </div>)}
                </div>
            )}
        </div>
    </div>
}