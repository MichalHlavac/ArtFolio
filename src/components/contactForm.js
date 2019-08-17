import React,{useState} from 'react';
import axios from 'axios';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')


    export default ()=> {
        const [submitted,setSubmited]=useState(true)
        const [email,setEmail]=useState('');
        const [message,setMessage]=useState('');
        render () {
          return (
            <div>
              {submitted ? (
                <p className="thanks">
                  Thanks for submitting your information! We'll be in contact with you as soon as
                  possible.
                </p>
              ) : (
                <div
                  onSubmit={async values => {
                    try {
                      await axios.post('/', encode({ 'form-name': 'contact', ...values }), {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      })
                      setSubmited(true)
                    } catch (err) {
                      window.alert(
                        'There was a problem submitting your form! Try again or reload the page :)',
                      )
                      setSubmited(true)
                    }
                  }}
                >
                  {({ submitForm }) => (
                    <form
                      name="contact"
                      netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={submitForm}
                    >
                        <input type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder="email"/>
                        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="zprava"/>
                        
                        <input name="bot-field" />
                        <button type="submit">send</button>
                    </form>
                  )}
                </div>
              )}
            </div>
          )
        }
      }
