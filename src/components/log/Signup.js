function Signup ({signup}){
        
    return(
        <form onSubmit={signup}>
            <input type="text" placeholder="Enter a username" name="username"/>
            <input type="text" placeholder="Enter your email" name="email"/>
            <input type="text" placeholder="Enter a password" name="password"/>
            <input type="submit" value="create"/>
        </form>
    )
}
export default Signup;