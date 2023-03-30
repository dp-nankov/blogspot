import styles from './Header.module.css';

export default function Header() {


    return (
        <header className={styles.header}>
            <div className = {styles.logoDiv}>
                <h1>Blogspot</h1>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
            </nav>
            <div className = {styles.authBtns}>
                <a href="#"><button>Login</button></a>
                <a href="#"><button>Sign Up</button></a>
            </div>
        </header>
    );
}