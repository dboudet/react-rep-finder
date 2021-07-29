import {useState} from "react"
import firebase from "firebase/app"
import 'firebase/auth'
import {firebaseConfig} from "../config"
import { usingEndpoint } from "../constants/endpoint"

export default function SignUp({setUser}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)

    const createUser = () => {        
        const formValues = {
            email: email
        }

        fetch(`${usingEndpoint}/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
            .then(response => {
                setLoading(false)
                return response.json()
            })
            .then(json => {
                setLoading(false)
                console.log('json ---->' , json)
            })
            .catch(err => {
                setLoading(false)
                alert(err)
            })
    }

    const userSignUp = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log("Signing up...")

        if(!firebase.apps.length) {  // checks if already connected
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(response => {
                setUser(response.user)
                createUser() 
            })
            .catch(err => {
                alert(err.message)
                setLoading(false)
            })
    }
    return(
        <div className="user-form">
            <h2>Sign up below to find your representatives</h2>
            <form onSubmit={(event) => userSignUp(event)}>
                <label>Email:&nbsp;
                    <input 
                        name="email"
                        type="email"
                        size="40"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <label>Password:&nbsp;
                    <input 
                        name="password"
                        type="password"
                        size="40"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </label>
                <button
                className="main-button-green"
                type="submit"
                >
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>
        </div>
    )
}