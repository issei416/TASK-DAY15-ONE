let number = document.querySelectorAll(".number");
let input_field = document.querySelector("#input");
let output_field = document.querySelector("#result");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let del = document.querySelector("#del");

number.forEach(btn => btn.addEventListener('click',() => {
    input_field.value += btn.value;
}));


clear.addEventListener('click',()=>{
    input_field.value = "";
    output_field.value = "";
})

del.addEventListener('click',() => {
    let curr_input_field = document.querySelector("#input");
    input_field.value = curr_input_field.value.substring(0,curr_input_field.value.length-1);
})

equal.addEventListener('click',()=>{
    let inexp = input_field.value;
    let result = new Function(`return (${inexp})`)();
    output_field.value = result;
})