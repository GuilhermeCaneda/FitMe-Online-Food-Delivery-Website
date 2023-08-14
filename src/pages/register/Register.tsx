import styles from "./Register.module.css";
import Logo from "../../components/Logo/Logo";
import FormRegister from "../../components/FormRegister/FormRegister";

const Register: React.FC = () => {
    return (
        <section>
            <div className={styles.titlepage}>
                <Logo/>
                <h6>Register</h6>
            </div>
            <p className={styles.notify}>Please Fill out form to Register!</p>
            <FormRegister/>
        </section>
    )
}

export default Register;