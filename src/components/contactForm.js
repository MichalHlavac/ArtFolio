import React,{useState} from 'react';
import axios from 'axios';

export default ()=>{
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const Submit = event =>{
        event.preventDefault();
        const Post =[{"email":email},{"message":message}]
        axios.post(
            '/',Post , 
            {headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              })
            .then(res => {
              console.log(Post);
            })};
    
    return(
        <form className="CForm"  name="contact" netlify="true" onSubmit={Submit}>
            <input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="email"/><br/>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="zprava"/>
            <button type="submit">send</button>
        </form>
    );
}