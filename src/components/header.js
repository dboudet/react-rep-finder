import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import {user} from 'react'

function Header({setUser}) {

    const logOut = (event) => {
        event.preventDefault()
        firebase.auth()
            .signOut()
            .then(() => setUser(undefined))
            .catch(err => alert(err))
    }
    return(
        <header>
            <h1>Representative Finder</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li></li>
                    <li><Link to="/search">Search</Link></li>
                    {!user && <li><Link to="/signin">Sign In</Link></li>}
                    <li><a onClick={(event) => logOut(event)} href="#">Sign Out</a></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/user-profile">User Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header