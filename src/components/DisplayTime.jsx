function DisplayTime ({time}){
    return(
        <div>
            {Math.floor(time/60/60%24)}:{Math.floor(time/60%60)}:{Math.floor(time%60)}
        </div>
    )
}
export default DisplayTime;