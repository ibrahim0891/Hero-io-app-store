/* eslint-disable react-refresh/only-export-components */

import { ChartLine } from "lucide-react";
import { createContext,   useContext, useState } from "react";



export const CountContext = createContext()


export default function AppCountContext({ children }) {
    const [count, setCount] = useState(0)
    return <CountContext.Provider value={{ count, setCount }}>
        {children}
    </CountContext.Provider>
};


export function useCountContext() {
    let { count, setCount } = useContext(CountContext)
    return { count, setCount }
}