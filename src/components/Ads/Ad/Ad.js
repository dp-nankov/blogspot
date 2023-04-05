import styles from './Ad.module.css';

export default function Ads(){



    return (
        <div className={styles["item"]}>
            <div className={styles["item-icon-div"]}>
                <a href="#"><img className={styles["item-icon"]}
                        src="https://www.shutterstock.com/image-photo/french-bulldog-tshirt-walking-by-260nw-1770823628.jpg"/></a>
            </div>
            <div className={styles["item-info-div"]}>
                <a>
                    <h2>T-shirt</h2>
                </a>
                <p className={styles["price"]}>$9.00</p>
            </div>
            <div className={styles["item-buttons-div"]}>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]} ${styles["inline"]}`}>Uploaded: </p>
                    <p className={`${styles["date"]}, ${styles["inline"]}`}>04.04.2023</p>
                </div>
                <div className={styles["date-box"]}>
                    <p className={`${styles["date-label"]}, ${styles["inline"]}`}>Last update: </p>
                    <p className={`${styles["date"]}, ${styles["inline"]}`}>04.04.2023</p>
                </div>
            </div>
        </div>
    );
}