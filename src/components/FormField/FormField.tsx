import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import styles from "./FormField.module.css"

interface FormFieldProps {
    label: string, 
    type: string
}

const FormField: React.FC<FormFieldProps> = props => {
    return(
        <div className={styles.content}>
            <label>{props.label}</label>
            <input type={props.type}/>
        </div>
    )
}

export default FormField;