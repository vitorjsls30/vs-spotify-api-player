export const loadRecentSearch = (lastSearch) => {
  return {
    type: 'LOAD_RECENT_SEARCH',
    lastSearch
  };
};

export const loadSearchResult = (searchResult) => {
  return {
    type: 'LOAD_SEARCH_RESULT',
    searchResult
  };
}
