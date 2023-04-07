import styles from './CreateAd.module.css';
import { useForm } from '../../../hooks/useForm';


export default function CreateAd(){
    const { values, changeHandler } = useForm({
        title: '',
        description: '',
        price: '',
        imgUrl: ''
    });
    

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3003/api/ads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({...values})})
            .then((res)=> {
                return res.json()
            }).then((res)=> {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }


    return(
        <section className={styles["create-form"]}>
        <div class="label">
            <p>Create New Ad</p>
        </div>
        <form className={styles['create-form']} onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
                <input id="title" type="text" name="title" placeholder="Title" value={values.title} onChange={changeHandler}/>
                <p className={styles["error"]}>Title is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="description" type="text" name="description" placeholder="Description" value={values.description} onChange={changeHandler}/>
                <p className={styles["error"]}>Description is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="price" type="text" name="price" placeholder="Price" formControlName="price" value={values.price} onChange={changeHandler}/>
                <p className={styles["error"]}>Price is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="imgUrl" type="text" name="imgUrl" placeholder="Image URL" value={values.imgUrl} onChange={changeHandler}/>
                <p className={styles["error"]}>Image URL is required!</p>
            </div>

            <button>Create</button>
            <p class="server-error">Error msg</p>

        </form>
    </section>
    );
}