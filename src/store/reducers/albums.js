const initialState = {
  recentSearch: [],  
  albums: [],  
};

export default function albums(state = initialState) {
  return { recentSearch: state.recentSearch };
}