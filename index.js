function calculate() {
  const height = document.getElementById("Height").value;
  const weight = document.getElementById("Weight").value;
  const output = document.getElementById("output");

  let bmi = weight / (height / 100) ** 2;
  bmi = bmi.toFixed(2);

  if (bmi > 0 && bmi <= 18.5) {
    output.innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Underweight</span>.';
    output.style.color = "gold";
  } else if (bmi > 18.5 && bmi <= 25) {
    output.innerHTML = "Your BMI is : <b>" + bmi + "</b><br>Your weight is <span>Normal (healthy weight)</span>.";
    output.style.color = "green";
  } else if (bmi > 25 && bmi <= 40) {
    output.innerHTML = "Your BMI is : <b>" + bmi + "</b><br>Your weight is <span>Overweight</span>.";
    output.style.color = "red";
  } else {
    output.innerHTML = "Please type valid numbers.";
  }
}

const isDisabled = () => {
    
  const height = document.getElementById("Height").value;
  const weight = document.getElementById("Weight").value;
  const clearBtn = document.getElementById("clearBtn");

   clearBtn.classList.add("active");

   
    if (height || weight) {

         clearBtn.disabled = false 
    
    } else {
        
        clearBtn.disabled = true;
    }
    
    
};


const clearBtn = document.getElementById('clearBtn')
function clear() {

    document.getElementById("Height").value = null;
    document.getElementById("Weight").value = null;
    
    clearBtn.classList.remove('active');
    document.getElementById("output").innerHTML = "";
}
 
clearBtn.addEventListener('click', clear);