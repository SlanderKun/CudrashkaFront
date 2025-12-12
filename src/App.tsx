import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import PageLayout from "./shared/UI/PageLayout/PageLayout.tsx";
import {Context} from "./main.tsx";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import BonusPage from "./pages/Bonus/BonusPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

function App() {
    const {store} = useContext(Context);

    useEffect(() => {
        (async function (){
            if (localStorage.getItem('token')) {
                await store.AuthStore.checkAuth()
            }
            // await store.AuthStore.login({
            //     phone: "+79324843821",
            //     password: "+123456"
            // })
        })()
        console.log(!store.AuthStore, store.AuthStore.isAuth && !store.AuthStore.isLoading)
    }, [])
    return (
        <div>
            {
                store.AuthStore.isAuth && !store.AuthStore.isLoading ? (
                    <Routes>
                        <Route path="home/" element={<PageLayout Component={HomePage}/>} />
                        <Route path="*" element={<Navigate to={'/home/'} replace={true}/>}/>
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='login/' element={<LoginPage/>} />
                        <Route path='*' element={<Navigate to={'/login/'} replace={true}/>}/>
                    </Routes>
                )
            }
        </div>
    )
}

export default observer(App)
