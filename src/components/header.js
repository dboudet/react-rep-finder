import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function Header({user,userProfile,setUser,setUserProfile}) {

    const logOut = (event) => {
        event.preventDefault()
        firebase.auth()
            .signOut()
            .then(() => {
                localStorage.removeItem('user')
                setUser(undefined)
                setUserProfile(undefined)
            })
            .catch(err => alert(err))
    }
    return(
        <header>
            <h1>Representative Finder</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {!user && 
                        <>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        </>
                    }
                    {user && userProfile &&
                        <>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/user-profile">User Profile</Link></li>
                        <li><a onClick={(event) => logOut(event)} href="#">Sign Out</a></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}