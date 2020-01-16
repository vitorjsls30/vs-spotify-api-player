import React from "react";

import RecentSearch from "./RecentSearch";
import SearchResult from "./SearchResult";
import wrapperIntegration from "../../services";

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);

    this.wrapper = new wrapperIntegration().wrapper;

    this.state = {
      recentSearch: [],
      searchResult: []
    };
  }

  validateWrapper() {
    const wrapper = this.wrapper;
    wrapper.session.getUriParams();

    if (
      wrapper.session.checkTokenExpiration() ||
      !wrapper.session.getoAuthState("access_token")
    ) {
      console.log("Authorizing....");
      wrapper.session.authorize();
    } else {
      console.log("Authorized!");
    }
  }

  componentDidMount() {
    this.validateWrapper();

    // We're going to mock this value for now...
    // The recentSearch array should come from the wrapper...
    // The searchResult should come only after the user performs a search...
    const recentSearch = this.state.recentSearch;
    const searchResult = this.state.searchResult;
    this.setState({ recentSearch, searchResult });
  }

  render() {
    return (
      <section className="section-album">
        <RecentSearch albums={this.state.recentSearch} />
        <SearchResult albums={this.state.searchResult} />
      </section>
    );
  }
}

export default AlbumSection;
