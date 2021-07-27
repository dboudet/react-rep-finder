import {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import {firebaseConfig} from '../config'

function SignIn({setUser}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const userSignIn = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log("Signing in...")

        if(!firebase.apps.length) {  // checks if already connected
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(response => {
                setLoading(false)
                setUser(response.user)
            })
            .catch(err => {
                setLoading(false)
                alert(err.message)
            })
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
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>

        </div>
    )
}

export default SignIn