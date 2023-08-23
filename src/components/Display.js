import '../App.css';
import React from 'react';
import DisplayCard from "./DisplayCard";

function Display(props){
    return(
        <div className="display">
        {props.value.map((value,index)=>{
            return (<DisplayCard key={index} name={value.name} email={value.email} phone={value.phone} address={value.address} course={value.course} image={value.image} />)
          })
        }
        </div>
    )
}
export default Display