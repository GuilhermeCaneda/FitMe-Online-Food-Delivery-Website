import styles from "./Register.module.css";
import Logo from "../../components/Logo/Logo";
import FormField from "../../components/FormField/FormField";
import FormButton from "../../components/FormButton/FormButton";
import Footer from "../../components/Footer/Footer";

const Register: React.FC = () => {

    const handleSubmit = () => {
        return;
    }
    
    const handleLogin = () => {
        return;
    }

    return (
        <section>
            <div className={styles.titlepage}>
                <Logo/>
                <h6>Register</h6>
            </div>
            <p className={styles.notify}>Please Fill out form to Register!</p>
            <form className={styles.loginform} onSubmit={handleSubmit}>
                <FormField label="Full name" type="text"/>
                <FormField label="Username" type="text"/>
                <FormField label="E-mail" type="email"/>
                <FormField label="Password" type="password"/>
                <FormField label="Confirm Password" type="password"/>
                <FormButton text="Register"/>
                <p>Yes I have an account? <button onClick={handleLogin}>Register</button></p>
            </form>

            <Footer/>
        </section>
    )
}

export default Register;