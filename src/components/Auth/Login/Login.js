import styles from './Login.module.css';


export default function Login(){


    return (
        <section className={styles["login-form"]}>
        <div className = 'label'>
            <p>Sign in</p>
        </div>
        <form className={styles["form"]}>
            <div className={styles["form-group"]}>
                <input id="email" type="text" name="email" placeholder="E-mail"/>
                <p className={styles["error"]}>E-mail is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="pass" name="pass" type="password" placeholder="Password"/>
                <p className={styles["error"]}>Password is required!</p>
            </div>

            <button>Sign In</button>
            <p className="server-error">Server error</p>
        </form>
    </section>
    );
}