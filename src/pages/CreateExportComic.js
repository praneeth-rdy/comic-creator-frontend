import React from 'react';
import styles from '../styles/pages/ComicPanel.module.css';
import ComicImage from '../components/ComicImage';
import sampleImg from '../assets/sample.png';

function CreateExportComic() {
  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={`${styles.comicWrapper}`}>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
        <div className={`${styles.comicImgContainer}`}>
          <img className={`${styles.comicImg}`} src={sampleImg} />
        </div>
      </div>
      
    </div>
  );
}

export default CreateExportComic;
