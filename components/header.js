import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/header.module.css';
import { number } from 'utils/constants';

import { IconButton, Divider, Typography, Button } from '@mui/material';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

const muiStyles = {
  text: {
    color: '#01a22e',
    whiteSpace: 'noWrap',
  },
  clickable: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: '#01a22e',
    fontSize: '13px',
  },
  icon: {
    fontSize: '20px',
    opacity: '0.4',
  },
  menuIcon: {
    color: 'white',
    fontSize: '35px',
    // marginRight: "30px",
  },
};

export default function Header({ onMenuClick, clicked, onConnectClick }) {
  const router = useRouter();

  // const handleConnect = async () => {};

  // console.log(clicked);

  return (
    <header className={styles.header}>
      <ThemeProvider theme={theme}>
        <div className={styles.headerTop}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <img
                    src="/logo.png"
                    alt="Fast Travels' logo"
                    style={{ width: '100%' }}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.dvdr}>
              <Divider
                sx={{
                  height: '40px',
                  backgroundColor: 'white',
                  opacity: '0.5',
                }}
                orientation="vertical"
              />
            </div>
            <div className={styles.logoLinks}>
              <Link href="/" passHref>
                <div
                  className={
                    router.pathname == '/'
                      ? styles.highlightedLink
                      : styles.simpleLink
                  }
                >
                  <Typography>Home</Typography>
                </div>
              </Link>
              <Link href="/destinations" passHref>
                <div
                  className={
                    router.pathname.includes('/destinations')
                      ? styles.highlightedLink
                      : styles.simpleLink
                  }
                >
                  <Typography>Destinations</Typography>
                </div>
              </Link>
              <Link href="/airlines" passHref>
                <div
                  className={
                    router.pathname.includes('/airlines')
                      ? styles.highlightedLink
                      : styles.simpleLink
                  }
                >
                  <Typography>Airlines</Typography>
                </div>
              </Link>
              <Link href="/send-inquiry" passHref>
                <div
                  className={
                    router.pathname.includes('/send-inquiry')
                      ? styles.highlightedLink
                      : styles.simpleLink
                  }
                >
                  <Typography>Send Inquiry</Typography>
                </div>
              </Link>
              <Link href="/beat-my-quote" passHref>
                <div
                  className={
                    router.pathname.includes('/beat-my-quote')
                      ? styles.highlightedLink
                      : styles.simpleLink
                  }
                >
                  <Typography>Beat My Quote</Typography>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.menuIconContainer}>
            <IconButton onClick={() => onMenuClick()} color="primary">
              {!clicked ? (
                <MenuIcon sx={muiStyles.menuIcon} />
              ) : (
                <CloseIcon sx={muiStyles.menuIcon} />
              )}
            </IconButton>
          </div>
          <a href={`tel:${number}`} className={styles.numberContainer}>
            <div className={styles.number}>
              <PhoneIcon />
              <Typography>{number}</Typography>
            </div>
          </a>
        </div>
      </ThemeProvider>
    </header>
  );
}
