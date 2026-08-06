import { Routes, Route } from 'react-router-dom';
import Tracker from './Tracker';
import AddListing from './AddListing.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Login />}/>
      <Route path ="/Login" element={<Login />}/>
      <Route path ="/Register" element={<Register />}/>
      <Route path="/Tracker" element={<Tracker />} />
      <Route path="/add" element={<AddListing />} />
    </Routes>
  );
}

export default App;