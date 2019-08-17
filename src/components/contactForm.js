import React,{useState} from 'react';
import axios from 'axios';
import {CForm} from './styledForm';

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default ()=> {
    const [state, setState]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const handleChange = (e) => {setState({ ...state, [e.target.name]: e.target.value })}
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
                axios.post('/', encode({
                    'form-name': form.getAttribute('name'),
                    ...state,
                  }), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
                .then(res=>{setSubmitted(true)});
    }
    return (
        <CForm className="CForm">
            {submitted ? 
                (
                    <p className="thanks">
                    Thanks for submitting your information! We'll be in contact with you as soon as
                    possible.
                    </p>
                ):(
                    <form
                        className="Form"
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <div style={{height: 0,overflow: 'hidden',}}>
                            <input name="bot-field"  onChange={handleChange}/>
                        </div>
                        <input type="email" name="email" onChange={handleChange} placeholder="email" required/>
                        <textarea maxLength="500" type="text" name="message" onChange={handleChange} placeholder="zprava" required/>
                        <button type="submit">send</button>
                    </form>
                )
            }
        </CForm>
    )
}
      
