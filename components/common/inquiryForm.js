import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/common/inquiryForm.module.css';
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
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import Layout from '@/components/layout';
import { theme } from '@/styles/theme';

export default function InquiryForm({ h1 }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    returnDate: '',
    deptDate: '',
    budget: '',
    dept: '',
    dest: '',
  });
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = () => {
    if (
      form.name ||
      form.email ||
      form.phone ||
      form.returnDate ||
      form.deptDate ||
      form.budget ||
      form.dept ||
      form.dest
    ) {
      emailjs
        .send('service_1d21p96', 'template_mqvxf7a', form, 'tL_Vpyj5WxQRqs6ec')
        .then((res) => {
          console.log(res);
          setShowDialog({
            title: 'Successfull',
            msg: 'Inquiry sent successfully, We will call you for further processing.',
          });
        })
        .catch((err) => {
          console.log(err);
          setShowDialog({
            title: 'Something went wrong',
            msg: 'Inquiry not sent.',
          });
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

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.formContainer}>
        <div className={styles.offerImgForMobile}>
          <img src="/assets/inquiry-mobile.png" alt="banner" />
        </div>
        <div className={styles.offerImgForPC}>
          <img src="/assets/inquiry-pc.png" alt="banner" />
        </div>
        <div className={styles.inquiryFormContainer}>
          <h1>{h1}</h1>
          <div className={styles.sendInquiry__form}>
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
              defaultCountry={'pk'}
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
                  <InputAdornment position="start">£</InputAdornment>
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
              size="small"
              label="Departure"
              onChange={(e) => handleChange(e, 'dept')}
            />
            <TextField
              size="small"
              label="Destination"
              onChange={(e) => handleChange(e, 'dest')}
            />
          </div>
          <div className={styles.msgField}>
            <TextField
              fullWidth
              multiline
              size="small"
              label="Message"
              onChange={(e) => handleChange(e, 'msg')}
              rows={4}
            />
          </div>
          <Button onClick={() => handleSubmit()} variant="contained">
            Send
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
  );
}
