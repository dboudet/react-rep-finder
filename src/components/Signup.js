import {useState} from 'react'

function Signup(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div id="signup-form">
            <h2>Sign up to find your representatives</h2>
            <form>
                <label for="signup">Email:&nbsp;
                    <input 
                        name="email"
                        type="email"
                        size="25"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <label for="signup">Password:&nbsp;
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
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup