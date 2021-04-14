import DisplayTime from './components/DisplayTime'
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import './App.css';
import { useState, useEffect } from 'react';
import DisplayBtn from './components/DisplayBtn';

function App() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscibe = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscibe))
      .subscribe(() => {
        if(watchOn) setTime(prev => prev+1)
      })
    return () => {
      unsubscibe.next()
      unsubscibe.complete()
    }
  }, [watchOn])

  const onStart = () =>{
    setWatchOn(prev => !prev)
    setStatus(1)
  }

  const onResume = () => {
    onStart();
  }

  const onStop = () => {
    setTime(0)
    setWatchOn(false)
    setStatus(0)
  }
  const onReset = () => {
    setTime(0)
    setWatchOn(true)
    setStatus(1)
  }
  const wait = () => {
    setWatchOn(false)
    setStatus(2)
  }

  return (
    <div className="App">
      <DisplayTime time ={time}/>
      <DisplayBtn 
            start = {onStart}
            stop = {onStop}
            reset = {onReset}
            wait = {wait}
            resume = {onResume}
            status = {status}
      />
    </div>
  );
}

export default App;
