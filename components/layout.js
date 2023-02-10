import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import styles from '@/styles/components/layout.module.css';

import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  IconButton,
  Button,
  CssBaseline,
  Fab,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { number, whatsapp } from '../utils/constants';
import { getCookie, setCookie } from 'utils/cookies';
import DialogComponent from './common/dialog';

const drawerWidth = 280;

const muiStyles = {
  avatar: {
    width: '5rem',
    height: '5rem',
  },
  closeBtn: {
    padding: '5px 0',
    width: '20px',
  },
};

export default function Layout({
  title,
  keywords,
  author,
  description,
  children,
  addProductJson,
  window,
  robots,
  ogTitle,
  ogType,
  ogDescription,
  ogImage,
  ogSiteName,
}) {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
    // console.log(showSideBar);
  };

  const drawer = (
    <div className={styles.drawer}>
      <ThemeProvider theme={theme}>
        <div className={styles.drawerLinks}>
          <List sx={{ padding: 0 }}>
            <Link href="/" className={styles.link}>
              <ListItem
                button={router.pathname == '/' ? false : true}
                sx={
                  router.pathname == '/'
                    ? {
                        backgroundColor: '#000',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/'
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/destinations" className={styles.link}>
              <ListItem
                button={router.pathname == '/destinations' ? false : true}
                sx={
                  router.pathname == '/destinations'
                    ? {
                        backgroundColor: '#000',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/destinations'
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Destinations
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/airlines" className={styles.link}>
              <ListItem
                button={router.pathname == '/airlines' ? false : true}
                sx={
                  router.pathname == '/airlines'
                    ? {
                        backgroundColor: '#000',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/airlines'
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Airlines
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/send-inquiry" className={styles.link}>
              <ListItem
                button={router.pathname == '/send-inquiry' ? false : true}
                sx={
                  router.pathname == '/send-inquiry'
                    ? {
                        backgroundColor: '#000',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/send-inquiry'
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Send Inquiry
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/beat-my-quote" className={styles.link}>
              <ListItem
                button={router.pathname == '/beat-my-quote' ? false : true}
                sx={
                  router.pathname == '/beat-my-quote'
                    ? {
                        backgroundColor: '#000',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/beat-my-quote'
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Beat My Quote
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
          </List>
        </div>
        <div>{/* <Button>Call</Button> */}</div>
      </ThemeProvider>
    </div>
  );

  // useEffect(() => {
  //   setCookie('showCount', 0);
  //   const showedCount = getCookie('showCount');
  //   if (showedCount == 0) {
  //     setShowDialog(true);
  //     setCookie('showCount', 1);
  //   } else if (showedCount == 1 || showedCount == 2) {
  //     setTimeout(() => {
  //       setShowDialog(true);
  //       setCookie('showCount', 2);
  //     }, 4000);
  //   }
  // }, []);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <title>{title}</title>
        {robots && <meta name="robots" content={robots} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="description" content={description} />}
        {author && <meta name="author" content={author} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogType && <meta property="og:type" content={ogType} />}
        {ogDescription && (
          <meta property="og:description" content={ogDescription} />
        )}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
        {addProductJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addProductJson}
            key="product-jsonld"
          />
        )}
      </Head>
      <Header onMenuClick={handleSideBar} clicked={showSideBar} />
      <Box
        className="drawer"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={showSideBar}
          anchor="right"
          onClose={handleSideBar}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component={styles.main}>
        <div className={styles.child}>{children}</div>
      </Box>
      <Footer />
      <div className={styles.fabContainer}>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
          <div
            className={styles.fab1}
            // onClick={() => handleSideBar(!showSideBar)}
          >
            <WhatsAppIcon />
          </div>
        </a>
        <a href={`tel:${number}`}>
          <div
            className={styles.fab2}
            // onClick={() => handleSideBar(!showSideBar)}
          >
            <CallIcon />
          </div>
        </a>
      </div>
      {/* <Dialog
        open={showDialog}
        keepMounted
        onClose={() => setShowDialog(false)} */}
      {/* > */}
      <DialogComponent />
      {/* </Dialog> */}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Fast Holidays',
  description: '',
  keywords: '',
};
