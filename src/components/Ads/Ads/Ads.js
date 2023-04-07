import styles from './Ads.module.css';
import Ad from '../Ad/Ad';
import { useEffect, useState } from 'react';
import {getAll} from '../../../services/adService'

export default function Ads(){
    const [allAds, setAllAds] = useState([]);

    useEffect(() => {
        async function fetchAll() {
            const result = await getAll();
            setAllAds((prev) => result)
        }
        fetchAll()
    }, [])

    return (
        <section className={styles["item-list"]}>
        <p className="server-error">Error message...</p>
        <div className={styles["home-search"]}>
            <input type="text" name="searchTerm" placeholder="Search" />
            <input type="number" placeholder="Price from:" />
            <input type="number" placeholder="Price to:"/>
        </div>

        {allAds.map((x) => (<Ad key={x._id} {...x}/>))}

        <div className={styles["label"]}>
            <p>No ads to show.</p>
        </div>
    </section>
    );
}