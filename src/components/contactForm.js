import React,{useState} from 'react';
import axios from 'axios';

const encode = data =>
  
    data.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');


export default ()=> {
    const [submitted,setSubmitted]=useState(false)
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const Mail = {"email":email,"message":message};
    const handleSubmit = event => {
        event.preventDefault();
                axios.post('/', encode({Mail}), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
                .then(setSubmitted(true))
    }
    return (
        <div className="CForm">
            {submitted ? 
                (
                    <p className="thanks">
                    Thanks for submitting your information! We'll be in contact with you as soon as
                    possible.
                    </p>
                ):(
                    <form
                      name="contact"
                      netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}>
                        <div style={{height: 0,overflow: 'hidden',}}>
                        <input name="bot-field" />
                        </div>
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email"/>
                        <textarea type="text" value={message} onChange={e=>setMessage(e.target.value)} placeholder="zprava"/>
                        <button type="submit">send</button>
                    </form>
                )
            }
        </div>
    )
}
      
