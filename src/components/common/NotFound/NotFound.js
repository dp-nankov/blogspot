import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound(){


    return(
        <section className={styles['notFound']}>
            <h1>404 :/</h1>
            <Link to='/'>Home</Link>
        </section>
    );
}