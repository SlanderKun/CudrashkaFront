import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootStoreProvider, RootStoreContext } from './store/RootStore';
import { PagesRouter } from './PagesRouter';
import { Header } from './components/Layout/Header';

const contentStyle: React.CSSProperties = {
    paddingBottom: '20px', 
    minHeight: 'calc(100vh - 60px)'
};

const ContentWrapper: React.FC = () => {
    const { user } = React.useContext(RootStoreContext); 


    const showHeader = user.isLoggedIn;

    return (
        <React.Fragment>
            {}
            {showHeader && <Header />}

            {}
            <main style={contentStyle}>
                <PagesRouter />
            </main>

            {}
        </React.Fragment>
    );
};

const App: React.FC = () => {
    return (
        <RootStoreProvider>
            <BrowserRouter>
                <ContentWrapper />
            </BrowserRouter>
        </RootStoreProvider>
    );
};

export default App;