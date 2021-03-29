import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Landing from './components/landing';
import Single from './components/single';

function App() {
  return (
    //BEM
    <div className="app">
     {/*<Router>
       <Switch>
         <Route path="/trend/:id"><Single/></Route>
         <Route path="/"><Landing/></Route>
       </Switch>
     </Router>*/}
     <Landing/>
     
    </div>
  );
}

export default App;

