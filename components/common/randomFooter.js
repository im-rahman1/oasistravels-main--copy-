import React, {useState, useEffect} from 'react'
import styles from '@/styles/components/common/randomFooter.module.css';
// firebase
import { collection, query, where, getDocs, limit, startAfter } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";


function RandomFooter() {
  const [footerData, setFooterData] = useState(null);
  const [airline, setAirline] = useState(null);

  const getFooterData = async () => {
    const index = Math.floor(Math.random() * 13) + 1;
    console.log(index);
  
      const arrOfData = [];
      if(index) {
        const q = query(
          collection(db, "airlinesFooter"),
          where("index", "==", index.toString())
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
    
        setFooterData(arrOfData[0]);
        console.log(arrOfData[0]);
      }
    };
  
    const getAirline = async () => {
      const index = Math.floor(Math.random() * 33) + 1;
      console.log(index);
    
        const arrOfData = [];
        if(index) {
          const q = query(
            collection(db, "airlines"),
            where("index", "==", index.toString())
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
      
          setAirline(arrOfData[0]);
          console.log(arrOfData[0]);
        }
      };

      useEffect(() => {
        getFooterData();
        getAirline();
    }, []);

  return (
    <>
      {footerData && (
          <div className={styles.airlineFooterContainer}>
            <div className={styles.airlineFooter}>
              <h2>{footerData.mainTxt}</h2>
              <div className={styles.airlineFooter__cards}>
                {footerData.cards.map((item, i) => (
                  <div key={i} className={styles.airlineFooter__card}>
                    <div className={styles.card__img}>
                      <img src={item.img} alt="airlineFooter card img" />
                    </div>
                    <div className={styles.card__txt}>
                      <h4>{item.heading}</h4>
                      <p>{item.txt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {airline && (
          <div className={styles.footerBanner}>
            <div className={styles.bannerImg}>
              <img
                src={airline.banner}
                alt={`${airline.name} image`}
              />
            </div>
          </div>
        )}
    </>
  )
}

export default RandomFooter