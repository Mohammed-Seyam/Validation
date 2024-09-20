const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const myBtn = document.querySelector("#submit");

myBtn.onclick = function () {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    errors(username, "username requierd");
  }else{
    sucess(username);
  }

  if (passwordValue === "") {
    errors(password, "Password requierd");
  } else if (passwordValue.length <= 8) {
    errors(password, "Password must be more then 8 characters");
  }else{
    sucess(password);
  }
  
  if (password2Value === "") {
    errors(password2, "Pleas confirm password");
  } else if (password2Value !== passwordValue) {
    errors(password2, "Incorrect password");
  } else {
    sucess(password2);
  }

};

const errors = (element, message) => {

    const inputControl = element.parentElement
    
    errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    
    element.classList.add("err");
    element.classList.remove("suc");
    console.dir(inputControl);
    
}

const sucess = (element) => {
    const inputControl = element.parentElement

    errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    element.classList.remove('err')
    element.classList.add('suc')
    

    

}



