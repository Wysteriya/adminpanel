import "../src/index.css"

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import RegisterIns from './components/RegisterIns';
import BuyIns from './components/BuyIns';
import Login from './components/Login';
import HomePage from "./components/Homepage";
import AdminBasePage from "./components/AdminBasePage";

function App() {
  return (
    <Router >
        <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/buy_ins' element={< BuyIns />}></Route>
                 <Route exact path='/register_ins' element={< RegisterIns/>}></Route>
                 <Route exact path='/login' element={<Login/>}></Route>
                 <Route exact path='/admin_base' element={<AdminBasePage/>} ></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
