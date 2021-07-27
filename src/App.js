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
import Signup from './components/Signup';

function App() {
  return (
    <Router>
        <Header />

        <div id="main">  
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <RepresentativeSearch />
            </Route>
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
