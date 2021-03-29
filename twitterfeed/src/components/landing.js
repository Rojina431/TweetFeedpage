import Sidebar from './Sidebar';
import Feed from './feed';
import Trend from './trend';

export default function Landing(){
    return (
        //BEM
        <div className="app">
    
          {/*Sidebar */ }
          <Sidebar/>
    
          {/*Feed */ }
          <Feed/>
    
          {/*Trend */}
          <Trend/>
        </div>
      );
}