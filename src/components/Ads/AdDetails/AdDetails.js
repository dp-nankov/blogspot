import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOne, del } from '../../../services/adService';
import { getUserById } from '../../../services/authService';
import styles from './AdDetails.module.css';

export default function AdDetails(props){
    const [adInfo, setAdInfo] = useState({});
    const [user, setUser] = useState({})
    const {id} = useParams();

    useEffect(() => {
        async function fetchAll() {
          const result = await getOne(id);
          setAdInfo((prev) => result[0]);
        }
        fetchAll();
      }, [id]);
      
      useEffect(() => {
        async function getUser() {
          if (adInfo.userId) {
            const result = await getUserById(adInfo.userId);
            setUser((prev) => result);
          }
        }
        getUser();
      }, [adInfo.userId]);

      async function handleDelete(){
        await del(adInfo._id);
      }

    return (
        <section className={styles["details"]}>
        <p className="server-error">Server error</p>
        <div className={styles["details-info"]}>
            <img src="https://www.shutterstock.com/image-photo/french-bulldog-tshirt-walking-by-260nw-1770823628.jpg" />
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Title:</p>
                <p className={styles["p-value"]}>{adInfo.title}</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Description:</p>
                <p className={styles["p-value"]}>{adInfo.description}</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Price:</p>
                <p className={styles["p-value"]}>${adInfo.price}</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Uploaded:</p>
                <p className={styles["p-value"]}>{adInfo.created_at ? adInfo.created_at.split('T')[0] : "N/A"}</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Last update:</p>
                <p className={styles["p-value"]}>{adInfo.updatedAt ? adInfo.updatedAt.split('T')[0] : "N/A"}</p>
            </div>
            <div className={styles["info-card"]}>
                <p className={styles["p-label"]}>Owner:</p>
                <p className={styles["p-value"]}>{user.username}</p>
            </div>
            <div className={styles["edit-ad"]}>
            <Link to={`/ads/edit/${id}`} className={styles["edit-btn"]}>Edit</Link>
            <Link onClick={handleDelete}>Delete</Link>
            </div>
        </div>
    </section>
    );
}