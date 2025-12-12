import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";

interface LayoutProps{
    Component: React.FC
}

const PageLayout:React.FC<LayoutProps> = ({Component}) => {
    // const {store} = useContext(Context)

    useEffect(() => {
        (async function(){
            //example
            // if (!store.CoffeeMachinesStore.brandList){
            //     await store.CoffeeMachinesStore.getBrandsList()
            // }
        })()
    }, []);

    return (
        <>
            {/*{*/}
            {/*    (*/}
            {/*        store.AuthStore.isLoading*/}
            {/*    ) &&*/}
            {/*    <Loader/>*/}
            {/*}*/}
            <Component/>
        </>
    );
};

export default observer(PageLayout);