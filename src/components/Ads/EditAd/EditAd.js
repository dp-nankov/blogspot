import styles from './EditAd.module.css';
import { useForm } from '../../../hooks/useForm';
import { edit, getOne } from '../../../services/adService';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function EditAd(props) {
    const [adInfo, setAdInfo] = useState({});
    const { values, changeHandler, setValues } = useForm({
        title: '',
        description:'',
        price: '',
        imgUrl: ''
    });

    const { id } = useParams();

    useEffect(() => {
        async function fetchAll() {
            const result = await getOne(id);
            setAdInfo((prev) => result[0]);
        }
        fetchAll();
    }, []);

    useEffect(() => {
        setValues({
            title: adInfo.title || '',
            description: adInfo.description || '',
            price: adInfo.price || '',
            imgUrl: adInfo.imgUrl || ''
        });
    }, [adInfo]);


    async function onSubmit(e){
        e.preventDefault()
        await edit(adInfo._id, values);
    }


    return (
        <section className={styles["create-form"]}>
            <div className="label">
                <p>Edit</p>
            </div>
            <form className={styles['create-form']} onSubmit={onSubmit}>
                <div className={styles["form-group"]}>
                    <input id="title" type="text" name="title" placeholder="Title" value={values.title} onChange={changeHandler} />
                    <p className={styles["error"]}>Title is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="description" type="text" name="description" placeholder="Description" value={values.description} onChange={changeHandler} />
                    <p className={styles["error"]}>Description is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="price" type="text" name="price" placeholder="Price" formControlName="price" value={values.price} onChange={changeHandler} />
                    <p className={styles["error"]}>Price is required!</p>
                </div>
                <div className={styles["form-group"]}>
                    <input id="imgUrl" type="text" name="imgUrl" placeholder="Image URL" value={values.imgUrl} onChange={changeHandler} />
                    <p className={styles["error"]}>Image URL is required!</p>
                </div>

                <button>Create</button>
                <p class="server-error">Error msg</p>

            </form>
        </section>
    );
}