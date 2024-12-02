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
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/3d1d22d4cd81d41445e663ac7429de9f')";
document.getElementById('dadish').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/04e900219d1c9055170cd4553a5245b3')";
document.getElementById('dadish-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/73c2d24cf76f4672a578268369f3e7ec')";
document.getElementById('dadish-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/efe936ac04bf60f6ea70dd651319e437')";
document.getElementById('bulletz.io').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fa9ec93d8e775a3fbda39a53d09f2201')";
document.getElementById('dadish-3D').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/7161a9aa7257283a8fba2dd96a2c2123')";
document.getElementById('super-liquid-soccer').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/bae20dd94106ee3472a5d9aab1cc1241')";
document.getElementById('watermelon-game').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/71cddcfef5dcc00e121af5b119c9e9e9')";
document.getElementById('drive-mad').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/52c6510d0290056871d16fa60454684a')";
document.getElementById('ovo').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/dbf5adec6e43fea4d738a302b211ec4f')";
document.getElementById('jump-only').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/af4c6483f7075e3ed4b03033f1b17289')";
document.getElementById('bank-robbery').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fe5c161c069511627e9bba74589c565b')";
document.getElementById('bank-robbery-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/534729c5671f9f21d0cff547b1acc963')";
document.getElementById('bank-robbery-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fb502f040072da13365603a1418737d7')";
document.getElementById('tag').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/014bad87a847c046b2b58e7a2e1a4427')";
document.getElementById('tag-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/a98c418a19c8c8df0aab83b0d6a70fd9')";
document.getElementById('vex-1').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/e4a22d77a0946c1c7e4adc8f80413bdc')";
document.getElementById('vex-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/f3d5d766ea74771dd89efb02ab293ec9')";
document.getElementById('vex-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/eb361202e8436c17a6d2d25293674d51')";
document.getElementById('vex-4').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fc692ad52b8bc00f3f69a35557d672c5')";
document.getElementById('vex-5').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/2ea9c821005cde9436d827e7273a83d2')";
document.getElementById('vex-6').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/88f2373132117c048340729bc6651ae6')";
document.getElementById('vex-7').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/0bffb6d02f1ea19326278a7e8f2e6b33')";
document.getElementById('vex-8').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/8bf202cbeadd40d42155defbf6547dd5')";
document.getElementById('ks-2-teams').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/45f26747c4de6b42f1e3177516cb76f7')";
document.getElementById('hobo-1').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/a1b8e7c56682e3ec6bbefe57e17b72c1')";
document.getElementById('hobo-2').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/1d7e27026b2c7ef2c644f7e687df129d')";
document.getElementById('hobo-3').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/4b1c7c3ede1da8d4ab02d9dfd53bbd1e')";
document.getElementById('hobo-4').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/b843a37653adc7bd3a39a53559efacaa')";
document.getElementById('hobo-5').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/999fe10ff3588a9ab133cefa34882e60')";
document.getElementById('hobo-6').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/f0c6d0c65c3e296665d4a5e6d3f2a7b0')";
/* btw can you change the main file to index.html? its about.html for some reason.*/
document.getElementById('hobo-7').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('')";
document.getElementById('yohoho.io').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/d12540d8cb8d7c6ab43487554464308b')";
document.getElementById('choppy-orc').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/9bcccef00d0c27507dc16a2349de51aa')";
document.getElementById('recoil').style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('')";
for (let i = 0; i < gameButtons.length; i++) {
	gameButtons[i].addEventListener('click', function () {
		if (this.classList.contains('button1')) {
			console.log('polytrack');
			current_game = 'poly-track';
		} else if (this.classList.contains('button2')) {
			console.log('bulletz.io');
			current_game = 'bulletz.io';
		} else if (this.classList.contains('button4')) {
			console.log('');
			current_game = 'ovo';
		} else if (this.classList.contains('button5')) {
			console.log('');
			current_game = 'dadish';
		} else if (this.classList.contains('button6')) {
			console.log('');
			current_game = 'dadish-2';
		} else if (this.classList.contains('button7')) {
			console.log('');
			current_game = 'dadish-3';
		} else if (this.classList.contains('button8')) {
			console.log('');
			current_game = 'dadish-3d';
		} else if (this.classList.contains('button9')) {
			console.log('');
			current_game = 'super-liquid-soccer';
		} else if (this.classList.contains('button10')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button11')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button12')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button13')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button14')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button15')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button16')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button17')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button18')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button19')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button20')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button21')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button22')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button23')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button24')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button25')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button26')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button27')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button28')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button29')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button30')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button31')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button32')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button33')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button34')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button35')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button36')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button37')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button38')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button39')) {
			console.log('');
			current_game = '';
		} else if (this.classList.contains('button40')) {
			console.log('');
			current_game = '';
		}
		var url = window.location.href.replace('games.html', 'play.html');
		var params = {
			game: current_game
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