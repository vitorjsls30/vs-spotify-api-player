import React from 'react';

function Player(props) {
    if(!props.src) {
        return(<div></div>);
    }

    return(
        <audio id="audio-player" className="audio-player" controls src={props.src}></audio>
    );
}

export default Player;