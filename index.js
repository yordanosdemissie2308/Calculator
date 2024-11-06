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
