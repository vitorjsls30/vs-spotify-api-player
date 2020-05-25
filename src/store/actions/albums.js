export const loadRecentSearch = (lastSearch) => {
  console.log('CALLED loadRecentSearch ACTION...', lastSearch);
  return {
    type: 'LOAD_RECENT_SEARCH',
    lastSearch
  };
};