import styles from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import FormLogin from "../../components/FormLogin/FormLogin";

const Login: React.FC = () => {
    return (
        <section className={styles.content}>
            <div className={styles.titlepage}>
                <Logo/>
                <h6>Login</h6>
            </div>
            <FormLogin/>
        </section>
    )
}

export default Login;