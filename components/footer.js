import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/footer.module.css';
import { Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  number,
  email,
  appName,
  appLink,
  address,
  bookingEmail,
  fbLink,
  twitterLink,
  instagramLink,
} from 'utils/constants';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const muiStyles = {
  copyright: {
    whiteSpace: 'nowrap',
    opacity: '0.5',
    marginLeft: '2rem',
  },
  footer__link: {
    opacity: '0.6',
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      opacity: '0.8',
    },
  },
};

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="app logo" style={{ width: '100%' }} />
        </div>
        <Typography variant="body2" sx={muiStyles.copyright}>
          © {appName}
        </Typography>
      </div>
      <div className={styles.footer__contactUs}>
        <div className={styles.footer__contact_grid}>
          <LocalPhoneIcon sx={muiStyles.footer__link} />
          <a href={`tel:${number}`}>{number}</a>
        </div>
        <div className={styles.footer__contact_grid}>
          <EmailIcon sx={muiStyles.footer__link} />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.footer__contact_grid}>
          <EmailIcon sx={muiStyles.footer__link} />
          <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
        </div>
        <div className={styles.footer__contact_grid}>
          <LocationOnIcon sx={muiStyles.footer__link} />
          <a href={``}>{address}</a>
        </div>
      </div>

      <div className={styles.footer__links}>
        <Link href="/">
          <Typography variant="body1" sx={muiStyles.footer__link}>
            {appName}
          </Typography>
        </Link>
        <Link href="/contact-us">
          <Typography variant="body2" sx={muiStyles.footer__link}>
            Contact us
          </Typography>
        </Link>
        <Link href="/privacy-policy">
          <Typography variant="body2" sx={muiStyles.footer__link}>
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/booking-conditions">
          <Typography variant="body2" sx={muiStyles.footer__link}>
            Booking Conditions
          </Typography>
        </Link>
        <Link href="/terms-conditions">
          <Typography variant="body2" sx={muiStyles.footer__link}>
            Terms & Conditions
          </Typography>
        </Link>
        <Link href="/faqs">
          <Typography variant="body2" sx={muiStyles.footer__link}>
            FAQs
          </Typography>
        </Link>
      </div>
      <div className={styles.followUs}>
        <Typography>Follow Us</Typography>
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
  );
}
