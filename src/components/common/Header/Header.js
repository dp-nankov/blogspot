import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Header() {
    const { onLogout, auth } = useContext(AuthContext);

    return (
        <section className={styles["header"]}>
            <div className={styles["navigation"]}>
                <Link to="/" className={styles["header-logo"]}>
                    <h1>Blogspot</h1>
                </Link>
                <ul>
                    {auth && <li><p>Hello, {auth.username}</p></li>}
                    <li><Link to="/ads">Ads</Link></li>
                    
                    {auth && <li><Link to="/ads/create">New Ad</Link></li>}
                    {auth && <li><Link to="/my-profile">My Profile</Link></li>}
                    {auth && <li><Link onClick={onLogout}>Logout</Link></li>}
                    {!auth && <li><Link to="/login">Login</Link></li>}
                    {!auth && <li><Link to="/sign-up">Register</Link></li>}
                </ul>
            </div>
        </section>
    );
}