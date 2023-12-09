import React from "react";

function Login() {
   
        function handleClick(e) {
          e.preventDefault();
          alert('You logged in successfully!!.');
        }
    

    return (
        
        <div class="container">
        <input type="text" name="name" placeholder="Enter Your Name"/><br/><br/>
        <input type="password" name="password" placeholder="Enter Valid Password"/><br/>
        <br/>
        
        <button onClick={handleClick} type="submit">Login</button>
          
        </div>
    );
}

export default Login;