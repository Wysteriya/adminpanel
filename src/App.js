import "../src/index.css"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import RegisterIns from './components/RegisterIns';
import BuyIns from './components/BuyIns';
import Login from './components/Login';
function App() {
  return (
    <Router >
        <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/buy_ins' element={< BuyIns />}></Route>
                 <Route exact path='/register_ins' element={< RegisterIns/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
