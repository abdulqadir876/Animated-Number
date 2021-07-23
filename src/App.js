import react, { useState } from 'react'
import { Button, Container, Typography } from '@material-ui/core';
import './App.css';
import AnimatedNumber from "animated-number-react";


function App() {
  const [count, setCount] = useState(50) 
  const [comment, setComment] = useState(20) 
  return (
    <Container className="App">
     <Typography variant="h5">
        React Animated Number
     </Typography>
     <Typography variant="h1"  className="animated">
        likes
     <AnimatedNumber
     className="animated"
        value={ count }
        formatValue={n => n.toFixed(0)}
        duration={1000}
        frameStyle={percentage => percentage > 20 && percentage < 80 ? {opacity: 0.1 }:{opacity: 1}}
     /></Typography>
     Comments 
     <Typography>
     <AnimatedNumber
     value={comment}
     formatValue={number => number.toFixed(0)}
     /></Typography>
     <br/>
     <Button variant="contained" color="secondary" 
     onClick={()=>setCount(count - 20)}
     style={{marginRight: '10px'}}>Decrease</Button>
     <Button variant="contained" color="primary"
     onClick={()=>setCount(count + 20)}
     >Increase</Button>
    </Container>
  );
}

export default App;
