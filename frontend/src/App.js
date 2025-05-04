import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import UserList from './Components/UserList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/edit" element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
