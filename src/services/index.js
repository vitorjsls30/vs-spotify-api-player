import spotifyApiWrapper from 'vs-spotify-api-wrapper';

class WrapperIntegration {
    constructor() {
        this.wrapper = new spotifyApiWrapper({
            clientId: 'a3909a54308c4cb780b07d305e797cb6',
            redirectUri: 'http://localhost:8080'
        });
    }
}

export default WrapperIntegration;