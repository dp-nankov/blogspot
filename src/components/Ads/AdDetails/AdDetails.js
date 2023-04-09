import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { getOne, del } from '../../../services/adService';
import { getUserById } from '../../../services/authService';
import styles from './AdDetails.module.css';

export default function AdDetails(props){
  const [serverError, setServerError] = useState(null);
    const [adInfo, setAdInfo] = useState({});
    const [user, setUser] = useState({})
    const {auth} = useContext(AuthContext);
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        try {
          async function fetchAll() {
            const result = await getOne(id);
            setAdInfo((prev) => result[0]);
          }
          fetchAll();
      } catch (er) {
          setServerError(p => true)
      }
      }, [id]);
      
      useEffect(() => {
        try {
          async function getUser() {
            if (adInfo.userId) {
              const result = await getUserById(adInfo.userId);
              setUser((prev) => result);
            }
          }
          getUser();
      } catch (er) {
          setServerError(p => true)
      }
      }, [adInfo.userId]);

      async function handleDelete(){
        if(window.confirm("Are you sure you want to delete this ad?")){
          await del(adInfo._id);
          navigate('/', {replace: true})
        }
      }

    return (
        <section className={styles["details"]}>
        {serverError && <p className="server-error">Connection failed!</p>}
        <div className={styles["details-info"]}>
            <img src={adInfo.imgUrl} alt="img" />
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
            {auth._id === adInfo.userId && <Link to={`/ads/edit/${id}`} className={styles["link-btn"]}>Edit</Link>}
            {auth._id === adInfo.userId && <Link onClick={handleDelete} className={styles["link-btn"]}>Delete</Link>}
            </div>
        </div>
    </section>
    );
}