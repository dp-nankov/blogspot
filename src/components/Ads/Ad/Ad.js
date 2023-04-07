import styles from './Ad.module.css';

export default function Ad(props){



    return (
        <div className={styles["item"]}>
            <div className={styles["item-icon-div"]}>
                <a href="#"><img className={styles["item-icon"]}
                        src={props.imgUrl}/></a>
            </div>
            <div className={styles["item-info-div"]}>
                <a>
                    <h2>{props.title}</h2>
                </a>
                <p className={styles["price"]}>${props.price}</p>
            </div>
            <div className={styles["item-buttons-div"]}>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]} ${styles["inline"]}`}>Uploaded: </p>
                    <p className={`${styles["date"]}, ${styles["inline"]}`}>{props.created_at.split('T')[0]}</p>
                </div>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]}, ${styles["inline"]}`}>Last update: </p>
                    <p className={`${styles["date"]}, ${styles["inline"]}`}>{props.updatedAt.split('T')[0]}</p>
                </div>
            </div>
        </div>
    );
}