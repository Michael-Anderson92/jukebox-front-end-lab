import './TrackList.css'
// Always write out basic html
// import it into the file to be rendered (aka App.js)
// confirm your props in the devtools before you use them!

export default function TrackList(props){

    const trackLis = props.tracks.map((track) => {
        return <li key={track._id}>{track.title}</li>
    })

    // check to see if we have tracks
    return (
        <section className={'track-list'}>
            <h1>Track List</h1>
            {trackLis.length !== 0 ? (
                <ul>
                    {trackLis}
                </ul>
            ) : (
                <h2>No tracks yet!</h2>
            )}
        </section>
    )
}
