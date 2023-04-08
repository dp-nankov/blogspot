import styles from './GuestHome.module.css';
import { useState, useEffect } from 'react';
import { getAll } from '../../../services/adService';
import Ad from '../../Ads/Ad/Ad';
import { Link } from 'react-router-dom';


export default function GuestHome() {
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
        <section className={styles["home-guest"]}>
            {serverError && <p className="server-error">Connection failed!</p>}
            <h1>Find everything you're looking for!</h1>
            <div className={styles["item-list"]}>
            {allAds.slice(-3).reverse().map((x) => (<Ad key={x._id} {...x}/>))}
            </div>
            <div className={styles["signup-div"]}>
                <Link to='/sign-up'><button>Sign up</button></Link>
            </div>
            <p className={styles['call-to-action']}>Already a member? <Link to='/login' className={styles["signin-a"]}>Sign in</Link></p>
        </section>
    );
}