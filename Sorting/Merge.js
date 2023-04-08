// var canvas, canvaswidth, canvasheight, ctrl;
// canvasElements();
// var arr = [], itmd = [], visited = []
// var len_of_arr = 40;

// for (var i = 0; i < len_of_arr; i++) {
// 	arr.push(Math.round(Math.random() * 250) )
// }



// for (var i = 0; i < len_of_arr; i++) {
// 	itmd.push(0)
// 	visited.push(0)
// }


// function mergeArray(start, end) {
// 	let mid = parseInt((start + end) >> 1);
// 	let start1 = start, start2 = mid + 1
// 	let end1 = mid, end2 = end
	
// 	// Initial index of merged subarray
// 	let index = start

// 	while (start1 <= end1 && start2 <= end2) {
// 		if (arr[start1] <= arr[start2]) {
// 			itmd[index] = arr[start1]
// 			index = index + 1
// 			start1 = start1 + 1;
// 		}
// 		else if(arr[start1] > arr[start2]) {
// 			itmd[index] = arr[start2]
// 			index = index + 1
// 			start2 = start2 + 1;
// 		}
// 	}

// 	// Copy the remaining elements of
// 	// arr[], if there are any
// 	while (start1 <= end1) {
// 		itmd[index] = arr[start1]
// 		index = index + 1
// 		start1 = start1 + 1;
// 	}

// 	while (start2 <= end2) {
// 		itmd[index] = arr[start2]
// 		index = index + 1
// 		start2 = start2 + 1;
// 	}

// 	index = start
// 	while (index <= end) {
// 		arr[index] = itmd[index];
// 		index++;
// 	}
// }


// function drawBars(start, end) {

// 	// Clear previous unsorted bars
// 	ctrl.clearRect(0, 0, 1000, 1500)

// 	// Styling of bars
// 	for (let i = 0; i < len_of_arr; i++) {

// 		// Changing styles of bars
// 		ctrl.fillStyle = "black"
// 		ctrl.shadowColor = "chocolate";

// 		ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
		
// 		if (visited[i]) {
// 			ctrl.fillStyle = "#006d13"
// 			ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
// 			ctrl.shadowOffsetX = 2
// 		}
// 	}

// 	for (let i = start; i <= end; i++) {
// 		ctrl.fillStyle = "orange"
// 		ctrl.fillRect(25 * i, 300 - arr[i], 18, arr[i])
// 		ctrl.fillStyle = "#cdff6c"
// 		ctrl.fillRect(25 * i,300, 18, arr[i])
// 		visited[i] = 1
// 	}
// }

// // Waiting interval between two bars
// function timeout(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }


// // Merge Sorting
// const mergeSort = async (start, end) => {
// 	if (start < end) {
// 		let mid = parseInt((start + end) >> 1)
// 		await mergeSort(start, mid)
// 		await mergeSort(mid + 1, end)
// 		await mergeArray(start, end)
// 		await drawBars(start, end)

// 		// Waiting time is 800ms
// 		await timeout(800)
// 	}
// }

// // canvasElements function for storing
// // width and height in canvas variable
// function canvasElements() {
// 	canvas = document.getElementById("Canvas")
// 	canvas.width = canvas.height = 1000
// 	canvaswidth = canvas.width
// 	canvasheight = canvas.height
// 	ctrl = canvas.getContext("2d")
// }

// // Asynchronous MergeSort function
// const performer = async () => {
// 	await mergeSort(0, len_of_arr - 1)
// 	await drawBars()

// 	// Code for change title1 text
// 	const title1_changer = document.querySelector(".title1")
// 	title1_changer.innerText = "Array is completely sorted"
// }
// performer()

var container = document.getElementById("array");
function generatearray() {
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

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  

async function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m = l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
}

generatearray();
generate_idx();