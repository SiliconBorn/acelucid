import { createContext,useReducer } from 'react';
import {AppReducer} from './AppReducer';






//initial state
 const initialState={ 
     users:[
   {id: 1 , username: 'Biswash', email:'jjosdjkas2@gmail.com', password:'123342jjdsis'},
   {id: 2 , username: 'Nitin', email:'jjosdjkas2@gmail.com', password:'123342saddsis'},

   {id: 3 , username: 'Mukul', email:'jjosdjkas2@gmail.com', password:'123342adadvssjjdsis'},
   {id: 4 , username: 'Piyush', email:'jjosdjkas2@gmail.com', password:'123342jjdsis'}
]}

//create context
 export const GlobalContext= createContext(initialState);

 //provider component
 export const GlobalProvider=({children})=>{


    



const[state, dispatch]= useReducer(AppReducer, initialState)


//actions

const removeUser=(id)=>{
    dispatch({
     type:'REMOVE_USER',
     payload:id
    })
}

const addUser=(user)=>{
    dispatch({
     type:'ADD_USER',
     payload:user
    })
}

const editUser=(user)=>{
    dispatch({
     type:'EDIT_USER',
     payload:user
    })
}

const validate=(user)=>{
     let errors={}
    
    if(!user.username.trim()){
        errors.username=' username is required!!';
    }
    if(!user.email){
        errors.email='email is required!!';
    }
if(!user.password){
    errors.password='secure password is required!!'
}else if(user.password.length<6){
    errors.password=' secure password should be 6 or more characters strong!!';
}
  return  errors;  
}


return(
    <GlobalContext.Provider  value={{users: state.users,
         validate:validate,
        removeUser:removeUser,
        addUser:addUser,
        editUser:editUser,
        }}>
        {children}
    </GlobalContext.Provider>
)


 }