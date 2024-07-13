document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const videoIframe = document.querySelector('.about__video-iframe');
  const aboutVideo = document.querySelector('.about__video');

  playButton.addEventListener('click', (event) => {
    event.preventDefault();
    playVideo();
  });

  function playVideo() {
    // Помечаем .about__video как "playing"
    aboutVideo.classList.add('playing');

    // Скрываем кнопку "Play"
    playButton.style.display = 'none';

    // Отображаем iframe и начинаем воспроизведение видео
    videoIframe.style.display = 'block';
    videoIframe.src = `https://www.youtube.com/embed/${videoIframe.dataset.youtube}?autoplay=1`;
  }
});
