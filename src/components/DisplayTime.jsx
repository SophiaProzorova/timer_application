function DisplayTime ({time}){
   
    return(
        <div>
            {/* {time} */}
            {Math.floor(time/60/60%24)}:{Math.floor(time/60%60)}:{Math.floor(time%60)}
            {/* {Math.floor(time/60/60)} : {Math.floor(time%60)} : {Math.floor(time%10)} */}
        </div>
    )
}
export default DisplayTime;