import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFileExplorer from 'common/useFileExplorer'
import { use } from 'react-use'
export default function Player(props) {
    const currentNode = useFileExplorer();
    const currentTrack = currentNode?.filePath;
    const isVideo = currentTrack?.includes?.('.mp4');
    useEffect(() => {
        document.querySelector(currentTrack?.includes?.('.mp4') ? '#videoSource' : '#audioSource').src = currentTrack;
        document.querySelector(!currentTrack?.includes?.('.mp4') ? '#videoSource' : '#audioSource').src = '';// to prevent the play button
    }, [currentTrack])
    return <div style={{
        display: 'flex', justifyContent: 'center', width: width1, 
        position: 'fixed', top: 70 + 32
    }}>
        <audio src={isVideo ? undefined : currentTrack} style={{ width: width1, ...(isVideo || !currentTrack) && { display: 'none' } }} id="audio" controls>
            <source id="audioSource" />
        </audio>
        <video src={!isVideo ? undefined : currentTrack} style={{ width: width1, ...((!isVideo) || !currentTrack) && { display: 'none' } }} id="video" controls width="250">
            <source id="videoSource" />
        </video>
    </div>
}

const width1 = 'calc(100vw - 400px)';