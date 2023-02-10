import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/book.module.css';
import MuiPhoneNumber from 'material-ui-phone-number';
import emailjs from '@emailjs/browser';

import {
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  ThemeProvider,
  Button,
  Slide,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Skeleton,
} from '@mui/material';
import Layout from '@/components/layout';
import { theme } from '../../styles/theme';
import { decrypt } from 'utils/helpers';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { convertString } from 'utils/helpers';

export default function BookNow() {
  const router = useRouter();
  const { fareSlug } = router.query;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    returnDate: '',
    deptDate: '',
    budget: '',
  });
  const [sending, setSending] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState();
  const [selectedFare, setSelectedFare] = useState();

  const getData = async (id) => {
    const docRef = doc(db, 'fares', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      return;
    }
  };

  const handleSubmit = () => {
    if (
      form.name ||
      form.email ||
      form.phone ||
      form.returnDate ||
      form.deptDate ||
      form.budget
    ) {
      setSending(true);
      emailjs
        .send(
          'service_1d21p96',
          'template_mqvxf7a',
          { ...form, ...selectedFare },
          'tL_Vpyj5WxQRqs6ec',
        )
        .then((res) => {
          console.log(res);
          setShowDialog({
            title: 'Successfull',
            msg: 'Inquiry sent successfully, We will call you for further processing.',
          });
          setSending(false);
        })
        .catch((err) => {
          console.log(err);
          setShowDialog({
            title: 'Something went wrong',
            msg: 'Inquiry not sent.',
          });
          setSending(false);
        });
    } else {
      setShowDialog({
        title: 'Error',
        msg: 'Kindly fill the Form.',
      });
    }
  };

  const handleChange = (e, fieldName) => {
    if (fieldName == 'phone') {
      setForm({ ...form, phone: e });
    } else {
      setForm({ ...form, [fieldName]: e.target.value });
    }
  };

  useEffect(() => {
    if (data) {
      setSelectedFare({
        dept: `${convertString(data.deptAirport.airport)} - ${
          data.deptAirport.airportCode
        } - ${convertString(data.deptAirport.city)}`,
        dest: `${convertString(data.destAirport.airport)} - ${
          data.destAirport.airportCode
        } - ${convertString(data.destAirport.city)}`,
        price: data.price,
        airline: convertString(data.airline.name),
      });
    }
  }, [data]);

  useEffect(() => {
    if (fareSlug) {
      const id = decrypt(fareSlug);
      getData(id);
    }
  }, [fareSlug]);

  // console.log(form);
  // console.log(data);
  // console.log({ ...form, ...selectedFare });

  return (
    <Layout title="Book Ticket">
      {/* {data ? ( */}
      <ThemeProvider theme={theme}>
        <div className={styles.bookPage}>
          <div className={styles.gridSectionOne}>
            <div className={styles.selectedFare}>
              <div className={styles.selectedFare__header}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Selected Fare
                </Typography>
              </div>
              <div className={styles.selectedFare__body}>
                <div className={styles.selectedFare__grid}>
                  <Typography sx={{ fontWeight: 'bolder' }}>
                    Departure Airport:{' '}
                  </Typography>
                  {data ? (
                    <Typography>
                      {`${convertString(data.deptAirport.airport)} - ${
                        data.deptAirport.airportCode
                      } - ${convertString(data.deptAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className={styles.selectedFare__grid}>
                  <Typography sx={{ fontWeight: 'bolder' }}>
                    Destination Airport:{' '}
                  </Typography>
                  {data ? (
                    <Typography>
                      {`${convertString(data.destAirport.airport)} - ${
                        data.destAirport.airportCode
                      } - ${convertString(data.destAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className={styles.selectedFare__grid}>
                  <Typography sx={{ fontWeight: 'bolder' }}>
                    Selected Airline:{' '}
                  </Typography>
                  {data ? (
                    // <Typography>{convertString(data.airline.name)}</Typography>
                    <img
                      style={{ width: '120px' }}
                      src={data.airline.img}
                      alt="airline logo"
                    />
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className={styles.selectedFare__grid}>
                  <Typography sx={{ fontWeight: 'bolder' }}>
                    Total Fare:{' '}
                  </Typography>
                  {data ? (
                    <Typography variant="h6" sx={{ color: 'red' }}>
                      from £{data.price} incl. Tax
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Typography variant="caption" sx={{ opacity: '0.8' }}>
                  Please Note: If the requested fare will not be available then
                  we will offer you the best alternate fare.
                </Typography>
              </div>
            </div>
            <div className={styles.book__img}>
              <img src="/assets/book.png" alt="book__image" />
            </div>
          </div>
          <div className={styles.customerDetails}>
            <div className={styles.customerDetails__header}>
              <Typography variant="h5" sx={{ color: 'white' }}>
                Customer Details
              </Typography>
            </div>
            <div className={styles.customerDetails__bodyContainer}>
              <div className={styles.customerDetails__body}>
                <TextField
                  size="small"
                  label="Full Name"
                  onChange={(e) => handleChange(e, 'name')}
                />
                <TextField
                  size="small"
                  label="Email"
                  onChange={(e) => handleChange(e, 'email')}
                />
                <MuiPhoneNumber
                  size="small"
                  defaultCountry={'it'}
                  // regions={"europe"}
                  onChange={(value) => handleChange(value, 'phone')}
                  variant="outlined"
                  label="Phone Number"
                />
                <FormControl fullWidth>
                  <InputLabel size="small" htmlFor="outlined-adornment-amount">
                    Your Budget
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    id="outlined-adornment-amount"
                    onChange={(e) => handleChange(e, 'budget')}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Your Budget"
                  />
                </FormControl>
                <TextField
                  size="small"
                  label="Departure Date"
                  type="date"
                  onChange={(e) => handleChange(e, 'deptDate')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  size="small"
                  label="Return Date"
                  type="date"
                  onChange={(e) => handleChange(e, 'returnDate')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  multiline
                  size="small"
                  label="Message"
                  onChange={(e) => handleChange(e, 'msg')}
                  rows={4}
                />
              </div>
            </div>
            <Button
              sx={{ margin: '0 1rem 1rem 1rem' }}
              onClick={() => handleSubmit()}
              disabled={sending || !data}
              variant="contained"
            >
              Book Now
            </Button>
          </div>
        </div>
        <Dialog open={showDialog} keepMounted onClose={() => showDialog(false)}>
          <DialogTitle>{showDialog.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{showDialog.msg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowDialog(false)}>OK</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      {/* ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )} */}
    </Layout>
  );
}
