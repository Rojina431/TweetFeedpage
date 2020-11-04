import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/feed';
function App() {
  return (
    //BEM
    <div className="app">

      {/*Sidebar */ }
      <Sidebar/>

      {/*Feed */ }
      <Feed/>

    </div>
  );
}

export default App;
