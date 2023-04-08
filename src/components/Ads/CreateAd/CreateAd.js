import styles from './CreateAd.module.css';
import { useForm } from '../../../hooks/useForm';
import * as adService from '../../../services/adService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreateAd() {
    const [serverError, setServerError] = useState(null);
    const [errors, setErrors] = useState({});
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        price: '',
        imgUrl: ''
    }, onCreateSubmit);

    const navigate = useNavigate();

    async function onCreateSubmit(event) {
        if (formValidation()) {
            try {
                await adService.create({ ...values })
                setServerError(p => null)
                navigate('/ads', {replace: true});
            } catch (er) {
                setServerError(p => true)
            }
        }
    }

    function formValidation() {
        let valid = true;

        if (values.title === "") {
            valid = false;
            setErrors(p => ({ ...p, reqTitle: true }))
        } else {
            setErrors(p => ({ ...p, reqTitle: false }))
        }

        if (values.description === "") {
            valid = false;
            setErrors(p => ({ ...p, reqDesc: true }))
        } else {
            setErrors(p => ({ ...p, reqDesc: false }))
        }

        if (values.price === "") {
            valid = false;
            setErrors(p => ({ ...p, reqPrice: true }))
        } else {
            setErrors(p => ({ ...p, reqPrice: false }))
        }

        if (!/^[+-]?\d+(\.\d{2})?$/.test(values.price) && values.price !== "") {
            valid = false;
            setErrors(p => ({ ...p, invalidPrice: true }))
        } else {
            setErrors(p => ({ ...p, invalidPrice: false }))
        }

        if (values.imgUrl === "") {
            valid = false;
            setErrors(p => ({ ...p, reqImg: true }))
        } else {
            setErrors(p => ({ ...p, reqImg: false }))
        }

        return valid;
    }


    return (
        <section className={styles["create-form"]}>
            <div className="label">
                <p>Create New Ad</p>
            </div>
            <form className={styles['form']} onSubmit={onSubmit}>
                <div className={styles["form-group"]}>
                    <input id="title" type="text" name="title" placeholder="Title" value={values.title} onChange={changeHandler} />
                    {errors.reqTitle && <p className={styles["error"]}>Title is required!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="description" type="text" name="description" placeholder="Description" value={values.description} onChange={changeHandler} />
                    {errors.reqDesc && <p className={styles["error"]}>Description is required!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="price" type="text" name="price" placeholder="Price" value={values.price} onChange={changeHandler} />
                    {errors.reqPrice && <p className={styles["error"]}>Price is required!</p>}
                    {errors.invalidPrice && <p className={styles["error"]}>Price must be valid!</p>}
                </div>
                <div className={styles["form-group"]}>
                    <input id="imgUrl" type="text" name="imgUrl" placeholder="Image URL" value={values.imgUrl} onChange={changeHandler} />
                    {errors.reqImg && <p className={styles["error"]}>Image URL is required!</p>}
                </div>

                <button>Create</button>
                {serverError && <p className="server-error">Invalid data!</p>}

            </form>
        </section>
    );
}