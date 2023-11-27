import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Welcome.module.css';

function Welcome() {
    const textToDisplay = "Welcome to the world of Gen-AI!";
    const [displayedText, setDisplayedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (displayedText.length < textToDisplay.length) {
                setDisplayedText((prevText) => prevText + textToDisplay[prevText.length]);
            } else {
                clearInterval(intervalId); // Stop the typewriter effect
                setCursorVisible(false); // Hide the cursor when done
            }
        }, 150); // Adjust the interval speed

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [displayedText, textToDisplay]);

    return (
        <div>
            <div className={styles.welcomeTextContainer}>
                <span className={styles.welcomeText}>{displayedText}</span>
                {cursorVisible && <span className={styles.welcomeTextCursor}></span>}
            </div>
        </div>
    );
}

export default Welcome;
