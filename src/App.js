import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Clases from './pages/Clases'
import Contactame from './pages/Contactame'
import Inscripcion from './pages/Inscripcion'
import Nosotros from './pages/Nosotros'
import './App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/clases" exact component={Clases}></Route>
          <Route path="/contactanos" exact component={Contactame}></Route>
          <Route path="/inscripcion" exact component={Inscripcion}></Route>
          <Route path="/nosotros" exact component={Nosotros}></Route>
      </Switch>
    </Router>
  );
}

export default App;
