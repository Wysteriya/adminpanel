import './css/App.css'
import './css/screen.css'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
    <Router >
        <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
