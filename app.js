const videos = [
    { 
        src: 'video/video-1.mp4', 
        title: 'Police Officer',
        text: 'Start your career as a brave Police Officer.<br> Uphold the law, catch criminals, and climb the ranks!',
        class:'video1'
    },
    { 
        src: 'video/video-2.mp4', 
        title: 'Crime Lord', 
        text: 'Rule the underground as a ruthless Crime Lord.<br> Build your empire, outsmart rivals, and take control of the city!', 
        class:'video2' 
    },
    { 
        src: 'video/video-3.mp4', 
        title: 'Firefighter', 
        text: 'Face the fire and save lives as a heroic Firefighter.<br> Protect your city and become a true hero!',
        class:'video3'
    },
    { 
        src: 'video/video-4.mp4', 
        title: 'Doctor', 
        text: 'Heal the sick and save lives as a skilled Doctor. Climb your way up to become a renowned surgeon!', 
        class:'video4' 
    },
    {
        src: 'video/video-5.mp4', 
        title: 'Lawyer',
        text: 'Defend the innocent or fight for justice as a clever Lawyer. Use your mind to shape the law!',
        class:'video5'
    },
    { 
        src: 'video/video-6.mp4', 
        title: 'Lunatic Luca', 
        text: 'Chaos follows wherever you go. Embrace the unpredictable and unleash your madness as a Lunatic!', 
        class:'video6' 
    },
    
];

let currentIndex = 0;

const videoEl = document.getElementById('video');
const videoTitle = document.getElementById('video-title');
const videoText = document.getElementById('video-text');
const overlayText = document.getElementById('overlay-text');
const nextBtn = document.getElementById('next');


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    

    videoEl.src = videos[currentIndex].src;
    videoEl.play();


    videoTitle.textContent = videos[currentIndex].title;
    videoText.textContent = videos[currentIndex].text;
    overlayText.className = 'video-info ' + videos[currentIndex].class;
    videoText.innerHTML = videos[currentIndex].text;
});
function initModal() {
  const openBtn = document.querySelector('.open-modal');
  const overlay = document.querySelector('.modal-overlay');
  const closeBtn = document.querySelector('.sulgemine');

  if (!overlay) return; 

 
  if (overlay.__modalInit) return;
  overlay.__modalInit = true;

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}
initModal();


const features = [
    { video: 'video/feature-1.mp4', title: 'Hacking', text: 'Hack accounts, steal data or crypto!' },
    { video: 'video/feature-2.mp4', title: 'Loco Leo', text: 'Leo’s in town—watch out!' },
    { video: 'video/feature-3.mp4', title: 'Hoodlums', text: 'Claim your turf, own the streets!' },
    { video: 'video/feature-4.mp4', title: 'PawSisters', text: 'Trade jewels fast and smart!' },
    { video: 'video/feature-5.mp4', title: 'WildFires', text: 'Bigger flames, deadlier missions!' },
    { video: 'video/feature-6.mp4', title: 'Purrbster', text: 'Crime crew alert—stay sharp!' }
];

const container = document.getElementById('features-container');

const colors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple'
];

features.forEach((feature, index) => {
    const row = document.createElement('div');
    row.classList.add('feature-row');
    if(index % 2 === 1) row.classList.add('reverse'); // iga teine rida vaheldub

    // Video element
    const videoEl = document.createElement('video');
    videoEl.src = feature.video;
    videoEl.loop = true;
    videoEl.autoplay = true;
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.classList.add('vid-taust');

    // Tekst element
    const textEl = document.createElement('div');
    textEl.classList.add('cmng-soon');
    textEl.innerHTML = `<h1>${feature.title}</h1><p>${feature.text}</p>`;

    // Lisa järjekorras vastavalt row või reverse
    row.appendChild(videoEl);
    row.appendChild(textEl);

    container.appendChild(row);
    });