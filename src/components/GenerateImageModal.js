import React from 'react';
import styles from '../styles/components/GenerateImageModal.module.css';
import { query } from '../utilities';

function GenerateImageModal({
    closePanel,
    comicPanels,
    setComicPanels,
    comicPanelsInfo,
    setComicPanelsInfo,
    currentWorkingPanelIndex,
    currentWorkingPanelPrompt,
    setCurrentWorkingPanelPrompt,
}) {

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


    return (
        <div className={`${styles.modalOverlay}`} onClick={closePanel}>
            <div className={`${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${styles.modalHeader}`}>
                    <span className={`${styles.modalCloseButton}`} onClick={closePanel}>
                        &times;
                    </span>
                </div>
                <div className={`${styles.modalBody}`}>
                    <div className={`${styles.modalImageContainer}`}>
                        <img
                            className={`${styles.modalImage}`}
                            src={comicPanels[currentWorkingPanelIndex].imageUrl}
                            alt='Comic Panel'
                        />
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
    );
}

export default GenerateImageModal;
