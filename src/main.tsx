import {createContext, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

interface State{
    store: {
        //example
        //AuthStore: AuthStore, - AuthStore это класс стейт менеджера, в даннном случае моб х
    }
}

export const store = {
}

export const Context = createContext<State>({
    store,
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Context value={{store}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context>
    </StrictMode>,
)
