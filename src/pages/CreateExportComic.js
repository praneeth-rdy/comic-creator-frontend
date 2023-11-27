import React, { useState } from 'react';
import styles from '../styles/pages/ComicPanel.module.css';
import sampleImg from '../assets/sample.png';
import html2canvas from 'html2canvas';
import { query } from '../utilities';

function CreateExportComic({ panelSize }) {
  // Array stores panel objects with properties: imageUrl, currentStatus, queryPrompt
  // status values - idle, loading, error
  const [comicPanels, setComicPanels] = useState(Array(panelSize).fill({ imageUrl: sampleImg }));
  const [comicPanelsInfo, setComicPanelsInfo] = useState(Array(panelSize).fill({ currentStatus: 'idle', queryPrompt: '' }));
  const [currentWorkingPanelIndex, setCurrentWorkingPanelIndex] = useState(-1);
  const [currentWorkingPanelPrompt, setCurrentWorkingPanelPrompt] = useState('');

  const updatePanelStatus = (index, status, options) => {
    const { queryPrompt, imageUrl } = options;
    setComicPanelsInfo((prevPanelsInfo) => {
      const newPanelsInfo = [...prevPanelsInfo];
      if (status === 'loading') {
        newPanelsInfo[index] = {
          ...prevPanelsInfo[index],
          currentStatus: status,
          queryPrompt
        };
      } else if (status === 'error' || status === 'idle') {
        newPanelsInfo[index] = {
          ...prevPanelsInfo[index],
          currentStatus: status,
        };
      }
      return newPanelsInfo;
    });

    if (status === 'idle' && imageUrl) {
      setComicPanels((prevPanels) => {
        const newPanels = [...prevPanels];
        newPanels[index] = {
          ...prevPanels[index],
          imageUrl,
        };
        return newPanels;
      });
    }
  }

  const generatePanelImage = (index, queryPrompt) => {
    // set the status
    updatePanelStatus(index, 'loading', { queryPrompt });

    // Fetch and update based on success or failure
    query(queryPrompt).then((imageBlob) => {
      const imageUrl = URL.createObjectURL(imageBlob);
      updatePanelStatus(index, 'idle', { imageUrl });
    }).catch((err) => {
      updatePanelStatus(index, 'error');
    });
  };

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
            <img className={`${styles.comicImg}`} src={panel.imageUrl} />
          </div>
        ))}
      </div>
      {(currentWorkingPanelIndex >= 0 && currentWorkingPanelIndex < panelSize) && (
        <div className={`${styles.modalOverlay}`} onClick={closePanel}>
          <div className={`${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.modalHeader}`}>
              <span className={`${styles.modalCloseButton}`} onClick={closePanel}>
                &times;
              </span>
            </div>
            <div className={`${styles.modalBody}`}>
              <div className={`${styles.modalImageContainer}`}>
                <img className={`${styles.modalImage}`} src={comicPanels[currentWorkingPanelIndex].imageUrl} />
              </div>
              <form onSubmit={(e) => { e.preventDefault(); generatePanelImage(currentWorkingPanelIndex, currentWorkingPanelPrompt) }} className={`${styles.modalActionsContainer}`}>
                <input
                  className={`${styles.modalInput}`}
                  disabled={comicPanelsInfo[currentWorkingPanelIndex].currentStatus === 'loading'}
                  value={currentWorkingPanelPrompt}
                  onChange={(e) => (setCurrentWorkingPanelPrompt(e.target.value))}
                  placeholder='Enter Prompt...'
                />
                <button
                  type='submit'
                  className={`${styles.modalButton}`}
                  disabled={comicPanelsInfo[currentWorkingPanelIndex].currentStatus === 'loading'}
                >
                  Generate
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateExportComic;
