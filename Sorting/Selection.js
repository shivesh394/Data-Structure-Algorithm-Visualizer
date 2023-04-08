
var container = document.querySelector(".data-container");

function Generatebars(num = 20) {

	for (let i = 0; i < num; i += 1) {

		const value = Math.floor(Math.random() * 100) + 1;
		const bar = document.createElement("div");

		bar.classList.add("bar");

		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translate(${i * 30}px)`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar_id");
		barLabel.innerText = value;

		bar.appendChild(barLabel);
		container.appendChild(bar);
	}
	Generate_idx()
}

var count_container = document.getElementById("count");
function Generate_idx() {
	for (var i = 0; i < 20; i++) {

		var array_ele2 = document.createElement("div");

		array_ele2.classList.add("block2");

		array_ele2.style.height = `${20}px`;
		array_ele2.style.transform = `translate(${i * 30}px)`;

		var array_ele_label2 = document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = i;

		array_ele2.appendChild(array_ele_label2);
		count_container.appendChild(array_ele2);
	}
}

var container = document.querySelector(".data-container");
var i=0;
function generatebars(num = 20) {

	var value = document.getElementById("fname").value;
		if(value=="")
			return;
	const bar = document.createElement("div");

	bar.classList.add("bar");

	bar.style.height = `${value * 3}px`;
	bar.style.transform = `translate(${i * 30}px)`;

	const barLabel = document.createElement("label");
	barLabel.classList.add("bar_id");
	barLabel.innerText = value;

	bar.appendChild(barLabel);
	container.appendChild(bar);
	i++;
	generate_idx()
}

var count_container = document.getElementById("count");
var j=0
function generate_idx() {

	var array_ele2 = document.createElement("div");

	array_ele2.classList.add("block2");

	array_ele2.style.height = `${20}px`;
	array_ele2.style.transform = `translate(${j * 30}px)`;

	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = j;

	array_ele2.appendChild(array_ele_label2);
	count_container.appendChild(array_ele2);
	j++;
}

function Delete() {
	const array_ele = document.querySelectorAll(".bar");
	var array_ele2 = document.querySelectorAll(".block2");
	i--;
	j--;
	array_ele[i].remove();   
	array_ele2[i].remove();   
}

async function SelectionSort() {
	let bars = document.querySelectorAll(".bar");
	var delay = Math.abs(document.getElementById("myRange").value)*10;

	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {

		min_idx = i;
		var key =
			parseInt(bars[i].childNodes[0].innerHTML);

		bars[i].style.backgroundColor = "yellow";
		var barval = document.getElementById("ele")

		barval.innerHTML =`<h3>Selected element is : ${key}</h3>`;
		for (var j = i + 1; j < bars.length; j += 1) {


			bars[j].style.backgroundColor = "red";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			var val1 = parseInt(bars[j].childNodes[0].innerHTML);
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);


			if (val1 < val2) {
				if (min_idx !== i) {

					bars[min_idx].style.backgroundColor = " #6f459e";
				}
				min_idx = j;
			} else {

				bars[j].style.backgroundColor = " #6f459e";
			}
		}

		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);
		bars[min_idx].style.backgroundColor = " #6f459e";
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
}