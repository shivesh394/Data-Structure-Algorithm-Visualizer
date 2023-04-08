var container = document.getElementById("array");

function GenerateArray() {
	for (var i = 0; i < 20; i++) {

		var value = Math.ceil(Math.random() * 100);
		var array_ele = document.createElement("div");

		array_ele.classList.add("block");

		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;


		const array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

	
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
	Generate_idx();
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

var container = document.getElementById("array");
var i=0;

function generatearray() {

		var value = document.getElementById("fname").value;
		if(value=="")
			return;
		var array_ele = document.createElement("div");

		array_ele.classList.add("block");

		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;


		const array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

	
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
		i++;
		generate_idx();

}


var count_container = document.getElementById("count");
var j=0;
function generate_idx() {
		var array_ele2 = document.createElement("div");
		array_ele2.classList.add("block2");

		array_ele2.style.height = `${20}px`;
		array_ele2.style.transform = `translate(${j * 30}px)`;

		var array_ele_label2 = document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = i;

		array_ele2.appendChild(array_ele_label2);
		count_container.appendChild(array_ele2);
		j++;
}

function Delete() {
	const array_ele = document.querySelectorAll(".block");
	var array_ele2 = document.querySelectorAll(".block2");
	i--;
	j--;
	array_ele[i].remove();   
	array_ele2[i].remove();   
}


function swap(el1, el2) {
	var delay = (document.getElementById("myRange").value)*10;
	return new Promise((resolve) => {
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, delay);
		});
	});
}


async function BubbleSort() {
	var blocks = document.querySelectorAll(".block");
	var delay = Math.abs(document.getElementById("myRange").value)*10;


	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}
		blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
	}
}