import { useState } from "react";
import image from "C:/nodejs/shash-23/src/1.jpg";
import React, { Component } from 'react';
import {  Form, FormGroup, FormControl, Button, Card } from 'react-bootstrap';
import { FaHeart,FaRegHeart, } from "react-icons/fa";
import{ArrowRight}from "react-bootstrap-icons";
const divStyle = {
  marginBottom:2000,
  alignItems: 'center',
  marginTop: -100
};

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }
// const Home = () => {
//     const[name,setname]=useState("Farmers House");
   render(){

   
    
    return (  
     <center> <div style={{backgroundImage:`url(${image})`, backgroundSize: "cover",
     height: "100vh",}}>
       {/* <h1>{name}</h1> */}
        <Card style={cardStyle}>
          
          <Form horizontal className="LoginForm" id="f" >
            <FormGroup controlId="formEmail">
             
              <FormControl type="text" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
            <FaHeart /> <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button><FaRegHeart /><ArrowRight/>
            </FormGroup>
          </Form>
        </Card>
      </div></center>
        
        // <div className="home" style={{backgroundImage:`url(${image})`}}>
        //   <h1>{name}</h1>
  
                 // {/* <form>
        //   <button>farmers login</button>
        //   <button>customer login</button>
        // </form> */}
        // <div/>
    );
}
}

export default LoginForm;
