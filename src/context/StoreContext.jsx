import { createContext, useContext, useEffect, useState } from "react";
import services from "../services/services";
import { AuthContext } from "./AuthContext";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const { fetchBoards } = services();
    const {user}=useContext(AuthContext);
    const [fetchLoading,setfetchLoading]=useState(true);
    const [boards, setBoards] = useState([]);
    const fetch = async () => {
        try {
            const data = await fetchBoards();
            setBoards(data);
            setfetchLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetch();
    },[user])
    const refetch=async()=>{
        setfetchLoading(true);
        await fetch();
    }
    return (
        <StoreContext.Provider value={{ boards, setBoards,fetchLoading,refetch }}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider