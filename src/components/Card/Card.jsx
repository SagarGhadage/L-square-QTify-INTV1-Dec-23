import React from "react";
import styles from "./Card.module.css"
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
export default function Card({ data, type }) {
    const createCard = (type) => {
        switch (type) {
            case "album": {
                const { title, image, songs,follows,slug } = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                        <div className={styles.cardContainer} >
                            <div className={styles.card}>
                                <img src={image} alt={title} />
                                <div className={styles.banner}>
                                    <Chip label={`${follows} Follows`} size="small" className={styles.chips} />
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p>{title}</p>
                            </div>
                        </div>
                        </Link>
                    </Tooltip>)
            }
            case "song": {
                const { title, image, likes } = data;
                return (<div className={styles.cardContainer} >
                    <div className={styles.card}>
                        <img src={image} alt={title} />
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p className={styles.likes}>{likes} {type}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <p>{title}</p>
                    </div>
                </div>)
            }
            default: {
                return <></>
            }
        }
    }
    return createCard(type);

}