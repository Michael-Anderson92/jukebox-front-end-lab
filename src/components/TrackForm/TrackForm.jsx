import { useState } from 'react'
import  './TrackForm.css'

const initialState = {
    title: '',
    artist: '',
}

export default function TrackForm(props) {

    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        // this is coming from the app component
        // lifting the formData up the app, 
        // so we can make our POST fetch call to 
        // express api
        props.createTrack(formData)
        setFormData(initialState)
    }

    return (
        <form className='track-form' onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
            <label htmlFor="artist">Artist:</label>
            <input type="text" name='artist' id='artist' value={formData.artist} onChange={handleChange} />
            <button type='submit'>Create Track</button>
        </form>
    )
}
