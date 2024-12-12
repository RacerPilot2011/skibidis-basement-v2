let gameButtons = document.querySelectorAll('.game-button');
var current_game = '';
const urlParams = new URLSearchParams(window.location.search);

function search_games() {
	let input = document.getElementById('search').value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName('game-button');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = 'none';
		} else {
			x[i].style.display = 'inline-block';
		}
	}
}
document.getElementById('poly-track').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/polytrack.png')";
document.getElementById('bulletz.io').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/bulletz.io.png')";
document.getElementById('ovo').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/ovo.png')";
document.getElementById('dadish').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/dadish.png')";
document.getElementById('dadish-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/dadish2.png')";
document.getElementById('dadish-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/dadish3.png')";
document.getElementById('dadish-3D').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/dadish3D.png')";
document.getElementById('super-liquid-soccer').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/super-liquid-soccer.png')";
document.getElementById('watermelon-game').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/watermelongame.png')";
document.getElementById('jump-only').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/jumponly.png')";
document.getElementById('drive-mad').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/drivemad.png')";
document.getElementById('bank-robbery').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/bankrobbery.png')";
document.getElementById('bank-robbery-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/bankrobbery2.png')";
document.getElementById('bank-robbery-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/bankrobbery3.png')";
document.getElementById('vex-1').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex1.png')";
document.getElementById('vex-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex2.png')";
document.getElementById('vex-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex3.png')";
document.getElementById('vex-4').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex4.png')";
document.getElementById('vex-5').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex5.png')";
document.getElementById('vex-6').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex6.png')";
document.getElementById('vex-7').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex7.png')";
document.getElementById('vex-8').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/vex8.png')";
document.getElementById('ks-2-teams').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/ks2teams.png')";
document.getElementById('hobo-1').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo.png')";
document.getElementById('hobo-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo2.png')";
document.getElementById('hobo-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo3.png')";
document.getElementById('hobo-4').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo4.png')";
document.getElementById('hobo-5').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo5.png')";
document.getElementById('hobo-6').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo6.png')";
document.getElementById('hobo-7').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/hobo7.png')";
document.getElementById('choppy-orc').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/choppyorc.png')";
document.getElementById('recoil').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/recoil.png')";
document.getElementById('tag').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/tag.png')";
document.getElementById('tag-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/tag2.png')";
document.getElementById('yohoho.io').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/yohohoio.png')";
document.getElementById('double-panda').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/doublepanda.png')";
document.getElementById('race-survival').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/racesurvival.png')";
document.getElementById('cookie-clicker').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/cookieclicker.png')";
document.getElementById('bitlife').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/bitlife.png')";
document.getElementById('slow-roads').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),url('./image/slowroad.png')";
for (let i = 0; i < gameButtons.length; i++) {
	gameButtons[i].addEventListener('click', function () {
		if (this.classList.contains('button1')) {
			console.log('polytrack');
			current_game = 'poly-track';
		} else if (this.classList.contains('button 1 ')) {
			current_game = ' poly-track ';
		} else if (this.classList.contains('button 2 ')) {
			current_game = ' bulletz.io ';
		} else if (this.classList.contains('button 3 ')) {
			current_game = ' ovo ';
		} else if (this.classList.contains('button 4 ')) {
			current_game = ' dadish ';
		} else if (this.classList.contains('button 5 ')) {
			current_game = ' dadish-2 ';
		} else if (this.classList.contains('button 6 ')) {
			current_game = ' dadish-3 ';
		} else if (this.classList.contains('button 7 ')) {
			current_game = ' dadish-3D ';
		} else if (this.classList.contains('button 8 ')) {
			current_game = ' super-liquid-soccer ';
		} else if (this.classList.contains('button 9 ')) {
			current_game = ' watermelon-game ';
		} else if (this.classList.contains('button 10 ')) {
			current_game = ' jump-only ';
		} else if (this.classList.contains('button 11 ')) {
			current_game = ' drive-mad ';
		} else if (this.classList.contains('button 12 ')) {
			current_game = ' bank-robbery ';
		} else if (this.classList.contains('button 13 ')) {
			current_game = ' bank-robbery-2 ';
		} else if (this.classList.contains('button 14 ')) {
			current_game = ' bank-robbery-3 ';
		} else if (this.classList.contains('button 15 ')) {
			current_game = ' vex-1 ';
		} else if (this.classList.contains('button 16 ')) {
			current_game = ' vex-2 ';
		} else if (this.classList.contains('button 17 ')) {
			current_game = ' vex-3 ';
		} else if (this.classList.contains('button 18 ')) {
			current_game = ' vex-4 ';
		} else if (this.classList.contains('button 19 ')) {
			current_game = ' vex-5 ';
		} else if (this.classList.contains('button 20 ')) {
			current_game = ' vex-6 ';
		} else if (this.classList.contains('button 21 ')) {
			current_game = ' vex-7 ';
		} else if (this.classList.contains('button 22 ')) {
			current_game = ' vex-8 ';
		} else if (this.classList.contains('button 23 ')) {
			current_game = ' ks-2-teams ';
		} else if (this.classList.contains('button 24 ')) {
			current_game = ' hobo-1 ';
		} else if (this.classList.contains('button 25 ')) {
			current_game = ' hobo-2 ';
		} else if (this.classList.contains('button 26 ')) {
			current_game = ' hobo-3 ';
		} else if (this.classList.contains('button 27 ')) {
			current_game = ' hobo-4 ';
		} else if (this.classList.contains('button 28 ')) {
			current_game = ' hobo-5 ';
		} else if (this.classList.contains('button 29 ')) {
			current_game = ' hobo-6 ';
		} else if (this.classList.contains('button 30 ')) {
			current_game = ' hobo-7 ';
		} else if (this.classList.contains('button 31 ')) {
			current_game = ' choppy-orc ';
		} else if (this.classList.contains('button 32 ')) {
			current_game = ' recoil ';
		} else if (this.classList.contains('button 33 ')) {
			current_game = ' tag ';
		} else if (this.classList.contains('button 34 ')) {
			current_game = ' tag-2 ';
		} else if (this.classList.contains('button 35 ')) {
			current_game = ' yohoho.io ';
		} else if (this.classList.contains('button 36 ')) {
			current_game = ' double-panda ';
		} else if (this.classList.contains('button 37 ')) {
			current_game = ' race-survival ';
		} else if (this.classList.contains('button 38 ')) {
			current_game = ' cookie-clicker ';
		} else if (this.classList.contains('button 39 ')) {
			current_game = ' bitlife ';
		} else if (this.classList.contains('button 40 ')) {
			current_game = ' slowroads '
		}
		var url = window.location.href.replace('games.html', 'play.html');
		var params = {
			game: current_game,
		};
		window.location.href =
			url +
			'?' +
			Object.keys(params)
				.map(function (key) {
					return key + '=' + encodeURIComponent(params[key]);
				})
				.join('&');
	});
}
// Define the URL and parameters
console.log();