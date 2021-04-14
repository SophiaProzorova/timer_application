function DisplayBtn({ start, stop, reset, resume,  wait, status}){
    let timeBetweenClicks = undefined;
    return(
        <div>
            {(status === 0) ?
                    <div>
                        <button className="stopwatch-btn"
                        onClick={start}>Start</button> 
                    </div>: ''}
                 {(status === 1) ?
                    <div>
                    <button className="stopwatch-btn stopwatch-btn-red"
                          onClick={()=>{
                            if (!timeBetweenClicks) {
                                timeBetweenClicks = Date.now();
                                return;
                            }
                            timeBetweenClicks = Date.now() - timeBetweenClicks;
                            if (timeBetweenClicks < 300) wait();
                          }}>Wait</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={stop}>Stop</button>

                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={reset}>Reset</button>
                    </div> : ''}
                {(status === 2) ? 
                    <div>
                        <button className="stopwatch-btn stopwatch-btn-blu"
                          onClick={resume}>Resume</button>
                    </div> : ''}
                
                
        </div>
    )

}
export default DisplayBtn;