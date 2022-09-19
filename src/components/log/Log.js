import axios from "axios";
import { useState } from "react";
import base64 from 'base-64';
import Signup from './Signup';
import Signin from './Signin';
import { Navigate } from 'react-router-dom';

function Log() {
    const [logged, setlogged] = useState(false);

    async function signup(e) {
        e.preventDefault();
        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        }
        await axios.post(`${process.env.REACT_APP_URL}/signup`, newUser).then(resolved =>{
            console.log(resolved.data);            
        }).catch(rejected =>{ 
            console.log(rejected.response.data);
        });
    }

    async function signin(e) {
        e.preventDefault();
        let userInfo = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        const encodedData = base64.encode(`${userInfo.username}:${userInfo.password}`);
        await axios.post(`${process.env.REACT_APP_URL}/signin`, {}, {
            headers: {
                Authorization:`Basic ${encodedData}`
            }
        }).then(resolved =>{
            if (userInfo.username){
            setlogged(true);
            console.log(resolved.data);
            }
        }).catch(rejected =>{ 
            console.log(rejected.response.data);
        });
    }    
    console.log(logged);
    return (
        <div className="logs">
            <div className="log">
            <h3>Login to your account</h3>
            <Signin signin={signin}/>
            <h3>Create a new account</h3>
            <Signup signup={signup}/>
            </div>
            {logged && <Navigate to='/app'/>}            
        </div>
    )
}
export default Log;