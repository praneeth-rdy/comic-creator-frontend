import React from 'react';
import styles from '../styles/components/ComicWrapper.module.css';

function ComicWrapper({ comicPanels, openPanel }) {
  return (
    <div id='comic-wrapper' className={`${styles.comicWrapper}`}>
      {comicPanels.map((panel, index) => (
        <div key={index} className={`${styles.comicImgContainer}`} onClick={() => (openPanel(index))}>
          <img
            className={`${styles.comicImg}`}
            src={panel.imageUrl}
            alt='Comic Panel'
          />
        </div>
      ))}
    </div>
  );
}

export default ComicWrapper;
