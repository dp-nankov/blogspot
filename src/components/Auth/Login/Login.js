import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import styles from './Login.module.css';


export default function Login(){
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);


    return (
        <section className={styles["login-form"]}>
        <div className = 'label'>
            <p>Sign in</p>
        </div>
        <form className={styles["form"]} onSubmit={onSubmit}>
            <div className={styles["form-group"]}>
                <input id="email" type="text" name="email" placeholder="E-mail" value={values.email} onChange={changeHandler}/>
                <p className={styles["error"]}>E-mail is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="pass" name="password" type="password" placeholder="Password" value={values.password} onChange={changeHandler}/>
                <p className={styles["error"]}>Password is required!</p>
            </div>

            <button>Sign In</button>
            <p className="server-error">Server error</p>
        </form>
    </section>
    );
}