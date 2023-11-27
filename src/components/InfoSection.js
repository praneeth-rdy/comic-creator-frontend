// Installed Libraries
import React from 'react';
import html2canvas from 'html2canvas';
import { FaArrowLeft, FaDownload, FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/components/InfoSection.module.css';

function InfoSection() {
    const navigate = useNavigate();

    const exportSnap = () => {
        html2canvas(document.getElementById("comic-wrapper")).then((canvas) => {
            // Convert the canvas content to a data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = 'comic_strip.png';

            // Trigger the download
            downloadLink.click();
        });
    }

    const navigateBack = () => {
        navigate('..');
    }

    // const toggleTooltip = () => {
    //     setShowTooltip((cur) => (!cur));
    // };

    return (
        <div className={styles.infoContainer}>
            <div className={`${styles.pageActionsContainer}`}>
                <div className={`${styles.iconContainer}`} onClick={navigateBack}>
                    <FaArrowLeft className={styles.icon} />
                </div>
            </div>
            <div className={styles.infoText}>
                The following is a sample comic strip.
                Click on any image and generate new images as per your need by entering the prompt.
            </div>
            <div className={`${styles.pageActionsContainer}`}>
                <div className={`${styles.iconContainer}`} onClick={exportSnap}>
                    <FaDownload className={styles.icon} />
                </div>
                <div
                    className={`${styles.iconContainer} ${styles.infoIconContainer}`}
                >
                    <FaInfo className={`${styles.icon}`} />
                    <div className={styles.tooltip}>
                        <ol>
                            <li>
                                The following 10 panel comic strip is having a default image displayed in each panel.
                            </li>
                            <br />
                            <li>
                                Click on an image, enter the prompt and click on generate.
                                You can even close the popup (modal) and move on to another panels while the image is generated here.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
