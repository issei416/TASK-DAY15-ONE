let number = document.querySelectorAll(".number");
let input_field = document.querySelector("#input");
let output_field = document.querySelector("#result");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let del = document.querySelector("#del");

input_field.addEventListener('keydown',(e) => {
    if(Number.isNaN(Number(e.key))){
        e.preventDefault();
        window.alert("Only numbers are allowed")
        return;
    }
})

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

equal.addEventListener('click',(e)=>{
    let regex =  /^(\d+(\.\d+)?(\s*[-+*/^%]\s*\d+(\.\d+)?)*)(\s*[-+*/^%]\s*)?$/;
    console.log(regex.test(input_field.value));

    if (regex.test(input_field.value)) {
        input_field.value = input_field.value.replace("^", "**");
        console.log(input_field.value);
        let inexp = input_field.value;
        let result = new Function(`return (${inexp})`)();
        output_field.value = result;
    }
    else{
        e.preventDefault();
        window.alert("Enter valid expression");
    }
})