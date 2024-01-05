import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer, { initialState } from "./storeReducer";
import { TYPES } from "./types";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const baseURL = `https://6461b3a7-d682-4602-9bf9-5d6b02e23de6-00-1gthm57ynopid.hacker.replit.dev`;
  useEffect(() => {
    axios
      .get(`${baseURL}/products`)
      .then((productsJson) => {
        dispatch({
          type: TYPES.SET_PRODUCTS,
          payload: { data: productsJson.data },
        });
      })
      .catch((error) => console.error(error));
  }, [baseURL]);
  useEffect(() => {
    dispatch({
      type: TYPES.ON_INITIALISATION
    })
  }, [state.filters])

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
