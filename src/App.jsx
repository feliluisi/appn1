import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {Box, Input, Text, FormControl, Button, ButtonGroup} from '@chakra-ui/react'
import './App.css'
import data from '.././src/data/users.json'

function App() {
  const[optionUser, setOptionUser] = useState({user:"",password:""});

  const findUser= ()=>{
     const currenUser = data.find((e)=>{
      return  e.pass=== optionUser.password && e.mail === optionUser.user
    })
     if (!currenUser){
      
      console.log(currenUser)
     }
  };  
  
  console.log(optionUser.user);
  console.log(optionUser.password);
  
  
  return (
   <Box> 
    <Box>
      <Text>Ingrese su Mail:</Text>
      <Input type='email' value={optionUser.user} onChange={(e) => setOptionUser({...optionUser, user:e.target.value})}></Input>  
    </Box>
    <Box>
      <Text>Ingrese su Contraseña:</Text>
    <Input type='password' value={optionUser.password} onChange={(e) => setOptionUser({...optionUser, password:e.target.value})}></Input>
    </Box>
    <Box>
    <Button
      type='submit'
      onClick={()=>(findUser())}    
    > 
    Click to submit </Button>
    
    </Box>
   </Box>   
  )
 }

export default App
