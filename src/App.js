import './css/App.css'
import './css/screen.css'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register';
import "../src/index.css"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import RegisterIns from './components/RegisterIns';
import BuyIns from './components/BuyIns';
function App() {
  return (
    <Router >
        <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/buy_ins' element={< BuyIns />}></Route>
                 <Route exact path='/register_ins' element={< RegisterIns/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
