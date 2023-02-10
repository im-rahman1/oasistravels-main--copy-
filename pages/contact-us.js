import Layout from '@/components/layout';
import styles from '@/styles/txtpages.module.css';
import React from 'react';
import { Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { number, email, address, bookingEmail, fbLink, twitterLink, instagramLink } from 'utils/constants';

const muiStyles = {
  copyright: {
    whiteSpace: 'nowrap',
    opacity: '0.5',
    // marginLeft: "2rem",
  },
  footer__link: {
    opacity: '0.6',
    cursor: 'pointer',
    margin: '0 0.5rem',

    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      opacity: '0.8',
    },
  },
};

export default function ContactUs() {
  return (
    <Layout title="Contact Us">
      <div className={styles.txtPage}>
        <h1>Contact Us</h1>

        <div className={styles.contactUs__body}>
          <div className={styles.txtCard}>
            <h2>{`Email & Phone`}</h2>
            <Typography>
              {number} <br /> {email} <br /> {bookingEmail}
            </Typography>
          </div>

          <div className={styles.txtCard}>
            <h2>Address</h2>
            <Typography>{address}</Typography>
          </div>

          <div className={styles.txtCard}>
            <h2>Social Media</h2>
            <div className={styles.followUs__links}>
              <a href={fbLink}>
              <FacebookIcon sx={muiStyles.footer__link} />
              </a>
              <a href={twitterLink}>
              <TwitterIcon sx={muiStyles.footer__link} />
              </a>
              <a href={instagramLink}>
              <InstagramIcon sx={muiStyles.footer__link} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
