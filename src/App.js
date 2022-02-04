
import './App.css';
import {  Route , Routes } from 'react-router-dom';
import  {FormSignup} from './components/FormSignup';
import{FormLogin} from './components/FormLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './helper/GlobalState';
import { AddUser } from './components/AddUser';
import { UserList } from './components/UserList';
import { EditUser } from './components/EditUser';


function App() {
  return (
    <>
<GlobalProvider>
    <Routes>
    <Route path='/' element={<FormLogin/>}></Route>
    <Route path='signup' element={<FormSignup/>}></Route>
    <Route path='edituser/:id' element={<EditUser/>}></Route>
    <Route path='userlist' element={<UserList/>}></Route>
    <Route path='adduser' element={<AddUser/>}></Route>
    
    </Routes>
    </GlobalProvider>
    </>
  );
}

export default App;
