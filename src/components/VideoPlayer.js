import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFileExplorer from 'common/useFileExplorer'
export default function VideoPlayer(props) {
    const children = useFileExplorer();
    const media = children?.media || [];

    let currentTrack = useSelector(state => state.common.currentTrack)
    if(media.length === 0){
        currentTrack = undefined;
    }
    const isVideo = currentTrack?.includes('.mp4');
    useEffect(() => {
        if (currentTrack) {
            debugger;
        }
        document.querySelector(currentTrack?.includes('.mp4') ? '#videoSource' : '#audioSource').src = currentTrack;
        document.querySelector(!currentTrack?.includes('.mp4') ? '#videoSource' : '#audioSource').src = '';// to prevent the play button
    }, [currentTrack])
    return <div style={{ display: 'flex', justifyContent: 'center', width: 'calc(100vw - 600px)', backgroundColor: 'purple' }}>
        <audio src={isVideo ? undefined : currentTrack} style={{ width: 'calc(100vw - 600px)', ...(isVideo || !currentTrack) && { display: 'none' } }} id="audio" controls>
            <source id="audioSource" />
        </audio>
        <video src={!isVideo ? undefined : currentTrack} style={{ width: 'calc(100vw - 600px)', ...((!isVideo) || !currentTrack) && { display: 'none' } }} id="video" controls width="250">
            <source id="videoSource" />
        </video>
    </div>
}