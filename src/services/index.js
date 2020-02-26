import spotifyApiWrapper from 'vs-spotify-api-wrapper';

let wrapperInstance = null;

const spotifyWrapper = () => {
    if (!wrapperInstance) {
        wrapperInstance = new spotifyApiWrapper({
            clientId: 'a3909a54308c4cb780b07d305e797cb6',
            redirectUri: 'https://vs-spotify-player-staging.herokuapp.com',
            useLocalStorage: true
        });
        return wrapperInstance;
    }
    return wrapperInstance;
}


export default spotifyWrapper;