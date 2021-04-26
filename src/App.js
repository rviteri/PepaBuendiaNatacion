import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Contactame from './pages/Contactame'
import Inscripcion from './pages/Inscripcion'
import './App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cursos" exact component={Cursos}></Route>
          <Route path="/contactame" exact component={Contactame}></Route>
          <Route path="/inscripcion" exact component={Inscripcion}></Route>
      </Switch>
    </Router>
  );
}

export default App;
