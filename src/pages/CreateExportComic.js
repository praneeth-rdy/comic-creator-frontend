// Installed Libraries
import React, { useState } from 'react';

// Project Components
import ComicWrapper from '../components/ComicWrapper';
import GenerateImageModal from '../components/GenerateImageModal';

// Static Files
import styles from '../styles/pages/CreateExportComic.module.css';
import sampleImg from '../assets/sample.png';
import InfoSection from '../components/InfoSection';


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

  return (
    <div className={`container ${styles.mainContainer}`}>
      <InfoSection />
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
