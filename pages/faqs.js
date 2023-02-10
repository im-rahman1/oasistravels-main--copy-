import Layout from '@/components/layout';
import styles from '@/styles/txtpages.module.css';
import React from 'react';

import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  appName,
  appLink,
  number,
  email,
  address,
  bookingEmail,
  fbLink,
  twitterLink,
  instagramLink,
} from 'utils/constants';

export default function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout title="FAQs">
      <div className={styles.faqPage}>
        <h1>FAQS</h1>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                Is it cheaper to book my tickets through {appName} or online
                myself?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Usually, we have access to better fares than you can get online.
                We are consolidators and source these fares at bulk rates. Plus,
                due to our volume of sales, we are given discounts and have
                availability to fares and seats that may not be available on
                some online portals. However, it should be noted that
                consolidator tickets whilst saving you money can have conditions
                associated with them.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                Can {appName} provide discounts on the economy, business and
                first-class fares?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We have the best prices in the market to provide to our
                customers because we are appointed agents to most of the world’s
                leading global airline carriers, we can offer the best discounts
                on the economy, premium economy, business and first-class
                cabins.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                How can I book my air travel most efficiently?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can email us at 
                <a href={`mailto:${email}`}>{email}</a>, book online at{' '}
                {appName} using your debit or credit card, contact us via our
                Online Chat online, or give us a call on
                <strong>
                  <a href={`tel:${number}`}>{number}</a>
                </strong>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                How can I change the details of my booking?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you wish to amend a booking/order or wish to enquire if a
                specific change can be made, then please get in touch with our
                team for further assistance. We will then be able to check the
                booking details and get back to you as soon as possible to
                advise if the amendment is possible and if it will incur a
                refund or additional charge. In case of any additional cost
                involved, it will be advised before any amendment occurs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                My name is spelt incorrectly on my flight ticket, what can I do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It is not possible to change your name on an airline ticket. The
                ticket will have to be cancelled and a new ticket will need to
                be issued (cancellation penalties will apply). When booking,
                please review your information carefully and ensure that the
                name of each passenger is entered correctly. If there is a minor
                error after you have placed a booking, please immediately
                contact our team member for the correction. We will need to
                contact the airline to request a name change and we cannot
                guarantee that they will be able to make the change.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                How do I cancel my ticket?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lower priced tickets are mostly non-refundable, but in some
                cases, airlines will charge a cancellation fee if you wish to
                cancel you’re booking. However, we recommend that you take out
                adequate travel insurance before booking to avoid any extra
                deduction. All cancellations must be sent in writing to `.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What is the refund process and how long should I expect to wait
                for a refund?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A typical hotel or airline reservation takes 8 to 18 weeks to
                process, depending on where you book and when you travel. We
                handle the whole process from our end to ensure you receive your
                refund as quickly as possible. Once we have received the money,
                and we have processed it, you will receive it. This varies
                depending on the airline and due to the pandemic, there are
                still delays with us receiving refunds, however, we do take the
                stress away by chasing the airlines for you.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel8'}
            onChange={handleChange('panel8')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What are your hotel cancellation charges?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                These can vary by room type within each hotel, we will always
                display the exact cancellation policy on the payment page before
                the booking is finalized. The most common cancellation policies
                are: -<strong>Non-Refundable:</strong> These are typically the
                cheapest available room rates with the strictest conditions,
                full payment is required at the time of booking and no refund is
                provided for cancellations.
                <strong>Pay at Hotel:</strong> These rooms can usually be
                cancelled up until the day before arrival free of charge, a
                valid payment card is required to secure the room but the actual
                payment is collected locally by the property. The hotel will
                collect payment in the local currency so the exact amount
                charged by the hotel is subject to daily exchange rate
                fluctuations.
                <strong>Hotel Specific:</strong> In this scenario, the hotel
                will provide a cancellation policy for the room being viewed in
                real-time, in most cases this will mean that any cancellation
                after booking will incur a penalty charge levied as a fixed
                amount or as a percentage of the total price.
                <strong>Flexible:</strong> Full payment is still required to
                reserve the room but the reservation can be cancelled and
                refunded usually up to 7 days before arrival.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel9'}
            onChange={handleChange('panel9')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9bh-content"
              id="panel9bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What is the minimum age requirement to book a hotel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The lead guest booking on {appName} needs to be at least 18
                years of age, some hotels have higher minimum age requirements,
                should a higher age restriction apply then this will be
                specified in the hotel description.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel10'}
            onChange={handleChange('panel10')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10bh-content"
              id="panel10bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                Do {appName} tour prices include air travel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The costs listed on our itineraries include the cost of
                international airfares, by a reputable airline. Occasionally,
                our itineraries do not include air travel within the country you
                may be travelling, but these are added in as "options" and will
                be highlighted to you if it is needed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel11'}
            onChange={handleChange('panel11')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11bh-content"
              id="panel11bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What insurance should I consider for my air ticket?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It is advisable to take out insurance, especially as it forms
                such a small part of the holiday expense. Insurance will cover
                you for land and air costs, in most circumstances. Our
                recommended trip insurance includes baggage insurance which
                covers losses not covered by the airlines as well as trip
                interruption which may entail repurchasing tickets or obtaining
                reimbursement for overnight accommodation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel12'}
            onChange={handleChange('panel12')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel12bh-content"
              id="panel12bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What are the airline policies for future bookings?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Most airlines are fully flexible for customers who are looking
                to book within the next month for travel in the next 120 days.
                They are offering free changes and refunds. Our team has a list
                of all the airlines and policies so please feel free to contact
                them if you are thinking of booking any future travel.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel13'}
            onChange={handleChange('panel13')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel13bh-content"
              id="panel13bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                Does {appName} arrange visas for different countries?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {appName} can arrange visa applications for tourists visiting
                any country. Our fees are GBP20 per passport. On top of this,
                the High Commission charges are applicable and available on this
                website depending on the type of visa required. If sending the
                payment {appName}, and post to {appName}, London England. The
                visa forms can be downloaded from the same link, and they need
                to be accompanied by two passport photos of the applicant as
                well as the duly completed and signed visa form. When sending
                the passport please remember that your passport must have
                six-month validity, and if this is a brand new passport then
                kindly attach the old passport to expedite the visa process. We
                will endeavor to obtain the visa within five working days of
                receiving the application. If you pick up the passports from our
                offices at the above address, then there are no additional
                charges. If the passports are to be returned* these will be by
                Royal Mail Special Delivery which is GBP6 on top of the above
                fees (alternatively you can choose to send us a special delivery
                self-addressed envelope). If you are sending your passports to
                us it is suggested, that you do it only by a courier company or
                through Royal Mail Special Delivery (with the compensation box
                ticked). {appName} does not accept any liability for the
                passports if they are lost in transit with the courier company,
                and any compensation claims due to the passports being lost will
                have to be taken up between the traveler and the relevant
                courier company.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel14'}
            onChange={handleChange('panel14')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel14bh-content"
              id="panel14bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                How do I register a query or concern?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All queries or concerns are required to be in writing. To submit
                a comment or complaint please e-mail us at{' '}
                <a href={`mailto:${email}`}>{email}</a> and this will then get
                submitted to the correct team and dealt with accordingly. You
                may also prefer to directly walk-in or post your queries or
                concerns on our address as follow: {appName} Regarding any
                queries, {appName} would like to take this opportunity to
                apologize if you are unhappy with any part of your experience.
                We aim to resolve the complaint within 28 days pending a full
                investigation, please be aware that during peak seasons this may
                take a little longer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel15'}
            onChange={handleChange('panel15')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel15bh-content"
              id="panel15bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                My flight has been cancelled. Will I be able to change my dates
                free of charge or ask for a refund?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The majority of airlines are allowing a first date change fee
                waiver; however, there may potentially be a difference in prices
                on fares and taxes for future bookings. In most cases, if your
                flight is cancelled by the airline then the airline will give
                you a full refund. However, in other scenarios airlines may
                offer you a credit voucher worth the value of the ticket to be
                used for future travel. These vouchers can be valid for travel
                permitted within a 12 month or 24-month period of the original
                travel dates. Periods do vary per airline. Please contact our
                team to understand the specific policy for your booking.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel16'}
            onChange={handleChange('panel16')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel16bh-content"
              id="panel16bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                I have booked my flights to a destination that has recently
                proposed a travel ban/travel restriction. What does this mean
                for my booking?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This means that due to the travel ban you cannot enter the
                destination country. You will have to postpone your trip to a
                future date or cancel it altogether. In some cases, airlines are
                offering refunds or credit vouchers worth the value of the
                ticket to be used for future travel. Feel free to contact our
                team to understand the specific policy for your booking.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel17'}
            onChange={handleChange('panel17')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel17bh-content"
              id="panel17bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                I have booked my flights and now I am notified that I will be
                placed in quarantine for 14 days if I travel to that location.
                What should I do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Unless you can quarantine, we recommend that you postpone your
                trip to a later date. Many global airlines are offering
                complimentary date changes. Please do contact a member of our
                team on 02080902417 About the options you have with the airline
                you are flying with.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel18'}
            onChange={handleChange('panel18')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel18bh-content"
              id="panel18bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                I need to travel for an emergency. Will I still be able to do
                this?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The British government have advised against all but essential
                travel. If your travel is for an emergency, please do check the
                entry requirements for your destination. Please also check the
                guidelines from
                here: https://www.gov.uk/foreign-travel-advice Please also check
                with a member of our team for any flights to your destination.{' '}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel19'}
            onChange={handleChange('panel19')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel19bh-content"
              id="panel19bh-header"
            >
              <Typography
                sx={{ width: '100%', flexShrink: 0, fontWeight: 'bolder' }}
              >
                What happens if my re-scheduled trip is affected by a travel ban
                or cancelled by the airline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The same rules apply as if it had been the original trip. You
                should receive a free date change or a full refund in the form
                of your original payment method or a refund credit voucher worth
                the value of the ticket to be used for future travel. These
                vouchers can be valid for travel permitted within a 12-month or
                24-month period of the original travel dates. Periods do vary
                per airline. Please contact our team to understand the specific
                policy for your booking.{' '}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
