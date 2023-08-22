import React from "react";
import {Card} from "react-bootstrap";

function DisplayCard(props){
  
    return(
        <div className="card">
            <Card.Body style={{display:'flex', justifyContent: 'space-between', padding:'0 23px'}}>
                <div>
                  <Card.Title><h2>{props.name}</h2></Card.Title>
                  <Card.Text>{props.email}</Card.Text>
                  <Card.Text>{props.phone}</Card.Text>
                  <Card.Text>{props.address}</Card.Text>
                  <Card.Text>{props.course}</Card.Text>
                </div>
                <div>
                  <Card.Img src={props.image} id='output' style={{height:'212px', width:'240px'}}/>
                </div>
            </Card.Body>
        </div>
    )
}
export default DisplayCard