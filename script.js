var container = document.getElementById("container");
var age = document.getElementById("age").value;
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var result = document.getElementById("result");
var display = document.getElementById("display");
var comment = document.getElementById("comment");
var submit = document.getElementById("submit");
var input = document.getElementsByTagName("input")
var bmi;

function getBMI(){
    bmi = weight.value / (height.value/100*height.value/100);
    bmi = bmi.toFixed(1);
}

function changeVisuals(){
    display.innerHTML = "YOUR RESULT";
    result.innerHTML = bmi;
    result.style.fontSize = "3rem";

    if (bmi<=18.5) {
        container.style.backgroundColor = "#7ea1dc";
        container.style.color = "var(--light)";
        comment.innerHTML = "TIME FOR SOME HEALTHY SNACKS";
        submit.style.backgroundColor = "#cf552d";
    }
    else if(bmi > 18.5 && bmi <24.9){
        container.style.backgroundColor = "#92ea8f";
        container.style.color = "var(--dark)";
        submit.style.backgroundColor = "#bf6b6b";
        comment.innerHTML = "YOU'RE IN THE HEALTHY RANGE";
    }
    else if(bmi >= 25 && bmi < 29.9){
        container.style.backgroundColor = "#ffd47b";
        container.style.color = "var(--dark)";
        submit.style.backgroundColor = "#bf6b6b"
        comment.innerHTML = "DECENT HEALTH, GOOD STRETCHING IS ENOUGH";
    }
    else if(bmi >= 30){
        container.style.backgroundColor = "#ff5f5f";
        container.style.color = "var(--light)";
        submit.style.backgroundColor = "#c233e6";
        comment.innerHTML = "IT's TIME FOR SOME DUMB-BELLS AND DEAD-LIFTS"
    }
    else{
        comment.innerHTML = "SOMETHING WENT WRONG."
    }
}

function changeMessage(){

}
submit.addEventListener('click',() =>{
    
    getBMI();
    changeVisuals();
    if(age < 16 && age >60){
        comment.innerHTML = "AT THIS AGE, YOU SHOULDN'T BE CONCERN ABOUT YOUR BMI, BMI FAILS TO JUDGE. AND YOU ALREADY ARE IN GOOD SHAPE.";
    }
})