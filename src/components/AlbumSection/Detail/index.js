import React, { Component } from 'react';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';

import spotifyWrapper from '../../../services';
import AlbumInfo from './AlbumInfo';
import AlbumTracks from './AlbumTracks';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotiFyWrapper: spotifyWrapper(),
      albumId: this.props.match.params.albumId || null,
      info: {
        cover: null,
        name: null,
        artist: null
      },
      tracks: [],
      currentTrack: {
        previous: null,
        id: null,
        track: null
      },
      activeTrack: null,
      error: { status: null, message: null }
    }

    this.onTrackSelect = this.onTrackSelect.bind(this);

    this.checkAlbumId();
  }

  checkAlbumId() {
    if (!this.state.albumId) {
      let error = { status: 404, message: 'No AlbumFound' };
      this.handleError(error);
    }
  }

  handleError(error) {
    // TODO: THIS METHOD SHOULD HELP US TO DECIDE IF WE
    // DISPLAY AN ERROR MESSAGE OR NOT AT THE COMPONENT
    this.setState((state) => {
      return { ...state, error };
    }, () => { console.log('NEW STATE AFTER ERROR', this.state) });
  }

  getAlbumTracks() {
    let albumId = this.state.albumId;
    if (!albumId) {
      return;
    }

    this.state.spotiFyWrapper.album.getTracks(albumId)
      .then(tracks => {
        let { error } = tracks;
        if (error) {
          this.handleError(error);
          return;
        }
        this.setState(state => {
          let { id, preview_url } = tracks.items[0];
          return {
            ...state,
            tracks: tracks.items,
          };
        });
      });
  }

  getAlbumInfo() {
    let albumId = this.state.albumId;
    if (!albumId) {
      return;
    }
    this.state.spotiFyWrapper.album.getAlbum(albumId)
      .then(album => {
        let { error } = album;
        if (error) {
          this.handleError(error);
          return;
        }

        this.setState(state => {
          return {
            ...state,
            info: {
              cover: album.images[1].url || null,
              name: album.name,
              artist: album.artists[0].name
            }
          }
        });
      });
  }

  onTrackSelect(track, id) {
    this.setState(state => {
      let currentId = state.currentTrack.id;
      let previousId = currentId || null
      return {
        ...state,
        currentTrack: { track, id, previous: previousId }
      }
    }, () => {
      let player = document.getElementById('audio-player');
      if (!player.hasAttribute('autoplay')) {
        let autoplayAtt = document.createAttribute('autoplay');
        document.getElementById('audio-player').setAttributeNode(autoplayAtt);
      }

      let previous = this.state.currentTrack.previous;
      let current = this.state.currentTrack.id;
      if (previous !== current && previous != null) {
        const previousNameElem = document.getElementById(`track-${previous}`);
        const previousDurationElem = document.getElementById(`duration-${previous}`);
        previousNameElem.classList.toggle('active-track');
        previousDurationElem.classList.toggle('active-track');
      }
      document.getElementById(`track-${current}`).classList.add('active-track');
      document.getElementById(`duration-${current}`).classList.add('active-track');
    });

  }

  componentDidMount() {
    this.getAlbumInfo();
    this.getAlbumTracks();
  }
  
  render() {
    let { url } = this.props.match;
    let rootUrl = url.indexOf(this.state.albumId) > -1 ? url.split('/')[1] : 'Dashboard';
    return (
      <div>
        <section className="section-goback">
          <div className="goback-wrapper">
            <Link to={`/${rootUrl}`}>
              <span className="goback-btn">
                &lt; Voltar
                  </span>
            </Link>
          </div>
        </section>
        <section className="section-detail">
          <section className="section-album-info">
            {<AlbumInfo info={this.state.info} currentTrack={this.state.currentTrack.track} />}
          </section>
          <section className="section-album-tracks">
            {<AlbumTracks tracks={this.state.tracks} onTrackSelect={this.onTrackSelect} />}
          </section>
        </section>
      </div>
    );

  }
}

export default withRouter(Detail);