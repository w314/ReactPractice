import React from 'react'
import './Profile.css'


const Profile: React.FC<{}> = () => {

    const [ name, setName ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ contact, setContact ] = React.useState('')
    const [ imgUrl, setImgUrl ] = React.useState("")
    const [ underEdit, setUnderEdit ] = React.useState(false)

    const fakeName = "Jane Doe"
    const fakeEmail = "email@example.com"
    const fakeContact = "123456789"
    const fakeImgUrl = 'https://st4.depositphotos.com/11634452/41441/v/450/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg'
    // https://cdn.pixabay.com/photo/2024/05/26/00/40/lizard-8787888_1280.jpg

    console.log(`ImageURL: ${imgUrl}`)

    const validName = () => {
        return name.length > 0;
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = event.target.value;
        setName(nameInput);
    }


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailInput = event.target.value;
        setEmail(emailInput);
    }


    const handleImgUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`Image URL: ${imgUrl}`)
        setImgUrl(event.target.value);
    }

    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const contactInput = event.target.value;
        setContact(contactInput);
    }    

    const handleButtonClick = () => {
        setUnderEdit(!underEdit);
    }

    return (
        <>
        <h2>Profile</h2>

        {underEdit 
        ?   null
        :   <div className="image">
                <img src={imgUrl ? imgUrl : fakeImgUrl} alt="Profile Photo" />
            </div>

        }

        <div className="form-row">           
            { underEdit 
                ? (
                    <>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Enter Name" 
                        value={name}
                        onChange={handleNameChange}
                    />
                    </>
                    )
                : <label>Name: <span>{name ? name : fakeName}</span> </label>
            }
        </div>


        <div className="form-row">
            { underEdit 
                    ? (
                        <>            
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        </>      
                        )
                    :   <label>Email: <span>{email ? email : fakeEmail}</span> </label>
            }
        </div>

        <div className="form-row">
            { underEdit 
                ? (
                    <>                 
                    <label htmlFor='contact'>Contact:</label>
                    <input 
                        type="text" 
                        name="contact" 
                        id="contact"
                        placeholder="Enter Contact" 
                        value={contact}
                        onChange={handleContactChange}
                    />
                    </>
                )
                : <label>Contact: <span>{contact ? contact : fakeContact}</span> </label>
            }
        </div>

        <div className="form-row">
            { underEdit  &&
                    <>                 
                    <label htmlFor='imgUrl'>Profile Photo URL:</label>
                    <input 
                        type="text" 
                        name="imgUrl" 
                        id="imgUrl"
                        placeholder="Enter Profile Photo URL" 
                        value={imgUrl}
                        onChange={handleImgUrlChange}
                    />
                    </>
            }
        </div>        


            <button
                className="button form-button" 
                onClick={handleButtonClick}
            >{underEdit ? "Save" : "Edit Profile"}</button>
     
        
        </>
    )
}

export default Profile