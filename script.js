
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const confirmpasswordEl = document.getElementById("confirm-password");


const inputElArray = [
    usernameEl,
    emailEl,
    mobileEl,
    passwordEl,
    confirmpasswordEl,

]; 
const checkrecquired = function(arr)  {
    for (const el of arr) {
    
        if (el.value === "") {
          const formcontrolEl = el.parentElement;
            formcontrolEl.classList.add("error");

        
        }
        else {
            const formcontrolEl = el.parentElement;
            formcontrolEl.classList.add("success");
        }
    }
};
const checklenght = function(el,min,max){
    
    
    if(el.value.length < min ){
        const formcontrolEl = el.parentElement;
        
        formcontrolEl.classList.add("error");
        const smallEl = formcontrolEl.querySelector('small')
        smallEl.innerText=`should have more than ${min} characters`
        
    
        
       
     }
    else  if (el.value.length > max)  {
        const formcontrolEl = el.parentElement;
        formcontrolEl.classList.add("error");
        const smallEl = formcontrolEl.querySelector('small')
        smallEl.innerText=`should have less then  ${max} characters`
    
     
     } 
};


formEl.addEventListener('submit',  (e)=> {
    e.preventDefault();
  checkrecquired(inputElArray);
  checklenght(usernameEl,3,10);
  checklenght(emailEl,5,20);
  checklenght(mobileEl,10,13);
  checklenght(passwordEl,8,16)
  checklenght(confirmpasswordEl,8,16)

   });