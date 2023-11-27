import React, { useState } from 'react';
import styles from '../styles/pages/ComicPanel.module.css';
import sampleImg from '../assets/sample.png';
import html2canvas from 'html2canvas';
import GenerateImageModal from '../components/GenerateImageModal';

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
      <div>
        <button onClick={exportSnap}>
          Export
        </button>
      </div>
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
