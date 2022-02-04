import React, { useState,useContext } from 'react';
import {Button, FormGroup,Label,Input,Form  } from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';
import {  Link,useNavigate} from 'react-router-dom';






export const AddUser = () => {

const[user,setUser] = useState({
  id:'',
  username:'',
  email:'',
  password:''
});
const{addUser}= useContext(GlobalContext);
const navigate= useNavigate();


const onSubmit=(e)=>{
  e.preventDefault();
  const newUser={
   id:new Date().getTime(),
   username:user.username,
   email:user.email,
   password:user.password
  }
  
addUser(newUser)
console.log(typeof(newUser.id));
navigate('/userlist')

}

const onChange= e=>{
  const{name,value}=e.target
  setUser({...user,[name]:value});
}




  return(
    <>
   <div className='d-flex justify-content-center'>  
<Form  onSubmit={onSubmit}>
    <h5> Fill up below information to add a new user</h5>
<FormGroup>
    <Label for="newUsername">
      Username
    </Label>
    <Input
      value={user.username}
      onChange={onChange}
      name="username"
      placeholder="Please choose a username"
      type="text"
      />
      </FormGroup>
<FormGroup>
      
    <Label for="newEmail">
      Email
    </Label>
    <Input
       value={user.email}
       onChange={onChange}
      name="email"
      placeholder="Enter the email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="newPassword">
      Password
    </Label>
    <Input
       value={user.password}
       onChange={onChange}
      name="password"
      placeholder="Choose a password"
      type="password"
    />
</FormGroup>

  <Button  type='submit'className='btn btn-success'>
    Add the User
  </Button>
  <Link to='/userlist' className='btn btn-danger m-2'> 
  Cancel
  </Link>
</Form>

</div> 


    </>
  )
};


