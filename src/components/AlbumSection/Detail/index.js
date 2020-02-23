import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ALbumInfo from './AlbumInfo';
import spotifyWrapper from '../../../services';
import AlbumInfo from './AlbumInfo';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotiFyWrapper: spotifyWrapper(),
      albumInfo: {
        cover: null,
        name: null,
        artist: null,
        tracks: []
      },
      error: { status: null, message: null }
    }
  }

  getAlbumInfo() {
    let { albumId } = this.props.match.params || null;

    if (!albumId) {
      this.setState((state) => {
        return {
          ...state,
          error: { status: 500, message: 'No AlbumId parameter' }
        }
      }, () => { console.log('NEW STATE', this.state) });
    }

    if (albumId) {
      this.state.spotiFyWrapper.album.getAlbum(albumId)
        .then(album => {
          console.log('Info', album);
          let { error } = album;
          if (error) {
            this.setState((state) => {
              return { ...state, error }
            }, () => { console.log('ERROR AT GETALBUM - NEW STATE', this.state) });

            return;
          }
          console.log('BEFORE SETSTATE');
          this.setState(state => {
            return {
              ...state,
              albumInfo: {
                cover: album.images[1].url || null,
                name: album.name,
                artist: album.artists[0].name,
                tracks: []
              }
            }
          }, () => {
            console.log('AFTER GETALBUM', this.state.albumInfo);
          });
        });
    }
  }

  componentDidMount() {
    // TODO: Now we use the spotifyWrapper and get the ALbumInfo...
    console.log(`AlbumId: ${this.props.match.params.albumId}`);
    this.getAlbumInfo();
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
            { <AlbumInfo albumInfo={this.state.albumInfo} />}
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