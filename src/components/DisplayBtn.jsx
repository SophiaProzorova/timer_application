function DisplayBtn({ start, stop, reset, resume,  wait, status}){
    let timeBetweenClicks = undefined;
    const isWait = () => {
        if (!timeBetweenClicks) {
            timeBetweenClicks = Date.now();
            return;
        }
        timeBetweenClicks = Date.now() - timeBetweenClicks;
        if (timeBetweenClicks < 300) wait();
    } 
    const Status0 = () =>{
        return (
            <div>
                <button className="btn btn-primary"
                        onClick={start}>Start</button> 
            </div> 
       )
    }
    const Status1 = () => {
        return (
            <div>
                <button className="btn btn-primary"
                    onClick={isWait}>Wait</button>

                <button className="btn btn-primary"
                    onClick={stop}>Stop</button>

                <button className="btn btn-primary"
                        onClick={reset}>Reset</button>
            </div>
        )
    }
    const Status2 = () => {
        return (
            <div>
                <button className="btn btn-primary"
                        onClick={resume}>Resume</button>
            </div>
        )
    }
    return(
        <div >
            {(status === 0) ? Status0():''}
            {(status === 1) ? Status1():''}
            {(status === 2) ? Status2():''}
        </div>
    )

}
export default DisplayBtn;