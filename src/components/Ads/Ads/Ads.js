import styles from './Ads.module.css';
import Ad from '../Ad/Ad';

export default function Ads(){



    return (
        <section className={styles["item-list"]}>
        <p className="server-error">Error message...</p>
        <div className={styles["home-search"]}>
            <input type="text" name="searchTerm" placeholder="Search" />
            <input type="number" placeholder="Price from:" />
            <input type="number" placeholder="Price to:"/>
        </div>

        <Ad />

        <div className={styles["label"]}>
            <p>No ads to show.</p>
        </div>
    </section>
    );
}