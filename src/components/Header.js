import '../App.css';
import cookies from "react-cookies";
import { Navigate } from 'react-router-dom';

function Header({logged,setlogged}) {
  const username =cookies.load("name");
  function logout() {
    cookies.remove("token");
    cookies.remove("name");
    cookies.remove("id");
    setlogged(false);
  }
  return (
    <div className='header'>
      <h1>posts managment</h1>
      <h3 id="welcome">welcome {username}</h3>
      <button onClick={logout} id='logout'>logout</button>
      {logged===false?<Navigate to='/'/>:console.log('loggedin')}
    </div>
  )
}
export default Header;