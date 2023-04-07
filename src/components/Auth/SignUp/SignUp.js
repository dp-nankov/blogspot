import styles from './SignUp.module.css';
import { useForm } from '../../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';


export default function SignUp() {
    const { onSignupSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        repass: ''
    }, onSignupSubmit);
    
    return (
        <section className={styles["register-form"]}>
            <div className="label">
                <p>Sign up</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className={styles["form-group"]}>
                    <input id="firstName" type="text" name="firstName" placeholder="First name" value={values.firstName} onChange={changeHandler} />
                    <p className={styles["error"]}>First name is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="lastName" type="text" name="lastName" placeholder="Last name" value={values.lastName} onChange={changeHandler} />
                    <p className={styles["error"]}>Last name is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="email" type="text" name="email" placeholder="E-mail" value={values.email} onChange={changeHandler} />
                    <p className={styles["error"]}>E-mail is required!</p>
                    <p className={styles["error"]}>E-mail is invalid!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="username" type="text" name="username" placeholder="Username" value={values.username} onChange={changeHandler} />
                    <p className={styles["error"]}>Username is required!</p>
                    <p className={styles["error"]}>Username must be at least 6 characters!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="password" type="password" name="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                    <p className={styles["error"]}>Password is required!</p>
                    <p className={styles["error"]}>Password must be at least 8 characters!</p>
                </div>

                <div className={styles["form-group"]}>
                    <input id="repass" type="password" name="repass" placeholder="Repeat password" value={values.repass} onChange={changeHandler}/>
                    <p className={styles["error"]}>Passwords does not match!</p>
                </div>

                <button>Sign Up</button>
                <p class="server-error">Error msg</p>
            </form>
        </section>
    );
}