import React, { useEffect, useState } from "react";
import styles from "@/styles/singleAirlineFares.module.css";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import FareCard from "@/components/common/fareCard";
import { countries } from "utils/data";

// firebase
import {
  collection,
  query,
  where,
  getDocs,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { convertString } from "../../../utils/helpers";
import { Typography, Skeleton, ThemeProvider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import InquiryForm from "@/components/common/inquiryForm";
import { theme } from "../../../styles/theme";

export default function SingleAirline() {
  const router = useRouter();
  const { airlineSlug } = router.query;
  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [airline, setAirline] = useState(null);
  const [footerData, setFooterData] = useState(null);

  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),
          where("airline.name", "==", airlineSlug),
          limit(10)
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
          collection(db, "fares"),
          where("airline.name", "==", airlineSlug),
          startAfter(lastDocu),
          limit(10)
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

  const getAirlineInfo = async () => {
    const arrOfData = [];
    const q = query(
      collection(db, "airlines"),
      where("name", "==", airlineSlug)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });

    setAirline(arrOfData[0]);
  };

  const getFooterData = async () => {
    const arrOfData = [];
    const q = query(
      collection(db, "airlinesFooter"),
      where("name", "==", airlineSlug)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });

    setFooterData(arrOfData[0]);
    console.log(arrOfData[0]);
  };

  useEffect(() => {
    if (airlineSlug) {
      getData();
      getAirlineInfo();
      getFooterData();
    }
  }, [airlineSlug]);

  useEffect(() => {
    if (airlineSlug) {
      getData();
    }
  }, [skip]);

  // console.log(airline);
  // console.log(footerData);
  // console.log(fares);

  return (
    <Layout title={"Airlines"}>
      <div className={styles.faresPage}>
        {airline ? (
          <div className={styles.bannerImg}>
            <img src={airline.banner} alt={`${airline.name} image`} />
            {/* {airlineSlug && (
              <div className={styles.bannerTxt} style={{ display: "none" }}>
                <h1>{convertString(airlineSlug)}</h1>
              </div>
            )} */}
          </div>
        ) : (
          <>
            {airlineSlug && (
              <div className={styles.bannerTxt}>
                <h1>{convertString(airlineSlug)}</h1>
              </div>
            )}
          </>
        )}
        <div className={styles.faresContainer}>
          {fares.length > 0 ? (
            <>
              {fares.length > 0 &&
                fares.map((fare, i) => (
                  <FareCard data={fare} key={i} index={i} />
                ))}
            </>
          ) : (
            <>
            {
              <>
                {!isEmpty && (
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
              </>
            }
            </>
          )}
        </div>
        <ThemeProvider theme={theme}>
          {fares.length > 0 && (
            <LoadingButton
              sx={{ margin: "1rem" }}
              loading={fetching}
              disabled={blockApi}
              onClick={() => setSkip(skip + 1)}
              variant="contained">
              {blockApi ? "No More" : "More"}
            </LoadingButton>
          )}
        </ThemeProvider>
        <>{isEmpty && <InquiryForm h1="Send Inquiry" />}</>
      </div>
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
    </Layout>
  );
}
