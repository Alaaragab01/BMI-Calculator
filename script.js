
document.getElementById("submit-button").addEventListener("click", function() {
    var weight = document.getElementById("weight-input").value
    var Height = document.getElementById("Height-input").value/100

    var BMI = weight/(Height*Height)



document.getElementById("BMI").innerHTML= BMI.toFixed(2);


if (BMI < 18) {
document.getElementById("BMI-category").innerHTML = "You are Under Weight"
}
else if (BMI >= 18 && BMI <24.9) {
    document.getElementById("BMI-category").innerHTML = "You are Healthy Weight"
} 
else if (BMI >= 25 && BMI <29.9) { 
    document.getElementById("BMI-category").innerHTML = "You are Overweight"
}
else if (BMI >= 30 && BMI < 34.9) { 
    document.getElementById("BMI-category").innerHTML = "You are Obesity (First Class)"
}
else if (BMI >= 35 && BMI < 39.9) { 
    document.getElementById("BMI-category").innerHTML = "You are Obesity (Second Class)"
}
else if (BMI >= 40) { 
    document.getElementById("BMI-category").innerHTML = "You are Extreme (Obesity third Class)"
}
else if (BMI = " ") { 
    document.getElementById("BMI-category").innerHTML = "Enter a Number"
}

})

