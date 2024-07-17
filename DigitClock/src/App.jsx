import React, { useEffect, useState } from 'react'

function App() {
 const [time , setTime] = useState(new Date())
 useEffect(()=>{
 const intervalTime = setInterval(()=>{
   setTime(new Date())
 },1000)

 return ()=>{
  clearInterval(intervalTime)
 }
 },[])

 function timeFormate(){
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds()
   let meridiem = hour >= 12 ? "PM" : "AM";

   hour = hour % 12  || 12
    
   return `${padTime(hour)}:${padTime(min)}:${padTime(sec)}`
 }

 function padTime(number){
   return (number < 10 ? "0" : "") + number
 }





  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{timeFormate()}</span>
      </div>
    </div>
  )
}

export default App
