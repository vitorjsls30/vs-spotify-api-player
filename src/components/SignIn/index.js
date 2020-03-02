import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="signin">
    <div className="opacity-layer"></div>
    <section className="section-greet">
      <div className="signin-message">
        <div className="message-item">
          <p className="welcome">Welcome!</p>
        </div>
        <div className="message-item">
          <p>The VS Spotify Player is a study case for the <a className="highlight-text" href="https://developer.spotify.com/documentation/web-api">Spotify Web API</a></p>
          <p>Both this Application and the Wrapper used to access the API can be found at the following repositories:</p>
        </div>
        <div className="message-item">
          <div className="lg-repo">
            <span className="highlight-text">vs-spotify-api-player:</span>
            <a href="https://github.com/vitorjsls30/vs-spotify-api-player"className="main-text">https://github.com/vitorjsls30/vs-spotify-api-player</a>
          </div>
          <div className="lg-repo">
            <span className="highlight-text">spotify-api-wrapper: </span>
            <a href="https://github.com/vitorjsls30/spotify-api-wrapper" className="main-text">https://github.com/vitorjsls30/spotify-api-wrapper</a>
          </div>
          <div className="mobile-repo">
            <a href="https://github.com/vitorjsls30/vs-spotify-api-player"className="main-text highlight-text">vs-spotify-api-player</a>
          </div>
          <div className="mobile-repo">
            <a href="https://github.com/vitorjsls30/spotify-api-wrapper" className="main-text highlight-text">spotify-api-wrapper</a>
          </div>
        </div>
        <div className="message-item">
          <div>Hope you enjoy it ;)</div>
          <div className="signin-btn-holder">
            <Link to={`/Dashboard`}>
              <button className="sign-btn">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default SignIn;