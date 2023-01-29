import Navbar from './navbar';
import Home from './home';
import LoginForm from './home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Animelist from './animelist';
import Contact from './contact';
import Skills from './skills';
import Error from './404';
import Portfolio from './portfolio';
import Signup from './signup';
// import { Cart } from 'react-bootstrap-icons';

function App() {
  
  return (
    <Router>
    <div className="App">
    
     <br></br> <Navbar/>
   
    <div className='content'>
      <Routes>
        <Route exact path='/' element={<LoginForm/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/buy' element={<Animelist/>}/>
    
        <Route path='/skills' element={<Signup/>}/>
        <Route path='/product'element={<Skills/>}/>
    
        <Route path='*' element={<Error/>}/>


      </Routes>
     
    </div>
    </div>
    </Router>
  );
}

export default App;
