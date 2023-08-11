import styles from "./Header.module.css"

const Header: React.FC = () => {

    const handleRegister = () => {
        return;
    }

    return (
        <header className={styles.content}>
            <figure>
                <svg>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.27414C0 -0.00536072 5.35289 -0.948061 7.80629 2.55836C10.2648 6.07204 11.7134 10.3468 11.7301 14.9596C11.7301 10.3873 13.1371 6.14426 15.5409 2.64121C17.8898 -0.781849 23.0647 0.122685 23.0647 4.27415V9.76576C23.0647 16.1349 17.9015 21.2981 11.5324 21.2981C5.16321 21.2981 0 16.1349 0 9.76575V4.27414Z" fill="#FC8019"/>
                </svg>
                <h5>FitMe</h5>
            </figure>

            <div>
                <input type="text" placeholder="Enter item or restaurant you are looking for"></input>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M19.2857 14.4285V7.88092C19.2857 6.49169 18.7777 5.15936 17.8735 4.17702C16.9693 3.19469 15.743 2.64282 14.4643 2.64282C13.1855 2.64282 11.9592 3.19469 11.055 4.17702C10.1508 5.15936 9.64282 6.49169 9.64282 7.88092V14.4285" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="5.28577" y="10.0714" width="18.3571" height="18.3571" rx="3.6" stroke="#202020" stroke-width="2"/>
                </svg>
                
                <button onClick={handleRegister}>Sign In</button>
            </div>
        </header>
    )
}

export default Header;