import React, { useEffect, useState } from "react";
import styles from "@/styles/fares.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import FareCard from "@/components/common/fareCard";
import { countries } from "utils/data";

// firebase
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { convertString } from "utils/helpers";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Typography, Skeleton, ThemeProvider } from "@mui/material";
import InquiryForm from "@/components/common/inquiryForm";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "@/styles/theme";

export default function Fares() {
  const router = useRouter();
  const { dest, dept } = router.query;
  const [fares, setFares] = useState([]);
  const [footerData, setFooterData] = useState(null);
  const [airline, setAirline] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        if (dest != "all" && dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            where("destAirport.airportCode", "==", dest),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by both");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by dept");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dest != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("destAirport.airportCode", "==", dest),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by dest");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        }
      } else if (fares.length > 0) {
        if (dest != "all" && dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by both");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dept");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dest != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          ); 
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dest");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        }
      }
    }
  };

  const getFooterData = async () => {
    const index = Math.floor(Math.random() * 13) + 1;
    console.log(index);

    const arrOfData = [];
    if (index) {
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
    if (index) {
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
    if (dept && dest) {
      getData();
      getFooterData();
      getAirline();
      // console.lxog(dept, dest);
    }
  }, [dest, dept]);

  useEffect(() => {
    if (dept && dest) {
      getData();
    }
  }, [skip]);

  console.log(fares);

  return (
    <Layout title={"Destinations"}>
      <div className={styles.faresPage}>
        {fares.length > 0 && (
          <div className={styles.banner}>
            {dept != "all" && dest == "all" && (
              <h1 style={{ marginRight: "5px" }}>From</h1>
            )}
            <h1>
              {dept != "all" ? (
                <>{convertString(fares[0].deptAirport.city)}</>
              ) : (
                <>To</>
              )}
              {dept != "all" && dest != "all" ? (
                <span className={styles.banner__icon}>
                  <SyncAltIcon />
                </span>
              ) : (
                <> </>
              )}
              {dest != "all" && <>{convertString(fares[0].destAirport.city)}</>}
            </h1>
          </div>
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
      </div>
    </Layout>
  );
}
