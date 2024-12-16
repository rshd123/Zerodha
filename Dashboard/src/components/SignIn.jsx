import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SignIn({onLogin}){
    const navigate = useNavigate();

    let [userName, setUsername] = useState("");
    let [pwd,setPwd] = useState("");

    const handleSignInClick = ()=> {
        axios
            .post("http://localhost:3000/login",{
                username:userName,
                password: pwd
            })
            .then((res)=>{
                if(res.data.success){
                    navigate("/");
                    onLogin();
                }else{
                    alert("Invalid Username/Password ");
                }
            })
            .catch((err)=>{
                alert(err);    
            })
    }
    return (
        <fieldset className="SignIn">
            <legend>Enter Username and Password</legend>
            <div >
                <input 
                    type="text" 
                    required 
                    id="signinInputField" 
                    placeholder="Enter Username"
                    value = {userName}
                    onChange={(e)=>setUsername(e.target.value)}
                    name="username"
                />
            </div>
            <div>
                <input 
                    type="password" 
                    required  
                    placeholder="Enter Password"
                    onChange={(e)=>setPwd(e.target.value)}
                    value={pwd}
                    name="password"
                />
            </div>
            <Button variant='contained' color='primary' onClick={handleSignInClick}>
                Log In
            </Button>
            <div>
                <p><i>Dummy Credentials: </i></p>
                <p><b>Username:</b> User 1</p>
                <p><b>Password:</b> 1234</p>
            </div>
        </fieldset>
    );
}