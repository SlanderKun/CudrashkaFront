import React from 'react';
import {observer} from "mobx-react-lite";
import LoginBackground from "../../components/LoginPage/LoginBackground/LoginBackground.tsx";
import LoginForm from "../../components/LoginPage/LoginForm/LoginForm.tsx";
//fix

const LoginPage: React.FC = () => {
    return (
        <>
            <LoginBackground>
                <LoginForm></LoginForm>
            </LoginBackground>
        </>
    );
};

export default observer(LoginPage);