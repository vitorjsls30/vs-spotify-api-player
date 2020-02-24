import React from 'react';

function formatDuration(ms) {
  let seconds = parseInt((ms/1000)%60)
      , minutes = parseInt((ms/(1000*60))%60)
      , hours = parseInt((ms/(1000*60*60))%24);
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  let duration = `${minutes}:${seconds}`;
  if(!hours === '00') {
    duration = `${hours}:${minutes}:${seconds}`; 
  }
  return duration;
}

function AlbumTracks(props) {
  let { tracks } = props;
  if (!tracks) {
    return (
      <div className="album-tracks">
        <div className="track-name"><span>...?</span></div>
      </div>
    );
  }

  return tracks.map(track => {
    let { id, track_number, name, duration_ms} = track;
    duration_ms = formatDuration(duration_ms);
    return (
      <div className="album-tracks" key={ id }>
        <div className="track-number"><span>{ track_number }.</span></div>
        <div className="track-name"><span>{ name }</span></div>
        <div className="track-duration"><span>{ duration_ms }</span></div>
      </div>
    );
  });
}

export default AlbumTracks;