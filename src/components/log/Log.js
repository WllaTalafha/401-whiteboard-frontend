import axios from "axios";
import { useState } from "react";
import base64 from 'base-64';
import Signup from './Signup';
import Signin from './Signin';

function Log() {
    const [logged, setlogged] = useState(false);

    async function signup(e) {
        e.preventDefault();
        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        }
        await axios.post(`${process.env.REACT_APP_URL}/signup`, newUser)
    }

    async function signin(e) {
        e.preventDefault();
        const userInfo = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        const decodedUserInfo = base64.encode(`${userInfo.username}:${userInfo.password}`);
        await axios.post(`${process.env.REACT_APP_URL}/signup`, {}
            , { headers: { Authorization: `Basic ${decodedUserInfo}` } })
            .then(resolved => {
                console.log(resolved.data);
                setlogged(true)
            })
            .catch(rejected => { console.log(rejected) });
    }
    return (
        <>
            <Signup signup={signup} />
            <Signin signin={signin} />
        </>
    )
}
export default Log;