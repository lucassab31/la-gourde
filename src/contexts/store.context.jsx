import persist from "mst-persist";
import {createContext, useContext, useState, useEffect} from "react"
import { rootStore } from "stores/root.store";


const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const {children} = props;

    const [isLoading, setIsloading] = useState(true)

    const initStore = async() => {
        persist('all', rootStore, {
            storage: localStorage
        }).then(()=>{
            console.log('done !')
            setIsloading(false);
        }).catch((err)=>{
            console.log(err);
            setIsloading();
        })
    }

    useEffect(()=>{
        initStore();
    }, [])

    return isLoading ? <p>loading...</p> : <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);