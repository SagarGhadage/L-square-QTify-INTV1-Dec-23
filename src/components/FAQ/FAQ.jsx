import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ReactComponent as ExpandMoreIcon } from '../../assets/ExpandIcon.svg';
import styles from "./FAQ.module.css"
export default function FAQ({ faqData }) {
    const [expanded, setExpanded] = React.useState("panel1");
    console.log(faqData)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>FAQ</div><div className={styles.acco}>
                {faqData.map((faq, idx) =>
                    <Accordion className={styles.accordian} expanded={expanded === `panel${idx + 1}`} onChange={handleChange(`panel${idx + 1}`)}>
                        <AccordionSummary className={styles.accordionSummary}sx={{ backgroundColor: "var(--color-black)" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${idx + 1}bh-content`}
                            id={`panel${idx + 1}bh-header`}
                        >
                            <div className={styles.accoSummary}>
                                {faq.question}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:"var(--color-white)"}}><div className={styles.accoDetails}>
                            {faq.answer}
                        </div>
                        </AccordionDetails>
                    </Accordion>)}
            </div>
        </div >
    );
}
