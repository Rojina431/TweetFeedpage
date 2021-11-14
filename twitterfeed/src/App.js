import './App.css';
import Landing from './components/landing';

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

