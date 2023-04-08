var i=0;
const container = document.getElementById("array");

function Push() {

	    var num = document.getElementById("fname").value;
        var output = document.getElementById("text");
        if(num=="")
			return;

        if(i<=5){
            var array_ele = document.createElement("div");
            array_ele.classList.add("block");

            var output = document.querySelectorAll(".output");
		    if(output.length!=0){
                output[0].remove();
                document.getElementById("btn2").disabled = false;
            }

            array_ele.style.height = "100px";
            array_ele.style.transform = `translateY(-${i * 105}px)`;


            var array_ele_label = document.createElement("label");
            array_ele_label.classList.add("block_id");
            array_ele_label.innerText = num;

            array_ele.appendChild(array_ele_label);
            container.appendChild(array_ele);

            array_ele.style.backgroundColor = "#FF4949";
            if(i>=1){
                var blocks = document.querySelectorAll(".block");
                blocks[i-1].style.backgroundColor = "#6b5b95";
            }
            i++;
        }
        else {
            var a = document.createElement("span");
            a.classList.add("output");
            a.innerText = `Overflow`;
            document.getElementById("btn").disabled = true;
            output.appendChild(a);
        }
}

function Pop() {
		const array_ele = document.querySelectorAll(".block");
        var output = document.getElementById("text");
        i--;
        console.log(i)
        if(i==-1){
            var a = document.createElement("span");
            a.classList.add("output");
            a.innerText = `Underflow`;
            document.getElementById("btn2").disabled = true;
            output.appendChild(a);
            i=0;
            return;
        }
        array_ele[i].remove(); 
        if(i>1)
            array_ele[i-1].style.backgroundColor = "#FF4949";  
        if(i==5){
            var output = document.querySelectorAll(".output");
            output[0].remove();
            document.getElementById("btn").disabled = false;
        }        
}