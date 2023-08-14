import React from 'react'
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import {useNavigate} from "react-router-dom";
import styles from "./FormLogin.module.css"

const FormLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    const handleRegister = () => {
        navigate('/register');
    }
    
    return (
        <form className={styles.loginform} onSubmit={handleSubmit}>
            <FormField label="Username" type="text"/>
            <FormField label="Password" type="password"/>
            <p>Don't have any account? <button onClick={handleRegister}>Register</button></p>
            <FormButton text="Login"/>
        </form>
    )
}

export default FormLogin;