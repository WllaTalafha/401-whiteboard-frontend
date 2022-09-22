import axios from "axios";
import base64 from 'base-64';
import Signup from './Signup';
import Signin from './Signin';
import { Navigate } from 'react-router-dom';
import cookies from "react-cookies";

function Log({ setlogged, logged }) {

    async function signup(e) {
        e.preventDefault();
        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        }
        await axios.post(`${process.env.REACT_APP_URL}/signup`, newUser).then(resolved => {
            console.log(resolved.data);
        }).catch(rejected => {
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
                Authorization: `Basic ${encodedData}`
            }
        }).then(resolved => {
            if (userInfo.username) {
                cookies.save("token", resolved.data.token);
                cookies.save("name", resolved.data.username);
                cookies.save("id", resolved.data.id);
                setlogged(true);
                console.log(resolved.data);
            }
        }).catch(rejected => {
            console.log(rejected.response.data);
        });
    }

    console.log(logged);
    return (
        <div className="logs">
            <div className="log">
                <h3>Login to your account</h3>
                <Signin signin={signin} />
                <h3>Create a new account</h3>
                <Signup signup={signup} />
            </div>
            {logged && <Navigate to='/app' />}
        </div>
    )
}
export default Log;