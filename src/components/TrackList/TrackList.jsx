import './TrackList.css';

export default function TrackList(props) {
    const trackLis = props.tracks.map((track) => {
        return (
            <li key={track._id}>
                <span className="track-title">Title: {track.title}</span>
                <br />
                <span className="track-artist">Artist: {track.artist}</span>
                <br />
                <button onClick={() => props.editTrack(track)}>Edit</button>
                <button onClick={() => props.deleteTrack(track)}>Delete</button>
            </li>
        );
    });

    return (
        <section className="track-list">
            <h1>Track List</h1>
            {trackLis.length !== 0 ? (
                <ul>
                    {trackLis}
                </ul>
            ) : (
                <h2>No tracks yet!</h2>
            )}
        </section>
    );
}