import styles from './MyProfile.module.css';
import { useState, useEffect, useContext } from 'react';
import { getAll } from '../../../services/adService';
import { AuthContext } from '../../../contexts/AuthContext';
import Ad from '../../Ads/Ad/Ad';


export default function MyProfile() {
    const { auth } = useContext(AuthContext);
    const [allAds, setAllAds] = useState([]);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        try {
            async function fetchAll() {
                const result = await getAll();
                setAllAds((prev) => result)
            }
            fetchAll()
        } catch (er) {
            setServerError(p => true)
        }
    }, [])

    return (
        <section className={styles["my-profile"]}>
            <div className={styles["label"]}>
                <p>My profile info:</p>
            </div>
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
                    {serverError && <p className="server-error">Connection failed!</p>}
                    <div>
                        {allAds.filter(ad => ad.userId._id === auth._id).map((x) => (<Ad key={x._id} {...x} />))}
                    </div>
                </div>
            </div>
        </section>
    );
}