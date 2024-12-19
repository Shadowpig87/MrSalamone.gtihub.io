
const button = document.getElementById("button");
let result;

button.onclick = function(){
    const input = document.getElementById("input").value;
const input1 = document.getElementById("input2").value;
    result = input / input1 * 100;
    document.getElementById("p1").textContent = `${result}%`;
}













