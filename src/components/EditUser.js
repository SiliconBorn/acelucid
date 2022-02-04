import React, {useState,useContext, useEffect} from 'react';
import {Button, FormGroup,Label,Input,Form  } from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';
import {  Link,useNavigate,useParams} from 'react-router-dom';


export const EditUser= () => {


const[selectedUser,setSelectedUser]=useState({

  id:'',
  username:'',
  email:'',
  password:''
});

const{users,editUser}= useContext(GlobalContext);
const navigate= useNavigate();
const {id}=useParams();
const currentUserId= id;

useEffect(()=>{

const selectedUser=users.find(user=>user.id==currentUserId)
console.log(selectedUser)
setSelectedUser(selectedUser);
},[currentUserId,users])

const onChange= e =>{
  const{name,value}= e.target;
setSelectedUser({...selectedUser,[name]:value});
}


const onSubmit=(e)=>{
  e.preventDefault();
console.log(selectedUser);
  editUser(selectedUser)
  navigate('/userlist')
}

  return(
    <>
   <div className='d-flex justify-content-center'>  
<Form  onSubmit={onSubmit}>
    <h5>Edit below information to update</h5>
<FormGroup>
    <Label for='newUsername'>
      Username
    </Label>
    <Input
     value={selectedUser.username}
     onChange={onChange}
      name='username'
      placeholder="Please choose a username"
      type='text'
      />
      </FormGroup>
    <FormGroup>
      <Label for='newEmail'>
      Email
    </Label>
    <Input
       value={selectedUser.email}
       onChange={onChange}
      name='email'
      placeholder="Enter the email"
      type='email'
    />
  </FormGroup>
  <FormGroup>
    <Label for='newPassword'>
      Password
    </Label>
    <Input
    value={selectedUser.password}
    onChange={onChange}
      name='password'
      placeholder="Choose a password"
      type='password'
    />
</FormGroup>
<Button type='submit' className='btn btn-success '>
    Submit updates
  </Button>
  <Link to='/userlist' className='btn btn-danger m-2'>
    Cancel updation
  </Link>
</Form>

</div> 


    </>
  )
};





