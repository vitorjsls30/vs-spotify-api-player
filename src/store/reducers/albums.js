const initialState = {
  term: '',
  recentSearch: [],  
  searchResult: [],  
};

export default function albums(state = initialState, action) {
  console.log('ACTION RECEIVED...', action );
  switch (action.type) {
    case 'LOAD_RECENT_SEARCH':
      return { ...state, recentSearch: action.lastSearch };
    case 'LOAD_SEARCH_RESULT':
      return { ...state, searchResult: action.searchResult };
  }
  return state;
}