import styles from './SignUp.module.css';


export default function SignUp() {


    return (
        <section className={styles["register-form"]}>
            <div class="label">
                <p>Sign up</p>
            </div>
            <form>
                <div className={styles["form-group"]}>
                    <input id="first-name" type="text" name="first-name" placeholder="First name" />
                    <p className={styles["error"]}>First name is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="last-name" type="text" name="last-name" placeholder="Last name" />
                    <p className={styles["error"]}>Last name is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="email" type="text" name="email" placeholder="E-mail" />
                    <p className={styles["error"]}>E-mail is required!</p>
                    <p className={styles["error"]}>E-mail is invalid!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="username" type="text" name="username" placeholder="Username" />
                    <p className={styles["error"]}>Username is required!</p>
                    <p className={styles["error"]}>Username must be at least 6 characters!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="pass" type="password" name="pass" placeholder="Password" />
                    <p className={styles["error"]}>Password is required!</p>
                    <p className={styles["error"]}>Password must be at least 8 characters!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="repass" type="password" name="repass" placeholder="Repeat password" />
                    <p className={styles["error"]}>Passwords does not match!</p>
                </div>

                <button>Sign Up</button>
                <p class="server-error">Error msg</p>
            </form>
        </section>
    );
}