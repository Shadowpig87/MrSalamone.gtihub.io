
const button = document.getElementById("button");
 let result;

button.onclick = function(){
    let input = document.getElementById("input").value;
    result = input;
    document.getElementById("p1").textContent = "";
    document.getElementById("p1").textContent = `Hꜵ Hꜵ Hꜵ Hꜵ Oui Oui Oui ${result}`;
    
}