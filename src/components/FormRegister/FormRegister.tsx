import React from 'react'
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import styles from "./FormRegister.module.css";
import {useNavigate} from "react-router-dom";


const FormRegister = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }
    
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div className={styles.content}>
            <form className={styles.registerform} onSubmit={handleSubmit}>
                <FormField label="Full name" type="text"/>
                <FormField label="Username" type="text"/>
                <FormField label="E-mail" type="email"/>
                <FormField label="Password" type="password"/>
                <FormField label="Confirm Password" type="password"/>
                <FormButton text="Register"/>
                <p>Yes I have an account? <button onClick={handleLogin}>Register</button></p>
            </form>
        </div>
        
    )
}

export default FormRegister;