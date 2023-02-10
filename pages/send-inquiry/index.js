import React from "react";
import styles from "@/styles/send-inquiry.module.css";

import { ThemeProvider } from "@mui/material";
import Layout from "@/components/layout";
import { theme } from "@/styles/theme";
import InquiryForm from "@/components/common/inquiryForm";
import RandomFooter from "@/components/common/randomFooter";

export default function SendInquiry() {
  return (
    <Layout title="Send Iquiry">
      <ThemeProvider theme={theme}>
        <div className={styles.sendInquiryPage}>
        </div>
          <InquiryForm h1="Send Inquiry" />
          <RandomFooter />
      </ThemeProvider>
    </Layout>
  );
}
