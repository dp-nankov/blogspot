import styles from './GuestHome.module.css';


export default function GuestHome() {


    return (
        <section className={styles["home-guest"]}>
            <h1>Find everything you're looking for!</h1>
            <form className={styles["home-search"]}>
                <input type="text" name="text" />
                <input type="submit" value="Search" />
            </form>
            <div className={styles["signup-div"]}>
                <a href="#"><button>Sign up</button></a>
            </div>
            <p>Already a member? <a href="#" className={styles["signin-a"]}>Sign in</a></p>
        </section>
    );
}