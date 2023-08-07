const formEl = document.querySelector(".login-form");
const input = document.querySelectorAll('input')

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
       alert("Please fill in all the fields!");
       
      } else{
        console.log(`Login: ${email.value}, Password: ${password.value}`);
      }
    event.currentTarget.reset();
}
