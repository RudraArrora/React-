import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
 const [time,setTime] = useState(new Date());
   useEffect(()=>{
    const IntervalId = setInterval(()=>{
      setTime(new Date());
    },1000)
    return () =>{
      clearInterval(IntervalId);
    }
   },[])
  return <p>The Time Is : {time.toDateString()} ---{time.toTimeString()} </p>;
}

export default CurrentTime;
