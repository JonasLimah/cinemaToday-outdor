import { useEffect,useState } from "react"
import { Header } from "./components/Header";
import { Body} from "./components/Body"

export const App = () => {
    return(
        <div>
            <Header />
            <Body />
        </div>
    );
}