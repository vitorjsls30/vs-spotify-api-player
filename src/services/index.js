import spotifyApiWrapper from 'vs-spotify-api-wrapper';

const wrapperInstance = new spotifyApiWrapper({
    clientId: 'a3909a54308c4cb780b07d305e797cb6',
    redirectUri: 'http://localhost:8080',
    useLocalStorage: true
});

export default wrapperInstance;