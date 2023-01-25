
import styles from "./Header/Header.module.css"
export const Header = () => {
    return(
        <div>
            <header className={styles.header}>
                <h1><span>Cinema</span>Today</h1>
            </header>
        </div>
    );
}