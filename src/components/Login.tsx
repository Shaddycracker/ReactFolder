import React from "react"
const Login=()=>{
   const [formState, setFormState]=React.useState({username:"", password:""})
    const handleSubmit=()=>{
        console.log("Submitted")
        console.log(formState);
    }
    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormState({...formState, [e.target.name]:e.target.value})
    }
    return(
        <div>
            <h1>Login</h1>
            <p>This is the login page</p>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name='username' onChange={handlechange}></input>
            <input type="password" placeholder="Password" name='password' onChange={handlechange}></input>
            <button type="submit" >Login</button>
            </form>
        </div>
    )

}

export default Login;