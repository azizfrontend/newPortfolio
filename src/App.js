import './app.scss';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Overview from './components/Overview';
import Tickets from './components/Tickets';
import NoPages from './pages/NoPages';
import './styles/home.scss'
import './styles/overview.scss'
import './styles/tickets.scss'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}>
          <Route path="overview" element={<Overview />} />
          <Route path="tickets" element={<Tickets />} />
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
