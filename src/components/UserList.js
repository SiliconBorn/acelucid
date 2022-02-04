import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Button,ListGroupItem,ListGroup, } from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';

import { Heading } from './Heading';

 
 export const UserList = () => {
const{users , removeUser}= useContext(GlobalContext);


return(
  
<ListGroup className='mt-4'>
<Heading/>

<h4 className='text-center'>
<strong>Details of all the users</strong>
</h4>
<ListGroup className='list-group-horizontal justify-content-center'>
 <ListGroupItem className='col-2'><strong> USERS</strong></ListGroupItem>
 <ListGroupItem className='col-2'> <strong>EMAIL</strong></ListGroupItem>
 <ListGroupItem className='col-2'> <strong>ACTIONS</strong></ListGroupItem>
 
</ListGroup>
{users.length>0?(
  
<>
{users.map(user=>(
  <ListGroup className=' list-group  list-group-horizontal justify-content-center'  key={user.id}>
    
    <ListGroupItem className='col-2'><strong>{user.username}</strong></ListGroupItem>
    <ListGroupItem className='col-2'><strong>{user.email}</strong></ListGroupItem>
    <ListGroupItem className='col-2'> <div className='ml-auto'>
      <Link className='btn btn-warning m-1' to={`/edituser/${user.id}`}>EDIT</Link>
      <Button onClick={()=>removeUser(user.id)}>DELETE</Button>
      </div></ListGroupItem>
  </ListGroup>
))}


</>):(
  <h4 className='text-center'>NO USERS</h4>
)}


<div className=' text-center m-3'><Link className='btn btn-primary' to='/adduser'>ADD NEW USERS</Link></div>
        </ListGroup>


)
 };
 



