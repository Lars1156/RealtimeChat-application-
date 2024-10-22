import { Routes, Route} from 'react-router-dom'
import CustomNavbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Routes>
        
           <Route path='/profile' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
