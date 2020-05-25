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
  }
  return state;
}