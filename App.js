import React, { useEffect, useState } from "react";
import "./App.css";







function App(){
const[city,setcity]=useState(null)
const[search,setSearch]=useState("Jaipur");

useEffect(()=>{
    const FetchApi= async ()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`
        const resp=await fetch(url)
        //console.log(resp)
        const jresp=await resp.json();
        console.log(jresp);
        setcity(jresp.main);
    }
    FetchApi();
},[search])



    return(
    <>
    
<div   className="box">
    <div className="inputData">
       <input
       type="search"
       className="inputField"
       onChange={(event)=>{
           setSearch(event.target.value);
       }}/> 

    </div>
{ !city ? (
    <p> no data found</p>
) : (
<>
<div  className="info">
    <h2 className="location">
           {search}

    </h2>
    <h1 className="temp">{city.temp} °Cel</h1>
</div>
<div className="wave -one"></div>

<div className="wave -two"></div>
<div className="wave -three"></div>

</>
)}


</div>

        
        </>

    )
};
export default App;
