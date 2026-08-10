// Track lists scraped from each playlist's page (RSS feed caps at 15, and listType:'playlist'
// playback is unreliable in this environment), so playback is driven explicitly per-track via
// loadVideoById.
const SCENES = {
  salon: {
    bg: 'assets/salon-bg.png',
    playlistUrl: 'https://music.youtube.com/playlist?list=PLTJ1PnzCWyFw',
    tracks: [
      { id: 'N0jnLZxYwYc', title: 'Mujhse Mohabbat Ka Izhaar', channel: 'Shemaroo Filmi Gaane' },
      { id: '3NWMK2MRqIk', title: 'Tumsa Koi Pyaara', channel: 'Tips Official' },
      { id: 'bga_0ziOOfQ', title: 'Woh Meri Neend Mera Chain - Hum Hain Rahi Pyar Ke', channel: 'Tips Official' },
      { id: 'oFxbBeYhLqM', title: 'Saaton Janam Main Tere Full', channel: 'Ishtar Music' },
      { id: 'nNhv8A_rJTg', title: 'Oye Raju Pyar Na Kariyo Video', channel: 'T-Series Bollywood Classics' },
      { id: 'd3lZvNexPL0', title: 'Bahut Pyar Karte Hain (Male) (HQ) W/ Lyrics + English Translation - Saajan', channel: 'thebollysongs8' },
      { id: 'CTuvMubzXpU', title: 'Jeeta Tha Jiske Liye Full', channel: 'Ishtar Music' },
      { id: 'i1IsLVz6T9Q', title: 'Kumar Sanu & Sadhana Sargam Live Sydney - Teri umeed tera intezar - Deewana', channel: 'Chintan Ramola' },
      { id: '5y_TCKNzAMI', title: 'Tumse Milne Ko Dil Karta Hai ❤️🎶', channel: 'Zee Music Classic' },
      { id: 'fBylcT-TWZw', title: '"Bas Ek Sanam Chahiye Aashiqui Ke Liye" Video', channel: 'T-Series Bollywood Classics' },
      { id: 'CTNgz5gb3D8', title: 'TU PYAR HAI KISI AUR KA ( Singers, Babla Mehta & Anuradha Paudwal )', channel: 'Swati Channel' },
      { id: 'lFdSi01tpYM', title: 'Sochenge Tumhe Pyar', channel: 'Ishtar Music' },
      { id: 'dDR4oiyjUBA', title: 'Raah Mein Unse Mulaqat', channel: 'Tips Official' },
      { id: 'otQmzlm-s7Q', title: 'Main Duniya Bhula Doonga', channel: 'T-Series Bollywood Classics' },
      { id: 'tPNwGuu_rQ4', title: 'Tumhein Apna Banane Ki Kasam', channel: 'T-Series Bollywood Classics' },
      { id: 'p1jhKCIoVjI', title: 'Tum dil ki dhakdan mein rehete ho - abhijeet bhattacharya', channel: '90+ million' },
      { id: '2OsyNo53MzU', title: 'Ustad Nusrat Fateh Ali Khan - Dulhe Ka Sehra Suhana in', channel: 'tgdproduction10' },
      { id: '-N-k56i7M2k', title: 'Maine Pyaar Tumhi Se Kiya Hai - Phool Aur Kaante', channel: 'Tips Official' },
      { id: 'rXHY4Cv9cA8', title: 'Ab Tere Bin Jee Lenge Hum Video', channel: 'T-Series Bollywood Classics' },
      { id: 'qGOTe3KmCdY', title: 'Kitna Haseen Chehra Full', channel: 'Ishtar Music' },
      { id: 'cGKBs7rokos', title: 'Tujhko Na Dekhu Toh (Jaanwar) Sunidhi Chauhan, Udit Narayan', channel: 'Sunidhi Songs' },
      { id: 'BtdiNnrftYM', title: 'Chand Tare Phool - 4K Video', channel: 'Ishtar Music' },
      { id: 'nRJ8vHpi6_g', title: 'Tum Dil Ki Dhadkan Mein - VIDEO', channel: 'Ishtar Music' },
      { id: 'xKx_80QM2LU', title: 'Sab Kuchh Bhula Diya Video', channel: 'T-Series Bollywood Classics' },
      { id: 'zuPoUsdXrqM', title: 'Dheere Dheere Pyar Ko Badhana Hai', channel: 'Zee Music Classic' },
      { id: 'wYdXuNtJkPk', title: 'Jeeye To Jeeye Kaise', channel: 'Ishtar Music' },
      { id: 'wuLJtA0uJro', title: 'Hum Lakh Chupaye Pyar Magar', channel: 'Ultra Bollywood' },
      { id: 'RjJxWRFfG3s', title: 'Nahin Yeh Ho Nahin Sakta', channel: 'Tips Official' },
      { id: 'wV8njoRVefQ', title: 'Kitna Pyaara Tujhe Rabne Banaya', channel: 'Tips Official' },
      { id: '4ImdbyqnH8w', title: 'Hum Pyaar Hai Tumhare', channel: 'The Kumar Sanu Official' },
      { id: 'htMvfOfixuM', title: 'Ek Ladki Ko Dekha', channel: 'Saregama Music' },
      { id: '5dWbn_qER3s', title: 'Tere Dar Par Sanam - Male Version - Phir Teri Kahani Yaad Aayee', channel: 'Zee Music Classic' },
      { id: '6Na7GSV9bVY', title: 'Chura Ke Dil Mera - JHANKAR BEATS', channel: 'Ishtar Music' },
      { id: 'oEg_iXEWlt4', title: 'Tu Meri Zindagi Hai', channel: 'T-Series Bollywood Classics' },
      { id: 'QjqKXFGM3eI', title: "Chori Chori Dil Tera - Kumar Sanu Songs - Romantic Songs - 90's Love Song", channel: 'Shemaroo Filmi Gaane' },
      { id: 'Dz1Ad3cdtQA', title: 'Ek Aisi Ladki Thi Jise Mai Pyar Karta Tha... Kumar Sanu and Alka Yagnik', channel: 'Asim Ghulam' },
      { id: 'G7AdjVDBLO8', title: 'Achha Sila Diya Toone Mere Pyar Ka', channel: 'T-Series' },
      { id: 'TgHYW8ubFko', title: 'Tere Dard Se Dil (Jhankar Beats)', channel: 'The Kumar Sanu Official' },
      { id: 'uIOrAkrjwp4', title: 'Hum Yaar Hai Tumhare', channel: 'Bollywood Sadabahar' },
      { id: 'HoMSu1iw0Zw', title: 'Aitbaar Nahi Karna - Abhijeet Bhattacharya', channel: 'Madhur Sangeet' },
      { id: 'WAgJ8KM5AVQ', title: 'Dekha Hai Pehli Baar', channel: 'Ashirbad Studio Official' },
      { id: 'OgocnLh9P1M', title: 'Aankh Hai Bhari Bhari (Male)', channel: 'Ishtar Music' },
      { id: 'Zi9UBJQMz3I', title: 'Kya Karte They Sajna Phir Lehraya Lal Dupatta', channel: 'T-Series' },
      { id: '_dUAVM5ERXA', title: 'देखने वालों ने क्या-क्या', channel: 'Shemaroo Filmi Gaane' },
      { id: 'lRBIcaSV-Ns', title: 'Tum To Thehre Pardesi', channel: 'Ishtar Music' },
      { id: '9v2bq2JHt4I', title: 'Chehra Kya Dekhte Ho - Kumar Sanu', channel: 'Madhur Sangeet' },
      { id: 'Gg9ZUppafLo', title: 'Too Shayar Hai Main Teri Shayari - Saajan Alka Yagnik', channel: 'IDeal Music' },
      { id: 'w89fWEelFns', title: 'Paas Woh Aane Lage', channel: 'Ishtar Music' },
      { id: 'fg9G1dacXjk', title: 'Chhupana Bhi Nahin Aata Song', channel: 'Venus Movies' },
      { id: 'Y-o8NQ8Y36A', title: 'Is Tarah Aashiqui Ka', channel: 'Tips Official' },
      { id: '526hvVlBP1U', title: 'Tumse Milna Video', channel: 'T-Series Bollywood Classics' },
      { id: 'iCZfjggJg3M', title: 'Kyo Kisi Ko', channel: 'T-Series' },
      { id: 'BaAoZA0fup0', title: 'Dil Ka Aalam', channel: 'T-Series' },
      { id: 'cBGDDBHN22U', title: 'Pehli Pehli Baar Mohabbat Ki Hai Song', channel: 'T-Series Bollywood Classics' },
      { id: 'nG85YFR3o6U', title: 'तूने दिल मेरा तोड़ा', channel: 'Shemaroo Filmi Gaane' },
      { id: 'TRUuSFW80Rk', title: 'Kaash Kahin Aisa Hota', channel: 'Ishtar Music' },
      { id: '-pIMyf5dOnA', title: 'Aawara Hawa Ka Jhonka Hoon Song - Altaf Raja', channel: 'Ishtar Music' },
      { id: 'GxaTSDnI71w', title: 'Love Tujhe Love Main Karta Hoon', channel: 'Bollywood Dhamaka' },
      { id: 'XWKazQwFFdY', title: 'Tere Dard Se Dil Aabad Raha', channel: 'Shemaroo Musical Maestros' },
      { id: '9f6GhUb-WdM', title: 'Dil Cheer Ke Dekh', channel: 'Tips Official' },
      { id: 'rMbQufI9xQw', title: 'Premi Aashiq Aawaara - Phool Aur Kaante', channel: 'Zee Music Classic' },
      { id: 'Mfeg92XPXik', title: 'Dil Diwana (Duet)', channel: 'Anuradha Paudwal Official' },
    ],
  },
  bus: {
    bg: 'assets/bus-bg.png',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLrfsHAYJJLIZvRDZUHlSEBiTqeUr9ZcJ_',
    tracks: [
      { id: 'Qsk8onj4Zh8', title: 'Ek Dil Hai', channel: 'Tips Official' },
      { id: '4O61C7VdEko', title: 'Radhika ke dedi jara aana / darling hukum farmana /ham sath sath he movie song (2020)', channel: 'Rahul 476 Dholpur' },
      { id: 'Rbz1qFlRL_Y', title: 'Falguni Pathak- Maine Payal Hai Chhankai', channel: 'Universal Music India' },
      { id: 'rY4y5FyNj4U', title: 'Hamari Shaadi Mein - Vivah - Shahid Kapoor, Amrita Rao - Superhit Bollywood Song', channel: 'Rajshri' },
      { id: 'MbIRbYjLdqM', title: 'Hum Tumko Nigahon Mein Video', channel: 'T-Series Bollywood Classics' },
      { id: 'VMg4TgF5kyQ', title: 'Chamak Challo Chel Chabeli - Rowdy Rathore', channel: 'SonyMusicIndiaVEVO' },
      { id: 'iZAv9zDeFSc', title: 'Dulhe Ka Sehra', channel: 'Ishtar Music' },
      { id: 'swC9xzv1kXE', title: 'Main Agar Saamne Aa Bhi Jaaya Karo', channel: 'Tips Official' },
      { id: 'qtz5mpvgAM0', title: 'Mere Haath Mein', channel: 'YRF' },
      { id: '2CeoFnb16l4', title: 'Dard Karaara', channel: 'YRF' },
      { id: '8XtXLVylOoU', title: 'Saajanji Ghar Aaye - Kuch Kuch Hota Hai', channel: 'Sony Music India' },
      { id: 'dmwWAZYS-q4', title: 'Dekhne Walon Ne ( Video)', channel: 'Universal Music India' },
      { id: 'WRSeV_27z6k', title: 'Say Shava Shava', channel: 'Sony Music India' },
      { id: 'L6bSHDaDLyc', title: 'Aapke Pyaar Mein', channel: "90's Hits" },
      { id: 'Eu9LPo0gqeQ', title: 'Bheed Mein Tanhai Mein - Video', channel: 'Saregama Music' },
      { id: 'NwEjLQq26IA', title: 'Ye Dil To Pyar Mange Hai', channel: '8DDARK' },
      { id: 'P7P2zqzEYRY', title: 'Bahut Jatate Ho Chah Humse With Lyrics', channel: 'Goldmines Gaane Sune Ansune' },
      { id: 'e1sZuRsWDUo', title: 'Tujhko Hi Dulhan Banaoonga', channel: 'Golden Hits' },
      { id: 'G4xtr6LYcBw', title: 'Aaye Hum Barati Baraat Leke', channel: 'NH Hindi Songs' },
      { id: 'MvcNeQlqtes', title: 'Dil Ne Ye Kaha Hai Dil Se', channel: 'Ishtar Music' },
      { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh Song', channel: 'YRF' },
      { id: 'GxqD1nCjHZE', title: 'Pyaar Se Pyaar Hum Ab To Karne Lage', channel: 'Tips Official' },
      { id: 'FNpV3DQWUf8', title: 'Aap Ke Pyaar Mein Hum Savarne Lage', channel: 'Tips Official' },
      { id: 'ZG6zDWbp_6U', title: 'Kyaa Dil Ne Kahaa Title Song ( Video)', channel: 'Sony Music India' },
      { id: 'q4NVp-aFZSw', title: 'Tumhein Dillagi Bhool Jani Paray Gi', channel: 'VIRSA' },
      { id: '6WFJCR4GKo4', title: 'Hai Kaha Ka Irada Tumhara Sanam', channel: 'Nahid Creates' },
      { id: 'w3TO7ErAqwE', title: 'Too Cheez Badi Hain', channel: 'Udit Narayan' },
    ],
  },
};

const STALL_LIMIT = 5; // ~2.5s of no progress while expecting playback

let currentScene = 'salon';
let player;
let isReady = false;
let expectingPlayback = false;
let stallLastCur = -1;
let stallTicks = 0;
let currentIndex = 0;
let skipAttempts = 0;

function tracks() {
  return SCENES[currentScene].tracks;
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '100',
    width: '178',
    videoId: tracks()[currentIndex].id,
    playerVars: {
      autoplay: 0,
      controls: 0,
      origin: window.location.origin,
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
}

function onPlayerReady() {
  isReady = true;
  renderTrackInfo();
}

function renderTrackInfo() {
  const track = tracks()[currentIndex];
  document.getElementById('trackTitle').textContent = track.title;
  document.getElementById('trackChannel').textContent = track.channel;
  document.getElementById('albumArt').src = `https://i.ytimg.com/vi/${track.id}/hqdefault.jpg`;
}

function loadTrack(index, autoplay) {
  const list = tracks();
  currentIndex = ((index % list.length) + list.length) % list.length;
  stallTicks = 0;
  stallLastCur = -1;
  renderTrackInfo();
  if (autoplay) {
    player.loadVideoById(list[currentIndex].id);
  } else {
    player.cueVideoById(list[currentIndex].id);
  }
}

function skipBlockedTrack(reason) {
  console.warn('[billu-barber] track unplayable (' + reason + ') - skipping');
  skipAttempts++;
  if (skipAttempts >= tracks().length) {
    console.error('[billu-barber] no playable tracks found in this playlist');
    expectingPlayback = false;
    return;
  }
  loadTrack(currentIndex + 1, true);
}

function onPlayerError(e) {
  if (expectingPlayback) skipBlockedTrack('error ' + e.data);
}

function onPlayerStateChange(e) {
  updatePlayButton();
  if (e.data === YT.PlayerState.PLAYING) {
    skipAttempts = 0;
  }
}

function updatePlayButton() {
  const btn = document.getElementById('playBtn');
  if (!player) return;
  const state = player.getPlayerState();
  const playing = state === YT.PlayerState.PLAYING;
  btn.textContent = playing ? '⏸' : '▶';
  document.getElementById('albumArt').classList.toggle('spinning', playing);
}

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

setInterval(() => {
  if (!isReady || !player.getDuration) return;
  const dur = player.getDuration();
  const cur = player.getCurrentTime();
  if (dur > 0) {
    document.getElementById('progressBar').style.width = `${(cur / dur) * 100}%`;
    document.getElementById('time').textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
  }

  if (!expectingPlayback) {
    stallTicks = 0;
    stallLastCur = -1;
    return;
  }

  if (cur > stallLastCur + 0.05) {
    stallTicks = 0;
    stallLastCur = cur;
  } else {
    stallTicks++;
    if (stallTicks >= STALL_LIMIT) {
      skipBlockedTrack('stalled/silent');
    }
  }
}, 500);

document.getElementById('playBtn').addEventListener('click', () => {
  if (!isReady) return;
  const state = player.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    expectingPlayback = false;
    player.pauseVideo();
  } else {
    expectingPlayback = true;
    skipAttempts = 0;
    stallTicks = 0;
    stallLastCur = -1;
    player.playVideo();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (!isReady) return;
  expectingPlayback = true;
  skipAttempts = 0;
  loadTrack(currentIndex + 1, true);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (!isReady) return;
  expectingPlayback = true;
  skipAttempts = 0;
  loadTrack(currentIndex - 1, true);
});

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('clockH').textContent = h;
  document.getElementById('clockM').textContent = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clockAmPm').textContent = ampm;
}
updateClock();
setInterval(updateClock, 1000);

document.getElementById('progress').addEventListener('click', (e) => {
  if (!isReady || !player.getDuration) return;
  const dur = player.getDuration();
  if (!(dur > 0)) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  player.seekTo(dur * ratio, true);
  stallTicks = 0;
  stallLastCur = -1;
});

function switchScene(scene) {
  if (scene === currentScene) return;
  currentScene = scene;
  currentIndex = 0;
  skipAttempts = 0;
  stallTicks = 0;
  stallLastCur = -1;

  document.getElementById('bgImage').src = SCENES[scene].bg;
  document.getElementById('bgImageBlur').src = SCENES[scene].bg;
  document.getElementById('ytmusicLink').href = SCENES[scene].playlistUrl;
  document.querySelectorAll('.scene-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.scene === scene);
  });

  if (!isReady) return;
  renderTrackInfo();
  const wasPlaying = expectingPlayback;
  if (wasPlaying) {
    player.loadVideoById(tracks()[currentIndex].id);
  } else {
    player.cueVideoById(tracks()[currentIndex].id);
  }
}

document.getElementById('sceneSalon').addEventListener('click', () => switchScene('salon'));
document.getElementById('sceneBus').addEventListener('click', () => switchScene('bus'));
