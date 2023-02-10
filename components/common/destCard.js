import React from 'react';
import styles from '@/styles/components/common/destCard.module.css';
import { Button, Typography } from '@mui/material';
import { convertString } from 'utils/helpers';
import Link from 'next/link';

export default function DestCard({ dest }) {
  const inlineStyle = {
    bgImg: {
      backgroundImage: `url(${dest.img || './assets/imgLoader.png'})`,
    },
  };

  // console.log(dest.img);

  return (
    <>
      {dest && (
        <Link href={`/destinations/${dest.name}`}>
          <a>
            <div className={styles.destCard} style={inlineStyle.bgImg}>
              <Link href={`/destinations/${dest.name}`} passHref>
                <div className={styles.destCard__txt}>
                  <Typography variant="h5">
                    {convertString(dest.name)}
                  </Typography>
                </div>
              </Link>
            </div>
          </a>
        </Link>
      )}
    </>
  );
}
