const videos = document.querySelectorAll('.video-hover');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.muted = false;  
        video.play();  
    });
    video.addEventListener('mouseleave', () => {
        video.muted = true;  
        video.play(); 
    });
});
