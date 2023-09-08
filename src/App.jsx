
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Ring from './Pages/Ring';
import Earrings from './Pages/Earrings';
import Checkout from './Pages/Checkout';

function App() {

  return (
    
    <div className="App">
      <Router>
    

     <Routes>
     <Route path='/checkout' exact  element={ <Checkout /> }></Route>
     <Route path='/signup' exact  element={ <Login /> }></Route>
     <Route path='/login' exact  element={ <Singup /> }></Route>
     <Route path='/earrings' exact  element={ <Earrings /> }></Route>
     <Route path='/' exact  element={ <Ring /> }></Route>
      </Routes>

     </Router>
    </div>
  );
}

export default App;