const container = document.querySelector(".data-container");

function generatebars(num = 20) {

	for (let i = 0; i < num; i += 1) {
		const value = Math.floor(Math.random() * 100) + 1;

		const bar = document.createElement("div");
		bar.classList.add("bar");

		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translateX(${i * 30}px)`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
		barLabel.innerHTML = value;

		bar.appendChild(barLabel);
		container.appendChild(bar);
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


async function ShellSort(delay = 100) {
	let bars = document.querySelectorAll(".bar");

	for (var i = 10; i > 0; i = Math.floor(i / 2)) {

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);

		for (var j = i; j < 20; j++) {
			var temp = parseInt(bars[j].childNodes[0].innerHTML);
			var k;
			var temp1 = bars[j].style.height;
			var temp2 = bars[j].childNodes[0].innerText;

			for (k = j;k >= i && parseInt(bars[k - i].childNodes[0].innerHTML) > temp;k -= i) {
				bars[k].style.height = bars[k - i].style.height;

				bars[k].childNodes[0].innerText = bars[k - i].childNodes[0].innerText;

				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 300)
				);
			}

			// Provide darkblue color to the jth bar
			bars[j].style.backgroundColor = "darkblue";

			// Provide darkblue color to the kth bar
			bars[k].style.backgroundColor = "darkblue";
			bars[k].style.height = temp1;
			bars[k].childNodes[0].innerText = temp2;

			// To pause the execution of code for
			// 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);

			// Provide skyblue color to the jth bar
			bars[j].style.backgroundColor = "rgb(0, 183, 255)";

			// Provide skyblue color to the kth bar
			bars[k].style.backgroundColor = "rgb(0, 183, 255)";

			// To pause the execution of code for
			// 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
		}
	}
	for (var x = 0; x < 20; x++) {
		bars[x].style.backgroundColor = "rgb(49, 226, 13)";
	}
}

generatebars();
generate_idx();