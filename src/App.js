
import './App.css';
import {NavBarr} from './components/NavBar.jsx'

function App() {
  return (
    <div className="flex">
      <div className='basis-[12%] h-[100vh] border'>
        <NavBarr></NavBarr>
      </div>
      <div className='basis-[88%] border'> LADO 2</div>
    </div>
  );
}

export default App;