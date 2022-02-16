import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import Home from './components/Home/Home';
import Movelist from './components/MovieList/MovieList';
import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        {/* <Switch> */}
          <Route path='/trending' exact  element={<Home/>} />
          <Route path='/' exact element={<Movelist/>} />
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;