import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import styles from "./FormRegister.module.css";
import {useNavigate} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from '../../context/AuthContext';

const FormRegister = () => {
    const authContext = useContext(AuthContext);

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [status, setStatus] = useState<Number>();
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<string>('');


    const navigate = useNavigate();

    const handleFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    }
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }


    const uploadData = async () => {
        try{
            console.log("Conectando a API");
            const response = await axios.post('https://parseapi.back4app.com/graphql', 
                
            {
                query: `
                    mutation SignUp{
                        signUp(input: {
                        fields: {
                            username: "${username}"
                            password: "${password}"
                        }
                        }){
                        viewer{
                            user{
                            id
                            createdAt
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
        
                console.log('Response: ', response);
                setStatus(response.status);
                if(response.status==200){
                    setToken(response.data.data.logIn.viewer.sessionToken);
                    setUser(response.data.data.logIn.viewer.user.username);
                }
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
    }

    useEffect(() => {
        if(status==201 && authContext){
            authContext.logIn(user, token);
            console.log(authContext);
            navigate('/');
        }
    }, [status]);
    
    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className={styles.content}>
            <form className={styles.registerform} onSubmit={handleSubmit}>
                <FormField label="Full name" type="text" onChange={handleFullName}/>
                <FormField label="Username" type="text" onChange={handleUsername}/>
                <FormField label="E-mail" type="email" onChange={handleEmail}/>
                <FormField label="Password" type="password" onChange={handlePassword}/>
                <FormField label="Confirm Password" type="password" onChange={handleConfirmPassword}/>
                <FormButton text="Register"/>
                <p>Yes I have an account? <button onClick={handleLogin}>Login</button></p>
            </form>
        </div>
        
    )
}

export default FormRegister;