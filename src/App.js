import { LeftComponent } from './components/left';
import { RightComponent } from './components/right';
import { BottomComponent } from './components/bottom';


function App() {
    return (<div>
        <div className='tw-grid tw-grid-cols-2'>
            <LeftComponent/>
            <RightComponent/>
        </div>
        <BottomComponent/>
  </div>);
}

export default App;
