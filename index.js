const input = document.getElementById("input");

function appendtoDisplay(x) {
    input.value += x;

}
function clear() {
    input.value = "null";
}
function calculate() {
    try {
        input.value = eval(input.value)

    } catch (error) {
        input.value = "Error"


    }

}
let age = window.prompt("how old  are you?");
age = Number(age);
age += 1;
alert(age)
