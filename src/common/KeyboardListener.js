import Router from 'next/router'
import { store } from 'store';
import useFileExplorer from 'common/useFileExplorer'
import axios from 'axios'

export const keypress = async (e, char) => {

    const c = char || String.fromCharCode(e.keyCode);

    if (/[0-9]+/.test(c)) {
        const filenames = (await axios.get('/api/filenames')).data;
        const r = useFileExplorer(filenames).nodes[parseInt(c) - 1];
        const firstChild = r?.getNodes().filter(r => r.type !== 'image')?.[0];
        firstChild?.type === 'media' ? Router.push(firstChild.path) : Router.push(r.path)
        // Router.push(node.nodes.filter(r => r.type === 'media' || r.type === 'folder')?.[parseInt(c) - 1].path);
    }
    if (c === 'h') {
        play();
    }
    if (c === 's') {
        pause();
    }
    if (c === 'q') {// back 3min
        document.querySelector('#audio').currentTime = document.querySelector('#audio').currentTime - (1 * 3);
        document.querySelector('#video').currentTime = document.querySelector('#video').currentTime - (1 * 3);
    }
    if (c === 'a') {// ahead 3min
        document.querySelector('#audio').currentTime = document.querySelector('#audio').currentTime + (1 * 3);
        document.querySelector('#video').currentTime = document.querySelector('#video').currentTime + (1 * 3);
    }

    if (c === 'c') {
        sleep();
    }
    if (/*e.keyCode === 96*/c === 'x') {
        home();
    }
    if (c === 'f') {
        const isVideo = store.getState().common.currentTrack?.includes('.mp4');
        if (!isVideo) { return; }
        const elem = document.querySelector(isVideo ? '#video' : '#audio');
        const isFullscreen = window.innerHeight == screen.height
        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }



    }

}
(() => {
    if (typeof document === 'undefined') {
        return;
    }

    document.addEventListener('keypress', keypress)
})()

export const home = () => { location = '/'; }

export const sleep = () => {
    // location = '/#sleep';
}

export const forward = () => { window.history.forward() }

export const play = () => {
    document.querySelector('#audio')?.play()
    document.querySelector('#video')?.play()
}

export const back = () => {
    Router.back()
}

export const pause = () => {
    document.querySelector('#audio')?.pause()
    document.querySelector('#video')?.pause()
}

export const help = () => { }

