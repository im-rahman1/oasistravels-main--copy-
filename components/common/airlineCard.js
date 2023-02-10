import React from "react";
import styles from "@/styles/components/common/airlineCard.module.css";
import { Avatar, Button, Typography, Box } from "@mui/material";
import { convertString } from "utils/helpers";
import Link from "next/link";
import Image from "next/image";

export default function AirlineCard({ data }) {
  // console.log(data);

  return (
    <Link href={`/airlines/${data.name}`}>
      <div className={styles.airlineLogoContainer}>
        <img
          src={data.img}
          className={styles.airlineLogo}
          alt={`${data.name} logo`}
        />
      </div>
    </Link>
  );
}
