import React from "react";
import styles from "./Button.module.css";
export default function Button({ children, btnType }) {
    if (btnType==="sqr") {
        return <button className={styles.sqr} type="button">{children}</button>
    }
    if(btnType==="costom"){    return <button className={styles.costom} type="button">{children}</button>
}if(btnType==="submit"){    return <button className={styles.submit} type="button">{children}</button>
}
if(btnType==="feedBack"){    return <button className={styles.feedbackButton} type="button">{children}</button>
}
    return <button className={styles.feedbackButton} type="button">{children}</button>
}
export const btnTypes=Object.freeze({
    feedBack:"feedBack",
    sqr:"sqr",
    costom:"costom",
    submit:"submit"
})