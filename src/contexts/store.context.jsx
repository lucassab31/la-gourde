import persist from "mst-persist";
import { rootStore } from "stores/root.store";
const { createContext, useContext, useState, useEffect } = require("react");

const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState(true);

  const initStore = async () => {
    persist("all", rootStore, {
      storage: localStorage,
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading();
      });
  };

  useEffect(() => {
    initStore();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
