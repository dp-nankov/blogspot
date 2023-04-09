import { Link } from 'react-router-dom';
import styles from './Ad.module.css';

export default function Ad(props){



    return (
        <div className={styles["item"]}>
            <div className={styles["item-icon-div"]}>
                <Link to={`/ads/${props.customId}`}><img className={styles["item-icon"]}
                        src={props.imgUrl}/></Link>
            </div>
            <div className={styles["item-info-div"]}>
                <Link to={`/ads/${props.customId}`}>
                    <h2>{props.title}</h2>
                </Link>
                <p className={styles["price"]}>${props.price}</p>
            </div>
            <div className={styles["item-buttons-div"]}>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]} ${styles["inline"]}`}>Uploaded: </p>
                    <p className={`${styles["date"]} ${styles["inline"]}`}>{props.created_at.split('T')[0]}</p>
                </div>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]} ${styles["inline"]}`}>Last update: </p>
                    <p className={`${styles["date"]} ${styles["inline"]}`}>{props.updatedAt.split('T')[0]}</p>
                </div>
            </div>
        </div>
    );
}