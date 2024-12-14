import './App.css';
import './index.css'
import { useState } from 'react';


function App() {

  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [message, setMessage] = useState('');
  let [bmi, setbmi] = useState('');


  const reload = () => {
    console.log("Reload Pressed !!");
    window.location.reload();
  };
  // Logic to calculate the bmi
  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter the valid weight and height !")
    } else {
      let bmi = (weight / (height * height) * 703);
      setbmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are under weight !")
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight !")
      } else {
        setMessage("You are over weight !")
      }
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter height Value' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit' >Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
