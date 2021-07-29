import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import firebase from 'firebase'
import { firebaseConfig } from './config'
import './App.css'
import Header from './components/Header'
import RepresentativeSearch from './components/RepresentativeSearch'
import Footer from './components/Footer'
import Signup from './components/SignUp'
import SignIn from './components/SignIn'
import Homepage from './components/Homepage'
import UserProfile from './components/UserProfile'
import {usingEndpoint} from './constants/endpoint'

if(!firebase.apps.length){ // checks if already connected
  firebase.initializeApp(firebaseConfig)
}   

function App() {
  const [user,setUser] = useState(undefined)
  const [userProfile,setUserProfile] = useState(undefined)

  useEffect(() => {
    if(user !== undefined) {
      fetch(`${usingEndpoint}/users/${user?.email}`)
        .then(res => res.json())
        .then(json => { 
          console.log('user -->' , json)
          setUserProfile(json.data)
          localStorage.setItem('user', JSON.stringify(json.data))
        })
        .catch(err => alert(err))
    }
  },[user])

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem('user')))
  },[])
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(undefined)
    })
  })


  return (
    <Router>
        <Header user={user} userProfile={userProfile} setUser={setUser} setUserProfile={setUserProfile} />

        <div id="main">  
          <Switch>
            <Route exact path="/user-profile">
              <UserProfile user={user} userProfile={userProfile} setUserProfile={setUserProfile} />
            </Route>
            <Route exact path="/signin">
              <SignIn setUser={setUser} />
            </Route>
            <Route exact path="/signup">
              <Signup setUser={setUser} />
            </Route>
            <Route exact path="/search">
              <RepresentativeSearch user={user} />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
