console.log("Welcome To Spotify");

//INITIALIZE THE VARIABLES
let songIndex = 0;
let audioElement = new Audio('Music/Let.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = 
[
    
    {songName: "Let Me Love You", filePath:"Music/Let.mp3", coverPath: "covers/1.jpg"},
    {songName: "One Love", filePath:"Music/One.mp3", coverPath: "covers/2.jpg"},
    {songName: "Hero", filePath:"Music/Hero.mp3", coverPath: "covers/3.jpg"},
    {songName: "Wish I Was Your Lover", filePath:"Music/Wish.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lonely", filePath:"Music/Lonely.mp3", coverPath: "covers/5.jpg"},
    {songName: "Be With You", filePath:"Music/Be.mp3", coverPath: "covers/6.jpg"},
    {songName: "Smack That", filePath:"Music/Samck.mp3", coverPath: "covers/7.jpg"},
    {songName: "Heart Attack", filePath:"Music/Heart.mp3", coverPath: "covers/8.jpg"},
    {songName: "Beautiful-Akon", filePath:"Music/Beautiful.mp3", coverPath: "covers/9.jpg"},
    {songName: "Right Now-Akon", filePath:"Music/Right.mp3", coverPath: "covers/10.jpg"},
]
songItems.forEach((element)=>{
    console.log(element, i)
    element.getElementByTagName("img")[0].src = Music[i].coverPath;
    element.getElementsByClassName("span")[0].innerText = Music[i].coverPath;
})
// audioElement.play();
//PLAY/PAUSE CLICK EVENT
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});
//AUDIO EVENT
audioElement.addEventListener('timeupdate', ()=>{ 
// UPDATE SEEKBAR
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{  makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
//NEXT SONG
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});
//PREVIOUS SONG
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
