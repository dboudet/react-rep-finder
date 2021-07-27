import {useState} from "react"

function SignUp(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const userSignUp = (event) => {
        event.preventDefault()
        console.log("Signing up...")
    }
    return(
        <div className="user-form">
            <h2>Sign up below to find your representatives.</h2>
            <form onSubmit={(event) => userSignUp(event)}>
                <label>Email:&nbsp;
                    <input 
                        name="email"
                        type="email"
                        size="25"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <label>Password:&nbsp;
                    <input 
                        name="password"
                        type="password"
                        size="25"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </label>
                <button
                className="main-button-green"
                type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp