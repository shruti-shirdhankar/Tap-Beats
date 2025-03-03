//makes howler class for each key assigning each key to a sound
const sounds = {
    Q: new Howl({ src: ['sounds/kick.wav'] }),
    W: new Howl({ src: ['sounds/snare.wav']}),
    E: new Howl({ src: ['sounds/hihat.wav']})
};

//plays audio when key is pressed 
document.addEventListener('keydown',( Event)=>{
    const key = Event.key.toUpperCase();

    if(sounds[key]) {
        pressed(key);
        console.log("Playing ",key);
        sounds[key].play();
    }
    else{
        console.warn("sound ille")
    }
});

//highlights the pressed key to show it is pressed
function pressed(key){
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
    if (pad){
        pad.classList.add('active');
        setTimeout(() => pad.classList.remove('active'),100);
    }
}