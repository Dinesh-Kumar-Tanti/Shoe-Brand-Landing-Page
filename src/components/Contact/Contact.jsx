import { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [message, setMessage] = useState()

    const onSubmit = (event) => {
        event.preventDefault()

        setName(event.target[0].value)
        setMail(event.target[1].value)
        setMessage(event.target[2].value)
    }

    return (
        <div className='contact'>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' />
                <label>E - Mail</label>
                <input type="email" name="email" placeholder='Enter Your Email' />
                <label>Message</label>
                <textarea name="message" rows="8" placeholder='Enter your text here'></textarea>
                <button type="submit">Submit</button>
            </form>


<br /><br /><br />
            <div className="info">
                <h1>Name: {name}</h1>
                <h1>Email: {mail}</h1>
                <h1>Message: {message}</h1>
            </div>
        </div>
    )
}

export default Contact
