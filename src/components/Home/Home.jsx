import React, { useState } from 'react';
import TrackForm from '../TrackForm/TrackForm';
import TrackList from '../TrackList/TrackList';

const Home = () => {
    const [tracks, setTracks] = useState([]);

    const createTrack = (newTrack) => {
        setTracks([...tracks, newTrack]);
    };

    return (
        <div className='home'>
            <h1>Music Library</h1>
            <TrackForm createTrack={createTrack} />
            <TrackList tracks={tracks} />
        </div>
    );
};

export default Home;
