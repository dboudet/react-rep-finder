import {useState} from 'react'

function SignIn() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const userSignIn = (event) => {
        event.preventDefault()
        console.log("Signing in...")
    }
    return(
        <div className="user-form">
            <h2>Existing users: please log in below.</h2>
            <form onSubmit={(event) => userSignIn(event)}>
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
                    Sign In
                </button>
            </form>

        </div>
    )
}

export default SignIn