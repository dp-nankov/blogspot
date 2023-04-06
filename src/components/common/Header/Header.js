import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {


    return (
        <section className={styles["header"]}>
            <div className={styles["navigation"]}>
                <Link to="/" className={styles["header-logo"]}>
                    <h1>Blogspot</h1>
                </Link>
                <ul>
                    <li><Link to="/ads">Ads</Link></li>
                    <li><Link to="/ads/create">New Ad</Link></li>
                    <li><Link to="/my-profile">My Profile</Link></li>
                    <li><a href="#">Logout</a></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sign-up">Register</Link></li>
                </ul>
            </div>
        </section>
    );
}