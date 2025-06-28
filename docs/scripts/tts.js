document.addEventListener('DOMContentLoaded', function () {
  const clickableDiv = document.getElementById('clickable-div');

  if (!clickableDiv) {
    console.warn("Element with ID 'clickable-div' not found.");
    return;
  }

  const audioFiles = [
    'audio1', 'audio2', 'audio3', 'audio4', 'audio5', 'audio6', 'audio7',
    'audio8', 'audio9', 'audio10', 'audio11', 'audio12', 'audio13', 'audio14'
  ];

  clickableDiv.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudioId = audioFiles[randomIndex];
    const audio = document.getElementById(randomAudioId);

    if (!audio) {
      console.warn(`Audio element with ID '${randomAudioId}' not found.`);
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Audio playback prevented:", e));
  });
});
