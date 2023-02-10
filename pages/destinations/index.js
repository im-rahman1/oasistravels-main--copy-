import React, { useState, useEffect } from "react";
import styles from "@/styles/destinations.module.css";
import Layout from "@/components/layout";
import DestCard from "@/components/common/destCard";
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
import RandomFooter from "@/components/common/randomFooter";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [skip, setSkip] = useState(5);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getAllDestinations = async () => {
    if (!blockApi) {
      setFetching(true);
      if (destinations.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "destinations"),
          orderBy("name", "desc"),
          limit(9)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
        setDestinations(arrOfData);
        console.log("if");
      } else if (destinations.length > 0) {
        const arrOfData = [];
        let lastVisible = destinations[destinations.length - 1];
        console.log("last", lastVisible);
        const q = query(
          collection(db, "destinations"),
          orderBy("name", "desc"),
          startAfter(lastDocu),
          limit(9)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setDestinations([...destinations, ...arrOfData]);
        // console.log(arrOfData);
        // console.log("else");
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  useEffect(() => {
    getAllDestinations();
  }, []);

  useEffect(() => {
    getAllDestinations();
  }, [skip]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout title="Destinations">
        <div className={styles.bannerImg}>
            <img src="/assets/allDestBanner.jpg" alt={`all destinations banner`} />
          </div>
          <div className={styles.destinationsContainer}>
            <div className={styles.destsHeader}>
              <h1>Destinations</h1>
            </div>
            <div className={styles.destinations}>
              {destinations.length > 0 ? (
                <>
                  {destinations.map((destination, i) => (
                    <div key={i} className={styles.destPage__destinations}>
                      <DestCard dest={destination} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item}>
                      <div className={styles.destSkeleton}>
                        <Skeleton
                          variant="rectangular"
                          width={260}
                          height={280}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {destinations && (
              <LoadingButton
                sx={{ margin: "2rem" }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 10)}
                variant="contained">
                {!blockApi ? "Load More" : "No More"}
              </LoadingButton>
            )}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}
