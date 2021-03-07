import Router from 'next/router'

document.addEventListener('keypress', e => {

    if (String.fromCharCode(e.keyCode) === 'h') {
        window.play();
    }
    if (String.fromCharCode(e.keyCode) === 's') {
        window.pause();
    }
    if (String.fromCharCode(e.keyCode) === 'q') {// back 3min
        // window.back();
        document.querySelector('#audio').currentTime = document.querySelector('#audio').currentTime - (1 * 3);
        document.querySelector('#video').currentTime = document.querySelector('#video').currentTime - (1 * 3);
    }
    if (String.fromCharCode(e.keyCode) === 'a') {// ahead 3min
        document.querySelector('#audio').currentTime = document.querySelector('#audio').currentTime + (1 * 3);
        document.querySelector('#video').currentTime = document.querySelector('#video').currentTime + (1 * 3);
    }

    if (String.fromCharCode(e.keyCode) === 's') {
        window.sleep();
    }
    if (e.keyCode === 96) {
        window.home();
    }

})

window.home = () => {
    debugger;
    location = '/';
}
window.sleep = () => {
    location = '/#sleep';
}

window.forward = () => {
    window.history.forward()
    // Router.forward();
}
window.play = () => {
    document.querySelector('#audio').play()
    document.querySelector('#video').play()
}

window.back = () => {
    // window.history.back();
    Router.back()
}


window.pause = () => {
    document.querySelector('#audio').pause()
    document.querySelector('#video').pause()
}

window.help = () => {

}