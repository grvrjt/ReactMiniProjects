import { useState } from 'react';
import './App.css';
import { Box, Button, Stack } from '@mui/material';

function App() {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count => count + 1);
  }
  const decrease = () => {
    if (count == 0) {
      return 0;
    } else {
      setCount(count => count - 1);
    }
  }
  const reset = () => {
    setCount(0);
    window.location.reload();
  }
  return (
    <>
      <Box
        component={"form"}
        sx={{
          '& >: not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete='off'
      >
      </Box>
      <div className="app">
        <div className='container'>
          <div className='total_amount_card' style={{ backgroundImage: `linear-gradient(to right,rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))` }}>
            <div className='right'>
              <svg
                onClick={reset}
                xmlns="http://www.w3.org/2000/svg"
                id='Outline' viewBox="0 0 24 24" width="17" height="17">
                <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
              </svg>
            </div>
            <div className='card_text'>
              <h3 className='total_amount_heading'>{count}</h3>
            </div>
          </div>
          <form>
            <div className='button_collection'>
              <Stack spacing={2} direction="row">
                <Button onClick={increase} variant='contained' className='btn_one'>+</Button>
                <Button onClick={decrease} variant='contained' className='btn_two'>-</Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
