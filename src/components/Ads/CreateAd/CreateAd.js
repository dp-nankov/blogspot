import styles from './CreateAd.module.css';


export default function CreateAd(){


    return(
        <section className={styles["create-form"]}>
        <div class="label">
            <p>Create New Ad</p>
        </div>
        <form>
            <div className={styles["form-group"]}>
                <input id="title" type="text" name="title" placeholder="Title"/>
                <p className={styles["error"]}>Title is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="description" type="text" name="description" placeholder="Description"/>
                <p className={styles["error"]}>Description is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="price" type="text" name="price" placeholder="Price" formControlName="price"/>
                <p className={styles["error"]}>Price is required!</p>
            </div>
            <div className={styles["form-group"]}>
                <input id="imgUrl" type="text" name="imgUrl" placeholder="Image URL"/>
                <p className={styles["error"]}>Image URL is required!</p>
            </div>

            <button>Create</button>
            <p class="server-error">Error msg</p>

        </form>
    </section>
    );
}