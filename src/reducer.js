const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "GET_STORIES":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
          nbPages: action.payload.nbPages,
        };
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "REMOVE_POST":
        return {
          ...state,
          hits: state.hits.filter((currPost) => currPost.objectID !== action.payload),
        };
      case "SEARCH_POST":
        return {
          ...state,
          query: action.payload,
        };
      case "NEXT_PAGE":
        return {
          ...state,
          page: Math.min(state.page + 1, state.nbPages - 1),
        };
      case "PREV_PAGE":
        return {
          ...state,
          page: Math.max(0, state.page - 1),
        };
    }
  };
  
  export default reducer;
  