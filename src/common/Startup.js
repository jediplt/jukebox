// USE THIS URL FOR TESTING!! http://localhost:9080/#testFolder1
const reloadBody = async () => {

    const filenames = (await (await fetch('filenames.txt')).text()).split('\n').map(row => row.replace('./Media/', ''));
    const currentPath = window.location.hash.replace('#', '').replace(/%20/g, ' ');
    if (currentPath === 'sleep') {
        [...document.querySelectorAll('body > *')].slice(0, -2).forEach((element, i, array) => {
            element.style.opacity = 0;
        })
        document.body.onclick = () => { location = ('/#') }
        return;
    } else {
        [...document.querySelectorAll('body *')].forEach(element => {
            element.style.opacity = 1;
        })
        document.body.onclick = () => { }
    }
    if (currentPath && !filenames.includes(currentPath)) {
        document.body.innerHTML = '<div>Error: Please Contact <b style="color: red">Steven Austin</b> or reset the Jukebox</div>'
    }

    // get all files for current directory
    const beginningMatching = filenames.filter(filename =>
        (!currentPath && !filename.includes('/')) /*<- is root location*/ ||
        filename.slice(0, currentPath.length) === currentPath && filename[currentPath.length] === '/')

    const folders = beginningMatching
        .filter(filename => !currentPath/*<-is root */ || filename.split('/').length === currentPath.split('/').length + 1)
        .filter(file => !file.includes('.'));

    const getFiles = folder => filenames
        .filter(filename => filename.slice(0, folder.length) === folder && filename[folder.length] === '/')
        .filter(filename => filename.split('/').length === folder.split('/').length + 1)

    const getSongsAndVideos = folder => getFiles(folder)
        .filter(filename => filename.includes('.mp4') || filename.includes('.mp3') || filename.includes('.aac'));

    const getImages = folder => getFiles(folder)
        .filter(filename => filename.includes('.jpeg') || filename.includes('.jpg') || filename.includes('.png'));

    window.folders = folders;

    [...document.querySelectorAll('.tile')].forEach((element, i) => {
        const folder = folders[i];
        const folderName = folder && folder.split('/').slice(-1)[0];
        if (!folderName) {
            element.parentElement.style.display = "none";
            return;
        } else {
            element.parentElement.style.display = "block";
        }
        [...document.querySelectorAll('.title_name')][i].innerHTML = folderName;
        let image = getImages(folder)[0]
        if (image) {
            // element.style.opacity = 1;
            element.src = "Media/" + image;
        } else {
            element.alt = folderName;
            element.src = "Media/" + image;
            // element.style.opacity = 0;
        }
        element.onclick = () => { location = ('/#' + folder) };
    })


    document.addEventListener('keypress', e => {
        const number = parseInt(String.fromCharCode(e.keyCode))
        window.keypress(number)
    })

    let file = getSongsAndVideos(currentPath);
    file = file && file[0]

    if (file) {
        const response = await fetch('Media/' + file);

        document.querySelector(file.includes('.mp4') ? '#videoSource' : '#audioSource').src = 'Media/' + file;
        document.querySelector(!file.includes('.mp4') ? '#videoSource' : '#audioSource').src = '';// to prevent the play button
        document.querySelector(file.includes('.mp4') ? '#video' : '#audio').load();
        document.querySelector(file.includes('.mp4') ? '#video' : '#audio').style.display = "block";
        document.querySelector(!file.includes('.mp4') ? '#video' : '#audio').style.display = "none";
    } else {
        document.querySelector('#video').style.display = "none";
        document.querySelector('#audio').style.display = "none";
    }

    //THIS WAS ADDED
    const files = getSongsAndVideos(currentPath);
    if (files.length > 0) {
        document.querySelector('#SongSelector').style.opacity = 1;
        document.querySelector('#SongSelector').innerHTML = files.map(filename => `<div onclick="playSong("${filename}")" class="songRow" style="cursor: pointer;">${filename.split('/').slice(-1)[0].split('.')[0]}</div>`).join('')
    } else {
        document.querySelector('#SongSelector').style.opacity = 0;
    }

}

window.keypress = (number) => {
    if ([0, 1, 2, 3, 4, 5].includes(number - 1) && window.folders[number - 1]) {
        location = '/#' + window.folders[number - 1]
    }
}

const showController = () => {
    const virtualcontroller = document.getElementById('virtualcontroller');
    if (virtualcontroller.style.top === '100vh') {
        virtualcontroller.style.top = 'calc(100vh - 272px - 8px)';
    } else {
        virtualcontroller.style.top = '100vh';
    }
}
window.showController = showController;

window.playSong = filename => {
    window.location.hash = filename;
}

window.addEventListener('popstate', reloadBody)

reloadBody();


// abbott and costello
// Goals for jukebox
// 1) put all songs on the right
// 2) Make shuffley play work
// 3) Make auto play work


//TODO put current song in url