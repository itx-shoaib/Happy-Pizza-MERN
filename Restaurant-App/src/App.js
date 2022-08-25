import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import SigninPage from './components/SigninPage';
import RegisterPage from './components/RegisterPage';
import MenuPage from './components/MenuPage';
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<SigninPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path="*" element={<main><p>There's nothing here!</p></main>}></Route>
    </Routes>
  );
}

export default App;
