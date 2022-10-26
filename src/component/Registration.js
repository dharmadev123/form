import React, { useState } from 'react';
import './Registration.css'


const Registration = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [error,setError] = useState("")
    console.log(firstName, lastName, email, phone, "data");
  
  
    const sumbit = (e) => {
      e.preventDefault();
      if(firstName.length == 0 || phone.length == 0 ) {
        setError("please fill details  ")
      }
      if(firstName  && phone){
  
        console.log("jdfohsdii");
      }
     
    }
  
    return (
      <div className="page">
        <form className='cover'>
        <br />
          <input className='inputinside' type='text' placeholder='FirstName' onChange={e => setFirstName(e.target.value)} />
          {error}
          
         
          <input className='inputinside' type='text' placeholder='LastName' onChange={e => setLastName(e.target.value)} required />
         
          <input className='inputinside' type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} required />
          {error}
         
          <input className='inputinside' type='text' placeholder='Phone' onChange={e => setPhone(e.target.value)} />
        
          <button className='login-btn' onClick={sumbit}>submit</button>
  
        </form>
  
  
      </div>
    );
  }

export default Registration