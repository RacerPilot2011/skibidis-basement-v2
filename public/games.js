const gameButtons = document.querySelectorAll('.game-button');
const gameBackgrounds = {
  'poly-track': './image/polytrack.png',
  'bulletz.io': './image/bulletz.io.png',
  'ovo': './image/ovo.png',
  'dadish': './image/dadish.png',
  'dadish-2': './image/dadish2.png',
  'dadish-3': './image/dadish3.png',
  'dadish-3D': './image/dadish3D.png',
  'super-liquid-soccer': './image/super-liquid-soccer.png',
  'watermelon-game': './image/watermelongame.png',
  'jump-only': './image/jumponly.png',
  'drive-mad': './image/drivemad.png',
  'bank-robbery': './image/bankrobbery.png',
  'bank-robbery-2': './image/bankrobbery2.png',
  'bank-robbery-3': './image/bankrobbery3.png',
  'vex-1': './image/vex1.png',
  'vex-2': './image/vex2.png',
  'vex-3': './image/vex3.png',
  'vex-4': './image/vex4.png',
  'vex-5': './image/vex5.png',
  'vex-6': './image/vex6.png',
  'vex-7': './image/vex7.png',
  'vex-8': './image/vex8.png',
  'ks-2-teams': './image/ks2teams.png',
  'hobo-1': './image/hobo.png',
  'hobo-2': './image/hobo2.png',
  'hobo-3': './image/hobo3.png',
  'hobo-4': './image/hobo4.png',
  'hobo-5': './image/hobo5.png',
  'hobo-6': './image/hobo6.png',
  'hobo-7': './image/hobo7.png',
  'choppy-orc': './image/choppyorc.png',
  'recoil': './image/recoil.png',
  'tag': './image/tag.png',
  'tag-2': './image/tag2.png',
  'yohoho.io': './image/yohohoio.png',
  'double-panda': './image/doublepanda.png',
  'race-survival': './image/racesurvival.png',
  'cookie-clicker': './image/cookieclicker.png',
  'bitlife': './image/bitlife.png',
  'slowroads': './image/slowroads.png'
};

// Set background images for each game button
Object.entries(gameBackgrounds).forEach(([game, imageUrl]) => {
  const button = document.getElementById(game);
  if (button) {
    button.style.backgroundImage = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('${imageUrl}')`;
  }
});

let current_game = '';

// Add event listener to each button
gameButtons.forEach((button, index) => {
  const gameKey = Object.keys(gameBackgrounds)[index];
  button.addEventListener('click', () => {
    current_game = gameKey;
    const url = window.location.href.replace('games.html', 'play.html');
    const params = new URLSearchParams({ game: current_game });

    // Redirect to the play page with the game parameter
    window.location.href = `${url}?${params.toString()}`;
  });
});

// Search function
function search_games() {
  const input = document.getElementById('search').value.toLowerCase();
  const buttons = document.querySelectorAll('.game-button');
  
  buttons.forEach(button => {
    button.style.display = button.innerHTML.toLowerCase().includes(input) ? 'inline-block' : 'none';
  });
}
