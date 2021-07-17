const submitBtn = document.querySelector("#btn");
const userInput = document.querySelector("#USERINPUT");
const result = document.querySelector("#userinfeedback");

submitBtn.addEventListener("click", ()=>{
  if(userInput.value.trim() === ""){
    result.innerHTML = "You Must Fill Input Box !!!"
  }else if(userInput.value !== "12345"){
    result.innerHTML = "Password Incorrect"
  }else{
    result.innerHTML = ""
  }
});

const icon = document.querySelector("#inputUserlasticon");

icon.addEventListener("click",()=>{
  icon.querySelector("i").classList.toggle("fa-eye-slash");
  // userInput.setAttribute("type","text");
  if(userInput.getAttribute("type") === "password"){
    userInput.setAttribute("type","text")
  }else{
    userInput.setAttribute("type","password")
  }
});