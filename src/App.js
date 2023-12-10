import { LeftComponent } from './components/left';
import { RightComponent } from './components/right';


function App() {
    return (<div>
        <div className='tw-grid tw-grid-cols-2'>
            <LeftComponent/>
            <RightComponent/>
        </div>
  </div>);
}

export default App;
