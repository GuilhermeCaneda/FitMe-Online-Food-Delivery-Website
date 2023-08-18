import React,{useEffect, useState} from 'react'
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import {useNavigate} from "react-router-dom";
import styles from "./FormLogin.module.css"

const FormLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/');
    }

    const handleRegister = () => {
        navigate('/register');
    }
    
    return (
        <div className={styles.content}>
            <form className={styles.loginform} onSubmit={handleSubmit}>
                <FormField label="Username" type="text" onChange={handleUsername}/>
                <FormField label="Password" type="password" onChange={handlePassword}/>
                <p>Don't have any account? <button onClick={handleRegister}>Register</button></p>
                <FormButton text="Login"/>
            </form>
        </div>
        
    )
}

export default FormLogin;