import '../App.css';
import cookies from "react-cookies";
import { Navigate } from 'react-router-dom';

function Header({logged,setlogged}) {

  function logout() {    
    console.log("insidelogout");
    cookies.remove("token");
    cookies.remove("name");
    setlogged(false);
  }
  return (
    <div className='header'>
      <h1>posts managment</h1>
      <button onClick={logout}>logout</button>
      {logged===false?<Navigate to='/'/>:console.log('fdhdf')}
    </div>
  )
}
export default Header;