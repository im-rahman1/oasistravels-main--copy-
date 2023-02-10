import React from 'react';
import styles from '@/styles/beatMyQuote.module.css';

import { ThemeProvider } from '@mui/material';
import Layout from '@/components/layout';
import { theme } from '../../styles/theme';
import InquiryForm from '@/components/common/inquiryForm';
import RandomFooter from '@/components/common/randomFooter';

export default function BeatMyQuote() {
  return (
    <Layout title="Beat My Quote">
      <ThemeProvider theme={theme}>
        <div className={styles.beatMyQuotePage}>
          <InquiryForm h1="Beat My Quote" />
        </div>
        <RandomFooter />
      </ThemeProvider>
    </Layout>
  );
}
