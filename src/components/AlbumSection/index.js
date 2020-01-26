import React from "react";

import RecentSearch from "./RecentSearch";
import SearchResult from "./SearchResult";
import wrapperIntegration from "../../services";

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = new wrapperIntegration().wrapper;
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
  }

  render() {
    return (
      <section className="section-album">
        <RecentSearch albums={this.props.recentSearch} />
        <SearchResult albums={this.props.searchResult} />
      </section>
    );
  }
}

export default AlbumSection;
