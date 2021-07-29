import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import RepresentativeSearch from './components/RepresentativeSearch'
import Footer from './components/footer'
import Signup from './components/SignUp'
import SignIn from './components/SignIn'
import Homepage from './components/homepage'
import UserProfile from './components/UserProfile'

function App() {
  const [user,setUser] = useState(undefined)

  useEffect(() => {
    if(user !== undefined) {
      fetch(`https://react-rep-finder-api.web.app/users/${user?.email}`)
        .then(res => res.json())
        .then(json => console.log('user -->' , json))
        .catch(err => alert(err))
    }
  },[user])

  return (
    <Router>
        <Header setUser={setUser} user={user} />

        <div id="main">  
          <Switch>
            <Route exact path="/user-profile">
              <UserProfile user={user} />
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
