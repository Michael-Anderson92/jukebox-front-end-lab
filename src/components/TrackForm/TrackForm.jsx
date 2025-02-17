import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TrackForm.css';

const initialState = {
    title: '',
    artist: '',
};

export default function TrackForm({ createTrack, updateTrack, editTrackId }) {
    const [formData, setFormData] = useState(initialState);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (editTrackId && location.state?.track) {
            setFormData(location.state.track);
        }
    }, [editTrackId, location.state]);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editTrackId) {
            updateTrack(formData);
        } else {
            createTrack(formData);
        }
        setFormData(initialState);
        navigate('/');
    }

    return (
        <section>
            <form className="track-form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="artist">Artist:</label>
                <input
                    type="text"
                    name="artist"
                    id="artist"
                    value={formData.artist}
                    onChange={handleChange}
                />
                <button type="submit">{editTrackId ? 'Update' : 'Submit'}</button>
            </form>
        </section>
    );
}