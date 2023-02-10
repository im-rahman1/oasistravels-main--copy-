import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

import { Button } from "@mui/material";

export default function GetDocss() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const arrOfData = [];

    const q = query(collection(db, "fares"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arrOfData.push(doc.data());
    });
    setData(arrOfData);
  };

  const sendData = async () => {
    for (let i = 0; i < data.length; i++) {}
  };

  console.log(data);

  return (
    <div>
      <Button onClick={() => getData()}>Get Data</Button>
      <Button onClick={() => sendData()}>Send Data</Button>
    </div>
  );
}
