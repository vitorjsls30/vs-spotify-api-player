import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spotifyWrapper from '../../../services';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotiFyWrapper: spotifyWrapper()
    }
  }

  componentDidMount() {
    // TODO: Now we use the spotifyWrapper and get the ALbumInfo...
    console.log(`AlbumId: ${this.props.match.params.albumId}`);
  }
  render() {
    return (
      <div>
        <section className="section-goback">
          <div className="goback-wrapper">
            <Link to='/'>
              <span className="goback-btn">
                &lt; Voltar
                  </span>
            </Link>
          </div>
        </section>
        <section className="section-detail">
          <section className="section-album-info">
            <div className="album-info">
              <div className="detail-cover"></div>
              <div className="album-name">Album Name</div>
              <div className="artist-name">Artist Name</div>
            </div>
          </section>
          <section className="section-album-tracks">
            <div className="album-tracks">
              <div className="track-number"><span>1.</span></div>
              <div className="track-name"><span>Name</span></div>
              <div className="track-duration"><span>3:00</span></div>
            </div>
            <div className="album-tracks">
              <div className="track-number"><span>1.</span></div>
              <div className="track-name"><span>Name</span></div>
              <div className="track-duration"><span>3:00</span></div>
            </div>
            <div className="album-tracks">
              <div className="track-number"><span>1.</span></div>
              <div className="track-name"><span>Name</span></div>
              <div className="track-duration"><span>3:00</span></div>
            </div>
          </section>
        </section>
      </div>
    );

  }
}

export default Detail;