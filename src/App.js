import './App.css';
import NavBar from './components/NabBar';
import RemoveBackground from './components/RemoveBackground';


function App() {
  return (
   <div className='min-h-screen w-screen bg-black py-3'>
    <NavBar/>
    <RemoveBackground/>
   </div>
  );
}

export default App;
