// const container = document.querySelector(".data-container");

// function generatebars(num = 20) {

// 	for (let i = 0; i < num; i += 1) {
// 		const value = Math.floor(Math.random() * 100) + 1;

// 		const bar = document.createElement("div");

// 		bar.classList.add("bar");

// 		bar.style.height = `${value * 3}px`;
// 		bar.style.transform = `translateX(${i * 30}px)`;


// 		const barLabel = document.createElement("label");
// 		barLabel.classList.add("bar__id");
// 		barLabel.innerHTML = value;

// 		bar.appendChild(barLabel);
// 		container.appendChild(bar);
// 	}
// }

// var count_container = document.getElementById("count");
// function generate_idx() {
// 	for (var i = 0; i < 20; i++) {

// 		var array_ele2 = document.createElement("div");

// 		array_ele2.classList.add("block2");

// 		array_ele2.style.height = `${20}px`;
// 		array_ele2.style.transform = `translate(${i * 30}px)`;

// 		var array_ele_label2 = document.createElement("label");
// 		array_ele_label2.classList.add("block_id3");
// 		array_ele_label2.innerText = i;

// 		array_ele2.appendChild(array_ele_label2);
// 		count_container.appendChild(array_ele2);
// 	}
// }

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


async function InsertionSort() {
	let bars = document.querySelectorAll(".bar");
	var delay = Math.abs(document.getElementById("myRange").value)*10;
	console.log(delay)
	bars[0].style.backgroundColor = " rgb(49, 226, 13)";
	for (var i = 1; i < bars.length; i += 1) {

		var j = i - 1;

		var key =
			parseInt(bars[i].childNodes[0].innerHTML);

		var height = bars[i].style.height;

		var barval = document.getElementById("ele")

		barval.innerHTML =`<h3>Selected element is : ${key}</h3>`;

		bars[i].style.backgroundColor = "#FF4949";

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

			bars[j].style.backgroundColor = "#FF4949";

			bars[j + 1].style.height = bars[j].style.height;
			bars[j + 1].childNodes[0].innerText =
				bars[j].childNodes[0].innerText;

			j = j - 1;

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				},delay)
			);

			for (var k = i; k >= 0; k--) {
				bars[k].style.backgroundColor = " rgb(49, 226, 13)";
			}
		}

		bars[j + 1].style.height = height;
		bars[j + 1].childNodes[0].innerHTML = key;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);


		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}

	barval.innerHTML = "<h3>Sorted!!!</h3>";
}

// generatebars();
// generate_idx();