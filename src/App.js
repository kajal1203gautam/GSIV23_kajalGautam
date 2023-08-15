import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';


function App() {
  return (
    <>
      <Routes>
        <Route extact path='/' element={<Home />} />
        <Route extact path='/details/:id' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
