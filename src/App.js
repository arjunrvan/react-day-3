import Login from './containers/login';
import Dashboard from './containers/dashboard';
import CreateProduct from './containers/createProduct';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header';
import Details from './containers/dashboard/Details';

function App() {
  return (
    <Router className="App">
      <Header/>
      <Switch>
        
        <Route path="/dashboard/:id" component = {Details}/>
        <Route path="/dashboard" exact component = {Dashboard}/>
        <Route path='/create' component = {CreateProduct}/>
        <Route path="/" exact component = {Login}/>
        
      </Switch>
    </Router>
  );
}

export default App;
