import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import Home from './components/Home/Home';
import Favorite from './components/FavList /FavList';
 import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    
    <Navbar/>
      <Routes>
     
          <Route path='/' exact  element={<Home/>} />
          <Route path='/getMovies' exact element={<Favorite/>} />

      </Routes>
    </div>
  );
}

export default App;