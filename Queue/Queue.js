var i=0;
var j=1;
const container = document.getElementById("array");

function Enqueue() {

	var num = document.getElementById("fname").value;
	var output = document.getElementById("text");
	if(num=="")
		return;

	if(i<=13 ){
		var array_ele = document.createElement("div");
		array_ele.classList.add("block");

		var output = document.querySelectorAll(".output");
		if(output.length!=0){
			output[0].remove();
			document.getElementById("btn2").disabled = false;
		}

		array_ele.style.height = "100px";
		array_ele.style.transform = `translate(${i * 105}px)`;


		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = num;

		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);

		array_ele.style.backgroundColor = "#FF4949";
		if(i>=1){
			var blocks = document.querySelectorAll(".block");
			blocks[i-j].style.backgroundColor = "#6b5b95";
			blocks[0].style.backgroundColor = "orange";
		}
		i++;
		console.log("i"+i)
	}
	else{
		var a = document.createElement("span");
		a.classList.add("output");
		a.innerText = `Overflow`;
		document.getElementById("btn").disabled = true;
		output.appendChild(a);
	}
}


function Dequeue() {
	const array_ele = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	if(i==0){
		var a = document.createElement("span");
		a.classList.add("output");
		a.innerText = `Underflow`;
		document.getElementById("btn2").disabled = true;
		output.appendChild(a);
		return
	}
	else if(j<=13  && j<i){
		array_ele[1].style.backgroundColor = "orange";
		array_ele[0].remove();   	
	}

	else if(j+1>i){
		console.log(i,j)
		array_ele[0].remove(); 
		document.getElementById("btn").disabled = false;
		i=0;
		j=1;
		return;
	}
	array_ele[0].remove();
	j++;  
	console.log("j"+j)
	if(j==14){
		var output = document.querySelectorAll(".output");
		output[0].remove();
	}  
}