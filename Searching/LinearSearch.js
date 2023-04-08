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
		array_ele_label2.innerText = j;

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


async function LinearSearch() {
	var count=0;
	var delay = Math.abs(document.getElementById("myRange").value)*10;
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	var output2 = document.getElementById("text2");
	var num = document.getElementById("fname2").value;

	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#6b5b95";
	}

	output.innerText = "";

	var flag = 0;
	for (var i = 0; i < blocks.length; i += 1) {

		blocks[i].style.backgroundColor = "#FF4949";

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		var value = Number(blocks[i].childNodes[0].innerHTML);
		count++;
		if (value == num) {
			flag = 1;
			output.innerText = `Element Found at position ${i + 1}`;
			blocks[i].style.backgroundColor = "#13CE66";
			if(count==1){
				output2.innerText = `Time Complexity : O(1)`;
			}
			else if(count>1 && count<=Math.log2(blocks.length)){
				output2.innerText = `Time Complexity : O(logn)`;
			}
			else if(count>Math.log2(blocks.length) && count<=blocks.length){
				output2.innerText = `Time Complexity : O(n)`;
			}
			break;
		}
		else {
			blocks[i].style.backgroundColor = "#6b5b95";
		}
	}

	if (flag == 0) {
		output.innerText = "Element Not Found";
		output2.innerText = `Time Complexity : O(n)`;
	}
}