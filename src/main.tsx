import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import AuthStore from "./store/AuthStore.ts";
import PromocodeStore from "./store/PromocodesStore.ts";
import BonusStore from "./store/BonusStore.ts";

interface State{
    store: {
        AuthStore: AuthStore,
        BonusStore: BonusStore,
        PromocodesStore: PromocodeStore,
    }
}

export const store = {
    AuthStore: new AuthStore(),
    BonusStore: new BonusStore(),
    PromocodesStore: new PromocodeStore(),
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
