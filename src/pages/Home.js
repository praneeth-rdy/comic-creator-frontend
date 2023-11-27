// Installed Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Project Components
import Welcome from '../components/Welcome';

// Static Files
import styles from '../styles/pages/Home.module.css';


function Home() {
  const navigate = useNavigate();

  const changeDirectory = () => {
    navigate("/create-export-comic");
  }

  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={`${styles.pageContent}`}>
        <Welcome />
        <div>
          Select a command:
        </div>
        <div className={styles.entryButtonContainer}>
          <div className={styles.entryButton} onClick={changeDirectory}>
            <span className={styles.pcUsername}>
              praneeth-rdy@dashtoon:~$
            </span>
            <span className={styles.pcCommand}>
              cd create-export-comic
            </span>
          </div>
        </div>
        <div className={styles.entryButtonContainer}>
          <a className={styles.entryButton} href='https://github.com/praneeth-rdy'>
            <span className={styles.pcUsername}>
              praneeth-rdy@dashtoon:~$
            </span>
            <span className={styles.pcCommand}>
              cd github/praneeth-rdy
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
