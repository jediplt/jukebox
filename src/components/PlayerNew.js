import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFileExplorer from 'common/useFileExplorer'
import { Router } from 'next/router';
export default function Player(props) {
    // const children = useFileExplorer();
    // const media = children?.media || [];

    const currentTrack = window.location.pathname.replace(/%20/g, ' ');
    const isVideo = currentTrack?.includes('.mp4');
    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            console.log(
                `App is changing to ${url} ${shallow ? 'with' : 'without'
                } shallow routing`
            )
        }
        Router.events.on('routeChangeStart', (handleRouteChange))
        document.querySelector(currentTrack?.includes('.mp4') ? '#videoSource' : '#audioSource').src = currentTrack;
        document.querySelector(!currentTrack?.includes('.mp4') ? '#videoSource' : '#audioSource').src = '';// to prevent the play button
    }, [currentTrack])
    return <div style={{
        display: 'flex', justifyContent: 'center', width: width1,
        position: 'fixed', top: 70 + 32
    }}>
        {/* <div style={{width: 300, height: 300, backgroundColor: 'yellow'}}/> */}
        <audio src={isVideo ? undefined : currentTrack} style={{ width: width1, ...(isVideo || !currentTrack) && { display: 'none' } }} id="audio" controls>
            <source id="audioSource" />
        </audio>
        <video src={!isVideo ? undefined : currentTrack} style={{ width: width1, ...((!isVideo) || !currentTrack) && { display: 'none' } }} id="video" controls width="250">
            <source id="videoSource" />
        </video>
    </div>
}

const width1 = 'calc(100vw - 400px)';