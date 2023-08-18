import React,{useEffect, useState} from 'react'
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import {useNavigate} from "react-router-dom";
import styles from "./FormLogin.module.css"
import axios from 'axios';

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

    
    const uploadData = async () => {
        try{
            console.log("Conectando a API");
            const response = await axios.post('https://parseapi.back4app.com/graphql', 
                
            {
                query: `
                    mutation LogIn{
                        logIn(input: {
                        username: "${username}"
                        password: "${password}"
                        }){
                        viewer{
                            user{
                                id
                                createdAt
                                updatedAt
                                username
                            }
                            sessionToken
                        }
                        }
                    }
                `
            },  {headers: {
                        'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
                        'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
                        'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
                        'Content-Type': 'application/json'
                    }
                });
        
            console.log('Response: ', response.data.data.logIn);
        } catch(error){
            console.log("erro: " + error);
            console.error(error);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("username: " + username);
        console.log("password: " + password);
        uploadData();
        //navigate('/');
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