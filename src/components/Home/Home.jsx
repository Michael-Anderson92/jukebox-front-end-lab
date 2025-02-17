import React from 'react';
import TrackForm from '../TrackForm/TrackForm';
import TrackList from '../TrackList/TrackList';
import './Home.css';

const Home = ({ setShowForm }) => {
    return (
        <div className='home'>
            <h1>Music Library</h1>
            <TrackList />
        </div>
    );
};

export default Home;
