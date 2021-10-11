import React,{useState} from 'react';
import { Button } from './UI/button';
import { Input } from './UI/input';
import { Timer } from './UI/Timer';
import './App.css';

const App = () => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  
  const [time, setTime] = useState({min:'00', sec:'00'})

  const handleStart = () => {
    setTime({...time, min:min, sec:sec})
    setInterval(() => {
      if(sec>0 && sec<=60){
        // setSec(sec-1);
        setTime({...time, min:min, sec:sec-1})
      }
      console.log('hello')
    }, 1000);
  }

  const handleReStart = () => {
    setTime({...time, min:min, sec:sec})
  }

  const handlePauseResume = () => {
    
  }
  return (
    <div className="App">
        <h4>Time App</h4>
        <Input className="input" type="number" name="min" value={min} onChange={e => setMin(e.target.value)}/>
        <Input className="input" type="number" name="sec" value={sec} onChange={e => setSec(e.target.value)}/>
        <Button className="button" label="Start" onClick={handleStart}/>
        <Button className="button" label="Pause/Resume" onClick={handlePauseResume}/>
        <Button className="button" label="Reset" onClick={handleReStart}/>
        <Timer time={time}/>
    </div>
  );
}

export default App;
