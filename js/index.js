const $video =document.querySelector('#video');
const $play =document.querySelector('#play');
const $pause =document.querySelector('#pause');
const $backward =document.querySelector('#backward');
const $forward =document.querySelector('#forward');

$play.addEventListener('click', handlePlay);

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al botón de play')
}    

$pause .addEventListener('click', handlePause);

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pause')
}

$backward .addEventListener('click', handleBackward);

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('le diste para atrás 10 seg', $video.currentTime)
}

$forward .addEventListener('click', handleForward);

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log('le diste para adelante 10 seg', $video.currentTime)
}


const $progress =document.querySelector('#progress');
$video .addEventListener('loadedmetadata', handleLoaded);
$video .addEventListener('timeupdate', handleTimeUpdate);


function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    //console.log('tiempo actual', $video.currentTime)
}

$progress .addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}