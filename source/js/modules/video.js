const video = document.querySelector('[data-video]');

function setUpVideo() {
  if (video) {
    const button = video.querySelector('[data-video-button]');
    button.addEventListener('click', () => {
      const iframe = createIframe();
      const player = document.createElement('div');
      player.classList.add('about__player');
      button.remove();
      video.appendChild(player);
      player.appendChild(iframe);
    });
  }
}


function createIframe() {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('frameborder', '0');
  iframe.style.zIndex = '1';

  return iframe;
}

export {setUpVideo};
