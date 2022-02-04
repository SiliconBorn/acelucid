import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Button,ListGroupItem,ListGroup} from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';

import { Heading } from './Heading';

 
 export const UserList = () => {
const{users , removeUser}= useContext(GlobalContext);


return(
  
<ListGroup className='mt-4'>
<Heading/>

<h4 className='text-center'>
details of all the users
</h4>
{users.length>0?(
  
<>
{users.map(user=>(
  <ListGroup className=' list-group list-group-horizontal justify-content-center'  key={user.id}>
    <ListGroupItem className='col-2'><strong>{user.username}</strong></ListGroupItem>
    <ListGroupItem><strong>{user.email}</strong></ListGroupItem>
    <ListGroupItem> <div className='ml-auto'>
      <Link className='btn btn-warning m-1' to={`/edituser/${user.id}`}>EDITt</Link>
      <Button onClick={()=>removeUser(user.id)}>DELETE</Button>
      </div></ListGroupItem>
  </ListGroup>
))}


</>):(
  <h4 className='text-center'>NO USERS</h4>
)}



</ListGroup> 

)
 };
 



