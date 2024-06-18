import React from 'react'
import './Uploader.css'


const Uploader: React.FC<{}> = () => {

    // const [ file, setFile ] = React.useState(null);
    const [ url, setUrl ] = React.useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0){
            const fileInput = event.target.files[0]
            const url = URL.createObjectURL(fileInput);
            setUrl(url)
        }
    
    }

    return (
        <div className="uploader">
            <div className="image">
                { url && <img src={url} alt='image' />}
            </div>
        <input
            type="file"
            onChange={handleFileChange}
            />    
        </div>
    )
}

export default Uploader