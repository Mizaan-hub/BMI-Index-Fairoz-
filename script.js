var container = document.getElementById("container");
// var age = document.getElementById("age").value;
// var height = document.getElementById("height").value;
// var weight = document.getElementById("weight").value;
var result = document.getElementById("result");
var display = document.getElementById("display");
var comment = document.getElementById("comment");
var submit = document.getElementById("submit");
var input = document.getElementsByTagName("input")
var bmi;

function getBMI(){

    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (age === "" && height === "" && weight === "") {
        alert("Please enter all values");
        return;
    }

    if (age < 10 || age > 80) {
        alert("Age should be between 10 and 80");
        return;
    }

    if (height < 50 || height > 250) {
        alert("Height should be between 50cm and 250cm");
        return;
    }

    if (weight < 20 || weight > 250) {
        alert("Weight should be between 20kg and 250kg");
        return;
    }


    bmi = weight / (height/100*height/100);
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