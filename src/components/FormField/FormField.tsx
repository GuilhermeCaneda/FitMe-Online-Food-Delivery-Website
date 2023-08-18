import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import styles from "./FormField.module.css"

interface FormFieldProps {
    label: string, 
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = props => {
    return(
        <div className={styles.content}>
            <label>{props.label}</label>
            <input type={props.type} onChange={props.onChange}/>
        </div>
    )
}

export default FormField;