import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Not_Found from './Components/Not_found/Not_Found';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contest from './Components/Contest/Contest';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/services">
              <Services></Services>
          </Route>
          <Route path = "/about">
            <About></About>
          </Route>
          <Route path = "/contest">
             <Contest></Contest>
          </Route>
          <Route path = "*">
             <Not_Found></Not_Found>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
