import styles from "./FormButton.module.css"

interface FormButtonProps{
    text: String
}

const FormButton: React.FC<FormButtonProps> = (props) => {
    return(
        <div className={styles.content}>
            <button type="submit">{props.text}</button>
        </div>
    )
}

export default FormButton;