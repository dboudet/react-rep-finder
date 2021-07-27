import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import RepresentativeSearch from './components/RepresentativeSearch';
import Footer from './components/footer'
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import Homepage from './components/homepage';

function App() {
  const [user,setUser] = useState("")
  return (
    <Router>
        <Header />

        <div id="main">  
          <Switch>
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
