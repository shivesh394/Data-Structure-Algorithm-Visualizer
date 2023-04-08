var container = document.getElementById("array");

function generatearray() {

	var arr = [];

	for (var i = 0; i < 20; i++) {
		var val = Number(Math.ceil(Math.random() * 100));
		arr.push(val);
	}

	arr.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < 20; i++) {
		var value = arr[i];

		var array_ele = document.createElement("div");
		array_ele.classList.add("block");


		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;

		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

var count_container = document.getElementById("count");
function generate_idx() {
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



async function BinarySearch() {
	var delay = Math.abs(document.getElementById("myRange").value)*10;
	var count=0;
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	var output2 = document.getElementById("text2");
	var num = document.getElementById("fname").value;


	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#6b5b95";
	}

	output.innerText = "";

	var start = 0;
	var end = 19;
	var flag = 0;
	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		blocks[mid].style.backgroundColor = "#FF4949";

		var value = Number(blocks[mid].childNodes[0].innerHTML);

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		count++
		if (value == num) {
			output.innerText = `Element Found at position ${mid + 1}`;
			blocks[mid].style.backgroundColor = "#13CE66";
			if(count==1){
				output2.innerText = `Time Complexity : O(1)`;
			}
			else if(count>1 && count<=Math.ceil(Math.log2(blocks.length))){
				output2.innerText = `Time Complexity : O(logn)`;
			}
			flag = 1;
			break;
		}
		if (value > num) {
			end = mid - 1;
			blocks[mid].style.backgroundColor = "#6b5b95";
		} 
		else {
			start = mid + 1;
			blocks[mid].style.backgroundColor = "#6b5b95";
		}
	}
	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
}


generatearray();
generate_idx();