const themeToggleBtn = document.getElementById("toggle-theme");

themeToggleBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark-mode");
});


function showAdminSection(){
  document.getElementById("admin-login").style.display = "block";
}



document.getElementById("admin-form").addEventListener('submit', function(e){

  e.preventDefault();
  
  const usernameJS = document.getElementById("username").value;
  const passwordJS = document.getElementById("password").value;
  
  const storedUsername = "raghvendra"; 
  const storedPassword = "sharma"; 
  
  
  if (usernameJS == storedUsername && passwordJS == storedPassword ){
    alert("Welcome Admin");
    
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-section").style.display = "block";  
    
    displayStoredUserResponses();
    //FUNCTION CALL TO DISPLAY ALL THE USER RESPONSES.
  
  }
  else{
    alert("Invalid Credentials, please try again!");
  }
   
});



document.getElementById("contact-form").addEventListener('submit', function(e){
   e.preventDefault();
  
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;
  
 
  const response = { nameValue, emailValue, messageValue, date: new Date().toISOString() };



const DummyDatabase = JSON.parse(localStorage.getItem('DummyDatabase')) || [ ];


DummyDatabase.push(response); 


localStorage.setItem("DummyDatabase", JSON.stringify(DummyDatabase));

alert('Thank you for your message, I will get in touch with you ASAP!');

this.reset();
  
});



function displayStoredUserResponses(){
 
  
  const responseContainer = document.getElementById("user-responses");
  const DummyDatabase = JSON.parse(localStorage.getItem('DummyDatabase')) || [ ];
  
  responseContainer.innerHTML = '';
  
  
 
  
  DummyDatabase.forEach(response=>{
    const responseElement = document.createElement('div');
    //this is not single quote, it is a backtick(found on the left of 1)
    responseElement.innerHTML = ` 
    <p> Name: ${response.nameValue} </p>
    <p> Email: ${response.emailValue} </p>
    <p> Message: ${response.messageValue} </p>
    <p> Date: ${response.date} </p>
    <hr>
    `
    responseContainer.append(responseElement);
  });
}
