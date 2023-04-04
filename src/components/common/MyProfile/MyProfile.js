import styles from './MyProfile.module.css';


export default function MyProfile(){


    return (
        <section className={styles["my-profile"]}>
        <div className={styles["label"]}>
            <p>My profile info:</p>
        </div>
        <p className={styles["server-error"]}>Error</p>
        <div id="profile info">
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>First Name:</p>
                <p className={styles["p-value"]}>Admin</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Last Name:</p>
                <p className={styles["p-value"]}>Adminov</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Email:</p>
                <p className={styles["p-value"]}>admin@dsads.dassds</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Username:</p>
                <p className={styles["p-value"]}>adminn</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Created:</p>
                <p className={styles["p-value"]}>04.04.2023</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>My ads:</p>
            </div>
        </div>
    </section>
    );
}