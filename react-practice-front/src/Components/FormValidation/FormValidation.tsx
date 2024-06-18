import React from 'react'
import './FormValidation.css'

const FormValidation: React.FC = () => {

    const [ name, setName ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ contact, setContact ] = React.useState('')
    const [ password, setPassword ] = React.useState('')


    const validName = () => {
        return name.length > 0;
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = event.target.value;
        setName(nameInput);
    }


    const validEmail = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/
        return regex.test(email)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailInput = event.target.value;
        setEmail(emailInput);
    }


    const validContact = () => {
        const parsedContact = parseInt(contact);
        console.log(contact.length)
        return ( 
            !isNaN(parsedContact)
            && parsedContact.toString() === contact
            && contact.length === 10
        )
    }

    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const contactInput = event.target.value;
        setContact(contactInput);
    }


    const validPassword = () => {
        return password.length >= 8;
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const validInput = () => {
        return (
            validName()
            && validEmail()
            && validContact()
            && validPassword()
        )
    }

    return (
        <>
        <h2 className='section-title'>Form Validation</h2>
        <fieldset className="flex-column">
            <legend>Enter Information Below:</legend>
            <div className="form-row">
                <label htmlFor='name'>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Enter Name" 
                    value={name}
                    onChange={handleNameChange}
                />       
                <span className="errorMessage">
                        {validName()? "" : "Name cannot be empty."}
                </span>
            </div>

            <div className="form-row">
                <label htmlFor='email'>Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder='Enter Email'
                    value={email}
                    onChange={handleEmailChange}
                />      
                <span className="errorMessage">
                        {validEmail() ? "" : "Please enter valid email."}
                </span>                
            </div>

            <div className="form-row">
                <label htmlFor='contact'>Contact:</label>
                <input 
                    type="text" 
                    name="contact" 
                    id="contact"
                    placeholder="Enter Contact" 
                    value={contact}
                    onChange={handleContactChange}
                />
                <span className="errorMessage">
                        {validContact() ? "" : "Please enter a valid 10 digit phone number."}
                </span>
            </div>

            <div className="form-row">
                <label htmlFor='password'>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter Password'    
                    value={password}
                    onChange={handlePasswordChange}
                />
                <span className="errorMessage">
                        {validPassword() ? "" : "Password has to be at least 8 character long."}
                </span>
            </div>

            <button
                className="button form-button" 
                disabled={!validInput()}
            >Submit</button>
            
        </fieldset>
        </>
    )
}

export default FormValidation