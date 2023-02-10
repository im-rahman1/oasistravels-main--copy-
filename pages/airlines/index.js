import React, { useState, useEffect } from "react";
import styles from "@/styles/airlines.module.css";
import Layout from "@/components/layout";
import AirlineCard from "@/components/common/airlineCard";

import {
  collection,
  query,
  getDocs,
  doc,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { ThemeProvider, Skeleton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "@/styles/theme";
import RandomFooter from '@/components/common/randomFooter';

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);
  const [skip, setSkip] = useState(5);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getAllAirlines = async () => {
    if (!blockApi) {
      setFetching(true);
      if (airlines.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "airlines"),
          orderBy("name", "desc"),
          limit(20)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
        setAirlines(arrOfData);
        // console.log("if");
      } else if (airlines.length > 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "airlines"),
          orderBy("name", "desc"),
          startAfter(lastDocu),
          limit(20)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setAirlines([...airlines, ...arrOfData]);
        // console.log(arrOfData);
        // console.log("else");
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  console.log(airlines);

  useEffect(() => {
    getAllAirlines();
  }, []);

  useEffect(() => {
    getAllAirlines();
  }, [skip]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout title="Airlines">
          <div className={styles.airlinesContainer}>
            <div className={styles.airlinesHeader}>
              <h1>Airlines</h1>
            </div>
            <div className={styles.airlines}>
              {airlines.length > 0 ? (
                <>
                  {airlines.map((airline, i) => (
                    <div key={i} className={styles.airlineCardContainer}>
                      <AirlineCard data={airline} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {Array(20)
                    .fill(true)
                    .map((item, i) => (
                      <div className={styles.airlineSkeleton} key={i}>
                        <Skeleton
                          variant="rectangular"
                          width={150}
                          height={80}
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
            {airlines && (
              <LoadingButton
                sx={{ margin: "2rem" }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 20)}
                variant="contained">
                {fetching ? "Load More" : "No More"}
              </LoadingButton>
            )}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}
