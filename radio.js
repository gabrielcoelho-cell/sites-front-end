const radioStream = document.getElementById('radioStream');
const playBtn = document.getElementById('playBtn');
const pauseBnt = document.getElementById('pauseBnt');
const volumeSlider = document.getElementById('volumeSlider/');

playBtn.addEventListener('click', () => { radioStream.play();
    });
pauseBtn.addEventListener('click', () => { radioStream.pause();
    });
volumeSlider.addEventListener('input', () => { radioStream.volume = volumeSlider.value;
    });
    
//Define o volume inicial
radioStream.volume = volumeSlider.value;