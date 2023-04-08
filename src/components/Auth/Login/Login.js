import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import * as authService from '../../../services/authService';
import styles from './Login.module.css';


export default function Login() {
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({});
    const { setAuth } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);

    async function onLoginSubmit(data) {
        if (formValidation()) {
            try {
                const result = await authService.login(data);
                setAuth((p) => result)
                setServerError(p => null)
            } catch (er) {
                setServerError(p => true)
            }
        }
    }

    function formValidation() {
        let valid = true;

        if (values.email === "") {
            valid = false;
            setErrors(p => ({ ...p, reqEmail: true }))
        } else {
            setErrors(p => ({ ...p, reqEmail: false }))
        }

        if (values.password === "") {
            valid = false;
            setErrors(p => ({ ...p, reqPass: true }))
        } else {
            setErrors(p => ({ ...p, reqPass: false }))
        }

        return valid;
    }


    return (
        <section className={styles["login-form"]}>
            <div className='label'>
                <p>Sign in</p>
            </div>
            <form className={styles["form"]} onSubmit={onSubmit}>
                <div className={styles["form-group"]}>
                    <input id="email" type="text" name="email" placeholder="E-mail" value={values.email} onChange={changeHandler} />
                    {errors.reqEmail && <p className={styles["error"]}>E-mail is required!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="pass" name="password" type="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                    {errors.reqPass && <p className={styles["error"]}>Password is required!</p>}
                </div>

                <button>Sign In</button>
                {serverError && (<p className="server-error">Invalid data!</p>)}
            </form>
        </section>
    );
}