import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {Box, Input, Text, FormControl} from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Box> 
    <Box>
      <Text>Ingrese su Mail:</Text>
      <Input></Input>
    </Box>
   </Box> 
  )
}

export default App
