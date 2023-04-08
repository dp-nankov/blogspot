import styles from './SignUp.module.css';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';
import * as authService from '../../../services/authService';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({});
    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        repass: ''
    }, onSignupSubmit);
    
    const navigate = useNavigate();

    async function onSignupSubmit(data) {
        if (formValidation()) {
            try {
                await authService.signup(data);
                setServerError(p => null);
                navigate('/login', {replace: true});
            } catch (er) {
                setServerError(p => true)
            }
        }
	}

    function formValidation() {
        let valid = true;

        if (values.firstName === "") {
            valid = false;
            setErrors(p => ({ ...p, reqFname: true }))
        } else {
            setErrors(p => ({ ...p, reqFname: false }))
        }

        if (values.lastName === "") {
            valid = false;
            setErrors(p => ({ ...p, reqLname: true }))
        } else {
            setErrors(p => ({ ...p, reqLname: false }))
        }

        if (values.email === "") {
            valid = false;
            setErrors(p => ({ ...p, reqEmail: true }))
        } else {
            setErrors(p => ({ ...p, reqEmail: false }))
        }

        if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(values.email)) {
            valid = false;
            setErrors(p => ({ ...p, invalidEmail: true }))
        } else {
            setErrors(p => ({ ...p, invalidEmail: false }))
        }

        if (values.username === "") {
            valid = false;
            setErrors(p => ({ ...p, reqUsername: true }))
        } else {
            setErrors(p => ({ ...p, reqUsername: false }))
        }

        if (values.username.length < 6 && values.username !== "") {
            valid = false;
            setErrors(p => ({ ...p, lenUsername: true }))
        } else {
            setErrors(p => ({ ...p, lenUsername: false }))
        }

        if (values.password === "") {
            valid = false;
            setErrors(p => ({ ...p, reqPass: true }))
        } else {
            setErrors(p => ({ ...p, reqPass: false }))
        }

        if (values.password.length < 8) {
            valid = false;
            setErrors(p => ({ ...p, lenPass: true }))
        } else {
            setErrors(p => ({ ...p, lenPass: false }))
        }

        if (values.password !== values.repass) {
            valid = false;
            setErrors(p => ({ ...p, passMatch: true }))
        } else {
            setErrors(p => ({ ...p, passMatch: false }))
        }

        return valid;
    }

    return (
        <section className={styles["register-form"]}>
            <div className="label">
                <p>Sign up</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className={styles["form-group"]}>
                    <input id="firstName" type="text" name="firstName" placeholder="First name" value={values.firstName} onChange={changeHandler} />
                    {errors.reqFname && <p className={styles["error"]}>First name is required!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="lastName" type="text" name="lastName" placeholder="Last name" value={values.lastName} onChange={changeHandler} />
                    {errors.reqLname && <p className={styles["error"]}>Last name is required!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="email" type="text" name="email" placeholder="E-mail" value={values.email} onChange={changeHandler} />
                    {errors.reqEmail && <p className={styles["error"]}>E-mail is required!</p>}
                    {errors.invalidEmail && <p className={styles["error"]}>E-mail is invalid!</p>}
                </div>

                <div className={styles["form-group"]}>
                    <input id="username" type="text" name="username" placeholder="Username" value={values.username} onChange={changeHandler} />
                    {errors.reqUsername && <p className={styles["error"]}>Username is required!</p>}
                    {errors.lenUsername && <p className={styles["error"]}>Username must be at least 6 characters!</p>}
                </div>

                <div className={styles["form-group"]}>
                    <input id="password" type="password" name="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                    {errors.reqPass && <p className={styles["error"]}>Password is required!</p>}
                    {errors.lenPass && <p className={styles["error"]}>Password must be at least 8 characters!</p>}
                </div>

                <div className={styles["form-group"]}>
                    <input id="repass" type="password" name="repass" placeholder="Repeat password" value={values.repass} onChange={changeHandler}/>
                    {errors.passMatch && <p className={styles["error"]}>Passwords does not match!</p>}
                </div>

                <button>Sign Up</button>
                {serverError && <p class="server-error">Invalid data!</p>}
            </form>
        </section>
    );
}