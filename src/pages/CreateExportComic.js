// Installed Libraries
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { FaDownload, FaInfo } from 'react-icons/fa';

// Project Components
import GenerateImageModal from '../components/GenerateImageModal';

// Static Files
import styles from '../styles/pages/CreateExportComic.module.css';
import sampleImg from '../assets/sample.png';
import ComicWrapper from '../components/ComicWrapper';


function CreateExportComic({ panelSize }) {
  // Array stores panel objects with properties: imageUrl, currentStatus, queryPrompt
  // status values - idle, loading, error
  const [comicPanels, setComicPanels] = useState(Array(panelSize).fill({ imageUrl: sampleImg }));
  const [comicPanelsInfo, setComicPanelsInfo] = useState(Array(panelSize).fill({ currentStatus: 'idle', queryPrompt: '' }));
  const [currentWorkingPanelIndex, setCurrentWorkingPanelIndex] = useState(-1);
  const [currentWorkingPanelPrompt, setCurrentWorkingPanelPrompt] = useState('');

  const openPanel = (panelIndex) => {
    if (panelIndex >= 0 && panelIndex < panelSize) {
      setCurrentWorkingPanelPrompt(comicPanelsInfo[panelIndex].queryPrompt);
      setCurrentWorkingPanelIndex(panelIndex);
    }
  }

  const closePanel = (panelIndex) => {
    setCurrentWorkingPanelIndex(-1);
  }

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

  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={styles.infoContainer}>
        <div className={styles.infoText}>
          Tap on any image to begin with
        </div>
        <div className={`${styles.pageActionsContainer}`}>
          <div className={`${styles.iconContainer}`} onClick={exportSnap}>
            <FaDownload className={styles.icon} />
          </div>
          <div className={`${styles.iconContainer}`}>
            <FaInfo className={styles.icon} />
          </div>
        </div>
      </div>
      <ComicWrapper
        comicPanels={comicPanels}
        openPanel={openPanel}
      />
      {(currentWorkingPanelIndex >= 0 && currentWorkingPanelIndex < panelSize) && (
        <GenerateImageModal
          closePanel={closePanel}
          comicPanels={comicPanels}
          setComicPanels={setComicPanels}
          comicPanelsInfo={comicPanelsInfo}
          setComicPanelsInfo={setComicPanelsInfo}
          currentWorkingPanelIndex={currentWorkingPanelIndex}
          currentWorkingPanelPrompt={currentWorkingPanelPrompt}
          setCurrentWorkingPanelPrompt={setCurrentWorkingPanelPrompt}
        />
      )}
    </div>
  );
}

export default CreateExportComic;
