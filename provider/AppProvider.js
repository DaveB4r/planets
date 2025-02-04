import {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites ? favorites : "";
  } catch (error) {
    console.error("Error:", error);
  }
};

const initialState = {
  favorites: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      const favorites = await getFavorites();
      dispatch({ type: "SET_FAVORITES", payload: favorites });
    };
    fechData();
  }, [refresh]);

  const addFavorite = async (value) => {
    const favorites = await getFavorites();
    const arrayFavorites = favorites ? favorites.split(",") : [];
    arrayFavorites.push(value);
    const newFavorites = arrayFavorites.join(",");
    await AsyncStorage.removeItem("favorites");
    await AsyncStorage.setItem("favorites", newFavorites);
    dispatch({ type: "SET_FAVORITES", payload: newFavorites });
  };

  const removeFavorite = async (value) => {
    const favorites = await getFavorites();
    const arrayFavorites = favorites ? favorites.split(",") : [];
    const newFavorites = arrayFavorites
      .filter((favorite) => favorite !== value)
      .join(",");
    await AsyncStorage.removeItem("favorites");
    await AsyncStorage.setItem("favorites", newFavorites);
    dispatch({ type: "SET_FAVORITES", payload: newFavorites });
  };

  return (
    <AppContext.Provider
      value={{ favorites: state.favorites, addFavorite, removeFavorite, setRefresh }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, useAppContext };
