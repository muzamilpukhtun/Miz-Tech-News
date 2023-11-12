import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

//api url
let api = "https://hn.algolia.com/api/v1/search?";

//initial state defination
const initialState = {
  isloading: true,
  query: "html",
  nbPages: 0,
  page: 0,
  hits: [],
};

//context creation
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //api fetching || data fetching through api
  const fetchapi = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (postID) => {
    dispatch({ type: "REMOVE_POST", payload: postID });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_POST", payload: searchQuery });
  };


  const getNEXTPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  
  const getPREVPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    fetchapi(`${api}query=${state.query}&page=${state.page}`); // Add "=" after "page"
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost,getPREVPage,getNEXTPage, }}>
      {children}
    </AppContext.Provider>
  );
};

//user define hook or custom hook kisi ik hook ko ik function ma return krwa do with use uska nam ka sath to wo custom hook ban jati ha
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
