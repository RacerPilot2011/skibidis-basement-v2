let gameButtons = document.querySelectorAll(".game-button");
var current_game = "";
const urlParams = new URLSearchParams(window.location.search);

function search_games() {
	let input = document.getElementById("search").value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName("game-button");

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "inline-block";
		}
	}
}
document.getElementById("poly-track").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/3d1d22d4cd81d41445e663ac7429de9f')";
document.getElementById("dadish").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/04e900219d1c9055170cd4553a5245b3')";
document.getElementById("dadish-2").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/73c2d24cf76f4672a578268369f3e7ec')";
document.getElementById("dadish-3").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/efe936ac04bf60f6ea70dd651319e437')";
document.getElementById("bulletz.io").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fa9ec93d8e775a3fbda39a53d09f2201')";
document.getElementById("dadish-3D").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/7161a9aa7257283a8fba2dd96a2c2123')";
document.getElementById("super-liquid-soccer").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/bae20dd94106ee3472a5d9aab1cc1241')";
document.getElementById("watermelon-game").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/71cddcfef5dcc00e121af5b119c9e9e9')";
document.getElementById("drive-mad").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/52c6510d0290056871d16fa60454684a')";
document.getElementById("ovo").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('./image/0v0.png')";
document.getElementById("jump-only").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('./image/jumponly.png')";
document.getElementById("bank-robbery").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fe5c161c069511627e9bba74589c565b')";
document.getElementById("bank-robbery-2").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/534729c5671f9f21d0cff547b1acc963')";
document.getElementById("bank-robbery-3").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fb502f040072da13365603a1418737d7')";
document.getElementById("tag").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/014bad87a847c046b2b58e7a2e1a4427')";
document.getElementById("tag-2").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/a98c418a19c8c8df0aab83b0d6a70fd9')";
document.getElementById("vex-1").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/e4a22d77a0946c1c7e4adc8f80413bdc')";
document.getElementById("vex-2").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/f3d5d766ea74771dd89efb02ab293ec9')";
document.getElementById("vex-3").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/eb361202e8436c17a6d2d25293674d51')";
document.getElementById("vex-4").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/fc692ad52b8bc00f3f69a35557d672c5')";
document.getElementById("vex-5").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/2ea9c821005cde9436d827e7273a83d2')";
document.getElementById("vex-6").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/88f2373132117c048340729bc6651ae6')";
document.getElementById("vex-7").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/0bffb6d02f1ea19326278a7e8f2e6b33')";
document.getElementById("vex-8").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('./image/vex8.png')";
document.getElementById("ks-2-teams").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/45f26747c4de6b42f1e3177516cb76f7')";
document.getElementById("hobo-1").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/a1b8e7c56682e3ec6bbefe57e17b72c1')";
document.getElementById("hobo-2").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/1d7e27026b2c7ef2c644f7e687df129d')";
document.getElementById("hobo-3").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/4b1c7c3ede1da8d4ab02d9dfd53bbd1e')";
document.getElementById("hobo-4").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/b843a37653adc7bd3a39a53559efacaa')";
document.getElementById("hobo-5").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/999fe10ff3588a9ab133cefa34882e60')";
document.getElementById("hobo-6").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/f0c6d0c65c3e296665d4a5e6d3f2a7b0')";
document.getElementById("hobo-7").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('')";
document.getElementById("yohoho.io").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/d12540d8cb8d7c6ab43487554464308b')";
document.getElementById("choppy-orc").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('https://codehs.com/uploads/9bcccef00d0c27507dc16a2349de51aa')";
document.getElementById("recoil").style.backgroundImage =
	"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url('')";
for (let i = 0; i < gameButtons.length; i++) {
	gameButtons[i].addEventListener("click", function () {
		if (this.classList.contains("button1")) {
			console.log("polytrack");
			current_game = "poly-track";
		} else if (this.classList.contains("button2")) {
			current_game = "ovo";
		} else if (this.classList.contains("button3")) {
			current_game = "dadish";
		} else if (this.classList.contains("button4")) {
			current_game = "dadish-2";
		} else if (this.classList.contains("button5")) {
			current_game = "dadish-3";
		} else if (this.classList.contains("button6")) {
			current_game = "dadish-3D";
		} else if (this.classList.contains("button7")) {
			current_game = "super-liquid-soccer";
		} else if (this.classList.contains("button8")) {
			current_game = "watermelon-game";
		} else if (this.classList.contains("button9")) {
			current_game = "jump-only";
		} else if (this.classList.contains("button10")) {
			current_game = "drive-mad";
		} else if (this.classList.contains("button11")) {
			current_game = "bank-robbery";
		} else if (this.classList.contains("button12")) {
			current_game = "bank-robbery-2";
		} else if (this.classList.contains("button13")) {
			current_game = "bank-robbery-3";
		} else if (this.classList.contains("button14")) {
			current_game = "vex-1";
		} else if (this.classList.contains("button15")) {
			current_game = "vex-2";
		} else if (this.classList.contains("button16")) {
			current_game = "vex-3";
		} else if (this.classList.contains("button17")) {
			current_game = "vex-4";
		} else if (this.classList.contains("button18")) {
			current_game = "vex-5";
		} else if (this.classList.contains("button19")) {
			current_game = "vex-6";
		} else if (this.classList.contains("button20")) {
			current_game = "vex-7";
		} else if (this.classList.contains("button21")) {
			current_game = "vex-8";
		} else if (this.classList.contains("button22")) {
			current_game = "ks-2-teams";
		} else if (this.classList.contains("button23")) {
			current_game = "hobo-1";
		} else if (this.classList.contains("button24")) {
			current_game = "hobo-2";
		} else if (this.classList.contains("button25")) {
			current_game = "hobo-3";
		} else if (this.classList.contains("button26")) {
			current_game = "hobo-4";
		} else if (this.classList.contains("button27")) {
			current_game = "hobo-5";
		} else if (this.classList.contains("button28")) {
			current_game = "hobo-6";
		} else if (this.classList.contains("button29")) {
			current_game = "hobo-7";
		} else if (this.classList.contains("button30")) {
			current_game = "choppy-orc";
		} else if (this.classList.contains("button31")) {
			current_game = "recoil";
		} else if (this.classList.contains("button32")) {
			current_game = "tag";
		} else if (this.classList.contains("button33")) {
			current_game = "tag-2";
		} else if (this.classList.contains("button34")) {
			current_game = "yohoho.io";
		} else if (this.classList.contains("button35")) {
			current_game = "double-panda";
		} else if (this.classList.contains("button36")) {
			current_game = "race-survival";
		} else if (this.classList.contains("button37")) {
			current_game = "poly-track";
		} else if (this.classList.contains("button38")) {
			current_game = "poly-track";
		} else if (this.classList.contains("button39")) {
			current_game = "minecraft";
		}
		var url = window.location.href.replace("games.html", "play.html");
		var params = {
			game: current_game,
		};
		window.location.href =
			url +
			"?" +
			Object.keys(params)
				.map(function (key) {
					return key + "=" + encodeURIComponent(params[key]);
				})
				.join("&");
	});
}
// Define the URL and parameters

console.log();
