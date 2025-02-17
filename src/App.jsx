import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import TrackForm from './components/TrackForm/TrackForm';
import TrackList from './components/TrackList/TrackList';
import trackService from './services/trackService';
import './App.css';

const App = () => {
    const [tracks, setTracks] = useState([]);
    const [editTrackId, setEditTrackId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTracks() {
            try {
                const data = await trackService.index()
                console.log(data, ' <- data')
                setTracks(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTracks()
    }, []);

    const addTrack = async (formData) => {
        try {
            const newTrack = await trackService.create(formData);
            setTracks([...tracks, newTrack]);
        } catch (err) {
            console.log(err);
        }
    };

    const initiateEditTrack = (track) => { 
        setEditTrackId(track._id);
        navigate('/edit', { state: { track } });
    };

    // New updateTrack function to handle the actual update
    const updateTrack = async (trackData) => {
        try {
            const updatedTrack = await trackService.update(trackData._id, trackData);
            const updatedTracks = tracks.map(track => 
                track._id === updatedTrack._id ? updatedTrack : track
            );
            setTracks(updatedTracks);
            setEditTrackId(null);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTrack = async (track) => {
        try {
            await trackService.delete(track._id);
            const updatedTracks = tracks.filter((t) => t._id !== track._id);
            setTracks(updatedTracks);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='app'>
            <h1>Music Library</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add Track</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={
                    <TrackList 
                        tracks={tracks} 
                        editTrack={initiateEditTrack} 
                        deleteTrack={deleteTrack} 
                    />
                } />
                <Route path="/add" element={<TrackForm createTrack={addTrack} />} />
                <Route path="/edit" element={
                    <TrackForm 
                        editTrackId={editTrackId} 
                        updateTrack={updateTrack}
                    />
                } />
            </Routes>
        </div>
    );
};

export default App;