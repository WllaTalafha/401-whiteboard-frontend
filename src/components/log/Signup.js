function Signup ({signup}){
        
    return(
        <form className="signup" onSubmit={signup}>
            <input type="text" placeholder="Enter a username" id="username"/>
            <input type="text" placeholder="Enter your email" id="email"/>
            <input type="text" placeholder="Enter a password" id="password"/>
            <input type="submit" value="create" id="submit"/>
        </form>
    )
}
export default Signup;