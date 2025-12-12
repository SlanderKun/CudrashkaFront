import {observer} from "mobx-react-lite";
import {Controller, type SubmitHandler, useForm, useFormState} from "react-hook-form";
import React, { useContext, useState} from "react";
import {Context} from "../../../main.tsx";
import styles from "./styles.module.css"
import {Button, TextField} from "@mui/material";

export interface IFormData{
    phone: string,
    password: string
}

const LoginForm: React.FC = () => {
    const {store} = useContext(Context)
    const [isLogin, setIsLogin] = useState(true)
    // const ref:RefObject<HTMLFormElement> = useRef(null)

    // useKeyCode(ref, 'Enter', enterSubmit)

    const { handleSubmit, control} = useForm<IFormData>({
        defaultValues: {
            phone: '',
            password: '',
        }
    })
    const { errors } = useFormState({
        control
    })

    const onSubmit: SubmitHandler<IFormData> = async(fields) => {
        try {
            if (isLogin) {
                await store.AuthStore.login({phone: fields.phone, password: fields.password})
            } else {
                await store.AuthStore.register({phone: fields.phone, password: fields.password})
            }
        } catch (e) {
            console.log(e)
            alert('Произошла ошибка при авторизации.')
        }
    }
    return (
        <div className={styles.background}>

            <form className={styles.modal} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.headerText}>{isLogin ? "Sign in" : "Sign up"}</h2>
                <div className={styles.buttonsList}>
                    <Controller
                        control={control}
                        name={"phone"}
                        rules={{required: 'Must be filled'}}
                        render={({field}) => (
                            <TextField
                                label={"Phone"}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                className={styles.formInput}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '8px',
                                    },
                                }}
                                fullWidth={true}
                                error={!!errors.phone?.message}
                                helperText={errors.phone?.message}
                                autoComplete={'on'}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={"password"}
                        rules={{required: 'Must be filled'}}
                        render={({field}) => (
                            <TextField
                                label={"Password"}
                                type={"password"}
                                className={styles.formInput}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '8px',
                                    },
                                }}
                                fullWidth={true}
                                error={!!errors.password?.message}
                                helperText={errors.password?.message}
                                autoComplete={'on'}
                            />
                        )}
                    />
                </div>
                <Button
                    type={'submit'}
                    fullWidth={true}
                    className={styles.submitButton}
                    sx={{
                        backgroundColor: '#EDA334',
                        borderRadius: '20px',
                        '& .MuiInputBase-root': {
                            borderRadius: '20px',
                        },
                    }}
                    variant="contained"
                >
                    {isLogin ? "Sign in" : "Sign up"}
                </Button>
                <div className={styles.subButton}>
                    <p className={styles.subButton__text}>{isLogin ? "not account?" : "have account?"}</p>
                    <p className={styles.subButton__Button} onClick={() => setIsLogin((prev) => (!prev))}> Go to {isLogin ? "sign up" : "sign in"}</p>
                </div>
            </form>
            <div style={{left: '39px', top: '46px', height: "128px", width: "128px"}} className={styles.circle}></div>
            <div style={{left: '160px', top: '145px', height: "63px", width: "63px"}} className={styles.circle}></div>
            <div style={{left: '400px', top: '750px', height: "163px", width: "163px"}} className={styles.circle}></div>
            <div style={{left: '506px', top: '829px', height: "105px", width: "105px"}} className={styles.circle}></div>
        </div>
    );
};

export default observer(LoginForm);