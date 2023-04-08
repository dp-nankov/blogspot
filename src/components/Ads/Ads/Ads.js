import styles from './Ads.module.css';
import Ad from '../Ad/Ad';
import { useEffect, useState } from 'react';
import {getAll} from '../../../services/adService'

export default function Ads(){
    const [serverError, setServerError] = useState(null);
    const [allAds, setAllAds] = useState([]);
    const [filteredAds, setFilteredAds] = useState([]);
    const [searchValues, setSearchValues] = useState({
        keyword: '',
        priceFrom: '',
        priceTo: ''
    });

    useEffect(() => {
        try {
            async function fetchAll() {
                const result = await getAll();
                setAllAds((prev) => result)
                setFilteredAds((prev) => result)
            }
            fetchAll()
        } catch (er) {
            setServerError(p => true)
        }
    }, [])

    useEffect(() => {
        filter();
    }, [searchValues])

    function filter(){
        let keyCheck = searchValues.keyword !== "" ? searchValues.keyword : false;
        let priceFromCheck = searchValues.priceFrom !== "" ? searchValues.priceFrom : false;
        let priceToCheck = searchValues.priceTo !== "" ? searchValues.priceTo : false;

        let filteredAds = allAds.filter(x => true);

        if(keyCheck) {
            filteredAds = filteredAds.filter(ad => ad.title.toLowerCase().includes(keyCheck.toLowerCase()));
        }

        if(priceFromCheck) {
            filteredAds = filteredAds.filter(ad => ad.price >= priceFromCheck);
        }

        if(priceToCheck) {
            filteredAds = filteredAds.filter(ad => ad.price <= priceToCheck);
        }

        setFilteredAds(filteredAds);

    }

    function handleChange(e){
        setSearchValues(p => ({...p, [e.target.name]: e.target.value }))
    }

    return (
        <section className={styles["item-list"]}>
        {serverError && <p className="server-error">Connection failed!</p>}
        <div className={styles["home-search"]}>
            <input type="text" name="keyword" placeholder="Search" value={searchValues.keyword} onChange={handleChange}/>
            <input type="number" name='priceFrom' placeholder="Price from:" value={searchValues.priceFrom} onChange={handleChange}/>
            <input type="number" name='priceTo' placeholder="Price to:" value={searchValues.priceTo} onChange={handleChange}/>
        </div>

        {filteredAds.map((x) => (<Ad key={x._id} {...x}/>))}

        <div className={styles["label"]}>
            {filteredAds.length === 0 && <p>No ads to show.</p>}
        </div>
    </section>
    );
}