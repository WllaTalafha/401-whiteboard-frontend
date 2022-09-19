function Signin({signin}) {

    return (        
        <form className="signin" onSubmit={signin}>
            <input type="text" placeholder="Enter your username" id="username" />
            <input type="text" placeholder="Enter your password" id="password" />
            <input type="submit" value="login" id="submit" />
        </form>
    )
}
export default Signin;