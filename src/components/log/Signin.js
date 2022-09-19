function Signin (props){
    function login (){
        props.signin();
        // props.open(()=>{props.history.push("/app")})
    }
    return(
        <form onSubmit={login}>
            <input type="text" placeholder="Enter a username" name="username"/>
            <input type="text" placeholder="Enter a password" name="password"/>
            <input type="submit" value="login"/>
        </form>
    )
    // props.signin && props.open(()=>{props.history.push("/app")})
}
export default Signin;