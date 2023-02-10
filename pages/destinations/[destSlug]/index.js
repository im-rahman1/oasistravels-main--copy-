import React, { useEffect, useState } from 'react';
import styles from '@/styles/singleDestFares.module.css';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import FareCard from '@/components/common/fareCard';
import { countries } from 'utils/data';

// firebase
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';
import { convertString } from '../../../utils/helpers';
import { Typography, Skeleton, ThemeProvider, Button } from '@mui/material';
import InquiryForm from '@/components/common/inquiryForm';
import LoadingButton from '@mui/lab/LoadingButton';
import { theme } from '@/styles/theme';

export default function SingleDestination() {
  const router = useRouter();
  const { destSlug } = router.query;
  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);
  const [footerData, setFooterData] = useState(null);
  const [airline, setAirline] = useState(null);
  const [destData, setDestData] = useState(null);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, 'fares'),
          where('destCountry.name', '==', destSlug),
          limit(10),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares(arrOfData);
        // console.log(arrOfData);
        if (arrOfData.length === 0) {
          setIsEmpty(true);
        }
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      } else if (fares.length > 0) {
        const arrOfData = [];
        const q = query(
          collection(db, 'fares'),
          where('destCountry.name', '==', destSlug),
          startAfter(lastDocu),
          limit(10),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares([...fares, ...arrOfData]);
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  const getFooterData = async () => {
    const index = Math.floor(Math.random() * 13) + 1;
    console.log(index);

    const arrOfData = [];
    if (index) {
      const q = query(
        collection(db, 'airlinesFooter'),
        where('index', '==', index.toString()),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arrOfData.push({ ...doc.data(), _id: doc.id });
      });

      setFooterData(arrOfData[0]);
      // console.log(arrOfData[0]);
    }
  };

  const getAirline = async () => {
    const index = Math.floor(Math.random() * 33) + 1;
    // console.log(index);

    const arrOfData = [];
    if (index) {
      const q = query(
        collection(db, 'airlines'),
        where('index', '==', index.toString()),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arrOfData.push({ ...doc.data(), _id: doc.id });
      });

      setAirline(arrOfData[0]);
      // console.log(arrOfData[0]);
    }
  };

  const getDestination = async () => {
    const arrOfData = [];
    const q = query(
      collection(db, 'destinations'),
      where('name', '==', destSlug),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });

    setDestData(arrOfData[0]);
  };

  const bannerStyles = {
    backgroundImage: destData ? `url(${destData.banner})` : '',
    marginTop: '4.5rem',
    width: '100%',
    height: '15rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px black',
  };

  useEffect(() => {
    if (destSlug) {
      getData();
      getFooterData();
      getAirline();
      getDestination();
    }
  }, [destSlug]);

  useEffect(() => {
    if (destSlug) {
      getData();
    }
  }, [skip]);

  // console.log(destSlug);
  // console.log(fares);
  // console.log(destData);

  return (
    <Layout title={'Destinations'}>
      <div className={styles.faresPage}>
        {destData ? (
          <div style={bannerStyles}>
            {/* <img src={destData.banner} alt={`${destData.name} image`} /> */}
            <h1>{convertString(destSlug)}</h1>
          </div>
        ) : (
          <>
            {destSlug && (
              <div className={styles.banner}>
                <h1>{convertString(destSlug)}</h1>
              </div>
            )}
          </>
        )}
        <div className={!isEmpty ? styles.faresContainer : styles.displayNone}>
          {fares.length > 0 ? (
            <>
              {fares.map((fare, i) => (
                <FareCard data={fare} key={i} />
              ))}
            </>
          ) : (
            <>
              {Array(6)
                .fill(true)
                .map((item, i) => (
                  <div key={i}>
                    <div className={styles.fareSkeletonForPC}>
                      <Skeleton
                        variant="rectangular"
                        width={560}
                        height={215}
                      />
                    </div>
                    <div className={styles.fareSkeletonForPhone}>
                      <Skeleton
                        variant="rectangular"
                        width={280}
                        height={480}
                      />
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <ThemeProvider theme={theme}>
          {fares.length > 0 && (
            <LoadingButton
              sx={{ margin: '1rem' }}
              loading={fetching}
              disabled={blockApi}
              onClick={() => setSkip(skip + 1)}
              variant="contained"
            >
              {blockApi ? 'No More' : 'More'}
            </LoadingButton>
          )}
        </ThemeProvider>
        <>{isEmpty && <InquiryForm h1="Send Inquiry" />}</>
        {destData && (
          <div
            className={styles.details}
            // contentEditable="true"
            dangerouslySetInnerHTML={{ __html: destData?.details }}
          />
        )}
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
              <img src={airline.banner} alt={`${airline.name} image`} />
            </div>
          </div>
        )}
        {/* <Button onClick={() => getFooterData()}>click</Button> */}
      </div>
    </Layout>
  );
}
