import React,{useState} from 'react'
import "./Form.css"
import logo from "../Assets/intsa.jpg"
const Form = () => {

   const[user, setUser] = useState({username:"",email:"",mob:"",password:"",confirmPassword:"" });

   

   const handleChange = (e) =>{

       setUser({...user,[e.target.name] :e.target.value })


    };

    const [error, setError] = useState({})
    const [flag, setFlag] = useState(false)
const handleSubmit = (e)=>{
    e.preventDefault();
    const newError = {}
    if(user.username === ""){
     //setError({username:"please enter username"})
         newError.username = "please enter username"
    }
    else if(user.username.length <=2|| user.username.length >10){
        newError.username = "usernmae between 2 and 10"
    }

    if(user.email === ""){
        newError.email = "please enter email";
    }
    else if(user.email.indexOf("@")<=0){
        newError.email = "'@' invaild position"
    }
    else if((user.email.charAt(user.email.length - 4)!==".") &&(user.email.charAt(user.email.length -3)!==".")){

        newError.email = "'.s' invaild position"

    }
    
    if(user.mob === ""){
        // setError({mob: "Please enter mobile num"})
        newError.mob = "please enter mobile num"
       

    }
    else if(isNaN(user.mob)){
        newError.email = "please enter digit only"

    }
    if(user.password === ""){
        // setError({password: "Please enter password"})
        newError.password = "please enter password"

    }
    else if(user.password.length <=5|| user.password.length >15){
        newError.password = "password between 2 and 10"
    }
    if(user.confirmPassword === ""){
        // setError({confirmPassword: "Please enter confirmPassword"})
        newError.confirmPassword = "Password enter confirmPassword"

    }
    else if(user.password!==user.confirmPassword){
        newError.password = "password does not match"
    }
    else{

          setFlag(true)
    }
    setError(newError)
};

  return (<>   
   <h1>{flag?<p>{user.username}u have registered successfully</p>:""}</h1>
    <div className='form-container'>
        <div className='insta-logo'>
<img src={logo} alt='' style={{width:"200px"}}/>
        </div>
        <form className='form' onSubmit={handleSubmit}>
<div className='form-group'>
    <input type='text' placeholder="username" onChange={handleChange} value={user.username} name="username" autoComplete='off'/>
   <span style={{color:"red"}}>{error.username}</span>
</div>
<div className='form-group'>
    <input type='text' placeholder="Email"  onChange={handleChange}  value={user.email} name="email" autoComplete='off'/>
    <span style={{color:"red"}}>{error.email}</span>

</div><div className='form-group'>
    <input type='text' placeholder="Mobile Number"  onChange={handleChange}  value={user.mob} name="mob" autoComplete='off'/>
    <span style={{color:"red"}}>{error.mob}</span>

</div><div className='form-group'>
    <input type='Password' placeholder="Password"   onChange={handleChange} value={user.password} name="password" autoComplete='off'/>
    <span style={{color:"red"}}>{error.password}</span>

</div><div className='form-group'>
    <input type='Password' placeholder="Confirm Password"  onChange={handleChange}  value={user.confirmPassword} name="confirmPassword" autoComplete='off'/>
    <span style={{color:"red"}}>{error.confirmPassword}</span>

</div>
<button type='submit'>Sign Up</button>




        </form>


    </div>
    </>

  )
}

export default Form