import styles from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";

const Login: React.FC = () => {
    const handleSubmit = () => {
        return;
    }
    
    const handleRegister = () => {
        return;
    }

    return (
        <section>
            <div className={styles.titlepage}>
                <Logo/>
                <h6>Login</h6>
            </div>
            
            <form className={styles.loginform} onSubmit={handleSubmit}>
                <FormField label="Username" type="text"/>
                <FormField label="Password" type="password"/>
                <p>Don't have any account? <button onClick={handleRegister}>Register</button></p>
                <FormButton text="Login"/>
            </form>
            <Footer/>
        </section>
    )
}

export default Login;