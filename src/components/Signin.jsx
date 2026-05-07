import axios from 'axios';
import React, { useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../css/Signin.css'

const Signin = () => {

  // Define the two hooks for capturing/storing the users input.
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  // Declare the three additional hooks.
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below we have the useNavigate hook to redirect us to another page on successful login/signin
  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  // Below is the functions to handle the signin action.
  const handlesubmit = async (e) =>{
    // prevent the site from reloading.
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we authenticate your account")

    try{
      // Create a form data object/
      const formdata = new FormData()

      // Insert/append the email and the password on the formData created.
      formdata.append("email", email);
      formdata.append("password", password)

      // interact with the axios for the response.
      const response = await axios.post("https://victor.alwaysdata.net/api/signin", formdata);

      // set loading back to default.
      setLoading("");

      // Check whetherthe user exists as part of your response from the API.
      if(response.data.user){
        // If user is there definately the details entered during signin are correct.
        // console.log(response.data.user)
        // setSuccess("Login successful")

        // Storage user details in local storage.
        // localStorage.setItem("user", JSON.stringify(response.data.user));
        login(response.data.user);

        // if it is successful, let a person get redirected to another page.
        navigate("/")
      }
      else{
        // User is not found, that means the credentials entered on the form are incorrect.
        setError("Login Failed. Please try again")
      }

    }
    catch(error){
      // set loading back to default.
      setLoading("")

      // update the error hook with a message.
      setError("Oops, something went wrong. Try again.")

    }
  }


  return (
    <div className='signin-page'>
     <div className="col-md-6 card shadow p-4">
      <h1 className="text-primary">Sign In</h1>

      <h5 className="text-info">{loading}</h5>
      <h3 className="text-success">{success}</h3>
      <h4 className="text-danger">{error}</h4>

      <form onSubmit={handlesubmit}>
      <input type="email"
      placeholder='Enter the email address here...'
      className='form-control' 
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}/> <br />

      {/* {email} */}

      <input type="password" 
      placeholder='Enter the password here...'
      className='form-control'
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}   /> <br />

      {/* {password} */}

      <input type="submit" 
      value="Signin" 
      className='btn btn-primary'/> <br /> <br />

       Don't have an account? <Link to={'/signup'}>Register</Link>

      </form>
      
     </div>
     
    </div>
  )
}

export default Signin;
