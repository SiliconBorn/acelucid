import React, { useState,useContext } from 'react';
import {Button, FormGroup,Label,Input,Form  } from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';
import {  Link,useNavigate} from 'react-router-dom';






export const FormSignup = () => {
  
  const[newUser,setNewUser]= useState({
    id:new Date().getTime(),
    username:'',
    email:'',
    password:''  
  });
  
  const{validate, addUser}= useContext(GlobalContext);
  const navigate= useNavigate();
  const[isSubmitting,setIsSubmitting]=useState(false);
  const [errors,setErrors]= useState({});



  const OnSubmit=(e)=>{
    e.preventDefault();
    setIsSubmitting(true);
    
    setErrors(validate(newUser)) ;
  
     
 if (Object.keys(errors).length===0 &&  isSubmitting)
  {
      const newSignup={
          id: newUser.id,
          username:newUser.username,
          email:newUser.email,
          password:newUser.password
         }
        
         console.log(newSignup);
         navigate('/userlist');
         addUser(newSignup);
  }else{
    
      alert('there is error in filling form details');
      
  }

   
  
  }
  
  const onChange= e=>{
    const{name,value}=e.target
    setNewUser({...newUser,[name]:value});
  }
  
  
  
    return(
          <>
        <div className='d-flex justify-content-center'>  
     <Form  onSubmit={OnSubmit}>
         <div><img src='../logo/Acelucid logo.png' alt='acelucid_logo'></img></div>
         <h5>Get started with us today!!Create your account by filling up your information below</h5>
     <FormGroup>
         <Label for='newUsername'>
           Username
         </Label>
         <Input
           value={newUser.username}
           onChange={onChange}
           name='username'
           placeholder='Please choose a username'
           type='text'
           />
           {errors.username &&<p className='errors'>{errors.username}</p>}
           </FormGroup>
     <FormGroup>
           
         <Label for='newemail'>
           Email
         </Label>
         <Input
            value={newUser.email}
            onChange={onChange}
           name='email'
           placeholder='Enter your email'
           type='email'
         />
          {errors.email &&<p className='errors'>{errors.email}</p>}
       </FormGroup>
       <FormGroup>
         <Label for='newpassword'>
           Password
         </Label>
         <Input
            value={newUser.password}
            onChange={onChange}
           name='password'
           placeholder='Please choose a secure password'
           type='password'
         />
          {errors.password &&<p className='errors'>{errors.password}</p>}
     </FormGroup>
     
       <Button  type='submit'className='btn btn-success'>
         SINGUP
       </Button><br/>
      <span> Already have an account? <Link to='/login'> LOGIN HERE!!
       
       </Link></span>
     </Form>
     </div>
</>
  )
};
