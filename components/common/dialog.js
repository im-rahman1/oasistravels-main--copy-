import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/common/dialog.module.css';
import { Avatar, Typography, Dialog } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { number, whatsapp } from '../../utils/constants';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getCookie, setCookie } from 'utils/cookies';

const muiStyles = {
  avatar: {
    width: '70px',
    height: '70px',
  },
  button: {
    // padding: "0.2rem",
    // border: '1px solid black'
  },
};

function DialogComponent() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const showedCount = localStorage.getItem('showCount');
    if (!showedCount) {
      setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem('showCount', 1);
      }, 2000);
    } else if (showedCount == 1) {
      setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem('showCount', 1);
      }, 20000);
    }
  }, []);

  return (
    <Dialog open={showDialog} keepMounted onClose={() => setShowDialog(false)}>
      <div className={styles.dialogContainer}>
        <div className={styles.cancelBtn}>
          <IconButton
            onClick={() => setShowDialog(false)}
            sx={muiStyles.button}
            variant="outlined"
          >
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </div>
        <div className={styles.content}>
          {/* <Avatar sx={muiStyles.avatar} src="/assets/support-girl.png" /> */}
          <Typography variant="h4">Get 15% Off</Typography>
          <Typography>Contact us to avail this offer now.</Typography>
          <a href={`tel:${number}`} className={styles.dialog__numberContainer}>
            <Button variant="outlined">
              <PhoneIcon />
              {number}
            </Button>
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={styles.dialog__numberContainer}
          >
            <Button variant="outlined">
              <WhatsAppIcon />
              {number}
            </Button>
          </a>
          <Link href="/send-inquiry" passHref>
            <Button variant="contained">Send Inquiry</Button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default DialogComponent;
