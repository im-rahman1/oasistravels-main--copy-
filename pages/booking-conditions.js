import Layout from '@/components/layout';
import styles from '@/styles/txtpages.module.css';
import React from 'react';
import { Typography } from '@mui/material';
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

export default function BookingConditions() {
  return (
    <Layout title="Booking Conditions">
      <div className={styles.txtPage}>
        <h1>Booking Conditions</h1>
        <Typography>
          These Booking Conditions apply to bookings you make with our
          consultants (in-store, by phone or by email) as well as online
          bookings you make on our website. A contract on the terms set out in
          these Booking Conditions will exist as soon as we issue a confirmation
          invoice. References to “us”, “we” or “our” mean {appName}.
        </Typography>
        <div>
          <div className={styles.section}>
            <h2>Understanding your contract</h2>
            <Typography>
              Please read these Booking Conditions carefully. You must not make
              any booking unless you understand and agree with these Booking
              Conditions. You should save and/or print a copy of these Booking
              Conditions at the time the booking is placed. We will rely on the
              authority of the person making the booking to act on behalf of any
              other traveler on the booking and that person will bind all such
              travelers to these Booking Conditions.
            </Typography>
            <Typography sx={{ fontWeight: 'bolder' }}>
              Disclaimer It is extremely suggested to have travel insurance
              formerly your travel. Make sure, flexible travel insurance covers
              you from the pain of cancelled flights, losing your luggage or
              unexpected injury and other travel issues.
            </Typography>

            <Typography>
              {`Your rights under your contract for travel arrangements will
              depend on the type of travel arrangement you book with us, which
              will be either a booking for package travel or for one or more
              individual travel services. Regardless of the type of arrangement
              you book with us, the provider of your travel service will have
              its own terms and conditions (such as airline conditions of
              carriage, accommodation or car hire terms or hotels supplier terms
              or tour organizer terms and conditions). All such terms and
              conditions (including limitations of liability) apply to these
              Booking Conditions and, accordingly, a reference to “these Booking
              Conditions” shall mean the terms and conditions set out herein as
              well as all terms and conditions of any provider of your travel
              services. To the extent of any inconsistency between a travel
              service provider’s terms and conditions and the terms and
              conditions set out herein, the travel service provider’s terms and
              conditions shall prevail, save to the extent that any provision in
              the travel service provider’s terms and conditions is deemed to be
              invalid or unenforceable. Your travel service providers will be
              identified on your itinerary or travel documents and their
              respective terms and conditions will be available directly on
              their websites or by contacting them. Alternatively you can ask us
              for copies. You must read all applicable travel service provider
              terms and conditions carefully because in every case they will
              apply to the provision of your travel services.`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Package Travel Arranged By Us</h2>
            <Typography>
              {`A package is a pre-arranged, single-price combination of at least
              two of the following components: (a) transport – (b) accommodation
              – or (c) other tourist services accounting for a significant
              proportion of the package. Packages cover a period of more than
              twenty-four hours or include overnight accommodation. Your rights
              in relation to packages arranged by us are set out in these
              Booking Conditions (which are deemed to incorporate all terms and
              conditions of each travel service provider for the various
              components of your package travel arrangements). Please note that
              you also have rights under the Package Travel, Package Holidays
              and Package Tours Regulations 1992, a copy of which can be
              accessed at the following link:
              legislation.gov.uk/uksi/1992/3288/contents/made (“Package Travel
              Regulations”).`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Schedule changes</h2>
            <Typography>
              {`All departure and arrival times on your flight ticket are provided
              by the airline and are estimates only. They may change due to air
              traffic control restrictions, weather conditions or operational
              requirements. We recommend that you contact the airline or visit
              the airline’s website to confirm your scheduled departure time 24
              hours prior to your flight. You should also confirm departure
              times for each onward flight. In the event of schedule changes,
              failure to reconfirm any sector of your itinerary may result in
              you needing to purchase a new flight.`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>When You Change Your Booking</h2>
            <Typography>
              {`If, after our confirmation invoice has been issued, you wish to
              change your travel arrangements in any way, for example your
              chosen travel dates or accommodation, we will do our utmost to
              make these changes but it may not always be possible. Any request
              for changes to be made must be in writing from the lead–named
              traveler who made the booking. You will be asked to pay our
              administration charge of £75 per passenger per booking (or such
              other amount specified in your travel documents), plus any
              additional travel service provider change or cancellation fees.
              Where we incur any liability for a travel service provider change
              or cancellation fee for any booking which you change, you agree to
              compensate us for the amount of that fee. You should be aware that
              costs could increase closer to the departure date. When changing
              travel arrangements we may have to re book you to current fares
              and rates, which may result in an increase in the cost of your
              arrangements, in addition to our administration charge and the
              travel service provider’s change fees. No date changes are
              permitted outside of your ticket’s validity period. ‘Minimum stay’
              and ‘maximum stay’ rules apply to return and multi-stop flights.
              Certain travel arrangements (e.g. advance purchase tickets and
              non-flexible fares) may not be changeable after a reservation has
              been made and any alteration could incur a cancellation charge of
              up to 100% of the service cost. Name changes are not permitted in
              any instance.`}
            </Typography>
            <Typography>
              {`If you have purchased a return flight, multi-stop or round the
              world flight and you do not check in on a confirmed flight, the
              airline will register you as a ‘no show’ and your tickets on your
              subsequent flights will be cancelled by the airline. Please
              contact us as soon as possible if you do not intend to check in
              for a confirmed reservation in these circumstances.`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2></h2>
            <Typography></Typography>
          </div>

          <div className={styles.section}>
            <h2>When You Cancel Your Booking</h2>
            <Typography>
              {`You may cancel your travel arrangements at any time, however
              please note that certain travel arrangements may be
              non-refundable. Written notification from the lead-named traveller
              must be received at the branch where the booking was made. Since
              we incur costs in cancelling your travel arrangements, you will
              need to pay our administration charge of £125 per person per
              booking (or such other amount specified in your travel documents).
              In addition to our administration charge, you will have to pay the
              travel service provider’s applicable cancellation charges.`}
            </Typography>
            <Typography>
              If you have made a booking with us for your Journeys the
              cancellation fees will be an amount determined in accordance with
              the table below, except where otherwise indicated.
            </Typography>
            <Typography>
              If the reason for your cancellation is covered under the terms of
              your travel insurance policy, you may be able to reclaim these
              charges from your travel insurer. Refunds will only be made
              available to the person named on the booking payment receipt,
              unless otherwise agreed in writing by all travelers listed on a
              booking.
            </Typography>
            <Typography>
              Your refund and remedy rights as set out in these Booking
              Conditions are subject to your rights under the Package Travel
              Regulations and the Consumer Rights Act 2015. Unless otherwise
              indicated, the following cancellation fees apply to bookings for
              your Journeys only. Days before departure within which written
              notice is received by us Cancellation fee (% of total Journey)
            </Typography>
            <Typography>More than 70 days Deposit only</Typography>
            <Typography>57-70 days Deposit + 45% of total Journey</Typography>
            <Typography>37-56 days Deposit + 50% of total Journey</Typography>
            <Typography>28-36 days Deposit + 65% of total Journey</Typography>
            <Typography>15-27 days Deposit + 90% of total Journey</Typography>
            <Typography>14 days or less Full booking value</Typography>
          </div>

          <div className={styles.section}>
            <h2>When we change or cancel your booking</h2>
            <Typography>
              Occasionally a travel service provider may have to make changes to
              your original booking. We do not accept any liability or costs
              incurred that may result from these changes, other than in
              accordance with the Package Travel Regulations. Most of these
              changes will be minor and we will advise you of them at the
              earliest possible date. We will advise you of the carrier
              operating each flight in your itinerary. Any changes to the
              carrier after you have received your tickets will be notified to
              you as soon as possible and in all cases at check-in or at the
              boarding gate. Please note that carriers may be subject to change.
              Such a change is deemed to be a minor change. Other examples of
              minor changes include alteration of your flight departure time by
              less than 12 hours, changes to aircraft type and change of
              accommodation to a comparable or higher standard. No compensation
              is payable in respect of minor changes.
            </Typography>

            <Typography>
              In certain circumstances we or a travel service provider may be
              required to cancel your travel arrangements (for example, if the
              minimum number of travelers required for a tour or excursion is
              not reached or for reasons of force majeure, pandemic or epidemic
              illness or if you fail to pay the final balance by the due date).
              In these circumstances (except where you have failed to pay the
              final balance) you can either have a refund of all money paid or,
              if available, accept an offer of alternative travel arrangements
              of comparable standard (we will refund any price difference if the
              alternative is of a lower value).
            </Typography>

            <Typography>
              If you have booked a package arranged by us and it is necessary to
              cancel or make major changes to your arrangements we will, in
              addition to the above, pay you compensation as follows:
            </Typography>

            <Typography>55-29 days prior to travel: £15.00</Typography>

            <Typography>28-15 days prior to travel: £25.00</Typography>

            <Typography>14-8 days prior to travel: £35.00</Typography>

            <Typography>7-0 days prior to travel: £45.00</Typography>

            <Typography>
              {`Please refer to the section titled ‘Our responsibility for your
              booking’ for more information in this regard.`}
            </Typography>

            <Typography>
              Under EU law (EC 261/2004) you have rights in some circumstances
              to refunds or compensation from your airline in cases of denied
              boarding, cancellation or delay to flights. Details of these
              rights are published at EU airports and are also available from
              your airline. However, reimbursement by an airline of the cost of
              a flight that forms part of a package does not automatically
              entitle you to a refund of your entire package travel arrangement
              cost from us.
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Passports & visas</h2>
            <Typography>
              All travellers must have a valid passport for any international
              travel and many countries require at least six months’ validity
              from the date of return. Some countries also require a
              machine-readable passport and/or unstamped available pages. When
              assisting with an international travel booking, we will assume
              that all travellers on the booking have a valid passport. If this
              is not the case, you must let us know. It is important that you
              ensure that you have valid passports, visas and re-entry permits
              which meet the requirements of immigration and other government
              authorities (including, in certain cases, visas for transit
              points). Any fines, penalties, payments, delays or expenditures
              incurred as a result of such documents not meeting the
              requirements of those authorities will be your sole responsibility
              (except to the extent caused by fault on our part). We do not
              accept any responsibility if you cannot travel because you have
              not complied with any passport, visa or immigration requirements.
              If you need information regarding visa and other travel document
              requirements for your trip please let us know or visit
              {appLink}. If you are a British citizen we will provide you with
              general information on visa and passport requirements that apply
              to international travel bookings you make with us. For all
              passport holders, our consultants can obtain specific information
              from an external visa advisory service provider on your behalf (if
              you wish, we can assist you to obtain visas through this external
              service and fees will apply). We do not warrant the accuracy of
              information provided by any external service and accept no
              liability for any loss or damage which you may suffer in reliance
              on it (except to the extent caused by fault on our part). Please
              allow adequate time to obtain any such advice or documents.
            </Typography>

            <Typography>
              If you are travelling to Australia, Canada or the United States
              please be advised that there are compulsory pre-registration
              requirements for their visa waiver programs. ESTA visa is
              compulsory for all USA bound travel. For Canada and Australia you
              must have ETA visa as well to travel these territories. If you
              have registered before, please check your registration is valid
              and has not lapsed. Please note, you may not meet the eligibility
              requirements and may be required to obtain a visa.
            </Typography>

            <Typography>
              {`If you are travelling to South Africa with a person under the age
              of 18 you will be asked to show the child’s full unabridged birth
              certificate. There are additional requirements if the child is
              travelling with only one parent, with neither biological parent,
              or unaccompanied. Failure to provide this information on check in
              will result in passengers being denied boarding.`}
            </Typography>

            <Typography>
              It is a requirement for some air carriers to provide personal
              information, including passport information, about all passengers
              on their aircraft. The data will be collected when you check-in
              (either online or at the airport) or, in some circumstances, will
              be required when you make your booking.
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Our responsibility for your booking</h2>
            <Typography>
              {`In all circumstances, we will not be liable where any failure in
              the performance or provision of your travel arrangements is due
              to: (a) your acts or omissions or the acts or omissions of another
              member in your group (b) any third party not connected with the
              provision of your travel arrangements and where the failure is
              unforeseeable or unavoidable (c) unusual and unforeseeable
              circumstances beyond our control, the consequences of which could
              not have been avoided even if all due care had been exercised or
              (d) an event which we or a travel service provider, even with all
              due care, could not foresee or forestall (including but not to
              war, threat of war, riot, civil disturbances, industrial dispute,
              terrorist activity and its consequences, natural or other disaster
              (such as volcanic ash or hurricanes), nuclear incident, fire,
              adverse weather conditions (actual or threatened, including snow
              and fog), closed or congested airports or ports, unavoidable
              technical problems with transport and similar events). Our
              liability will in all cases be in accordance with and/or in an
              identical manner to: (a) the terms and conditions of the travel
              service providers that provide your travel arrangements (which, by
              making a booking with us, you acknowledge form part of these
              Booking Conditions) – and (b) any relevant international
              conventions, for example the Montreal Convention in respect of
              travel by air, the Athens Convention in respect of travel by sea,
              the Berne Convention in respect of travel by rail and the Paris
              Convention in respect of the provision of accommodation which set
              time limits for notifications/claims and limit the amount of
              compensation that can be claimed for death, injury, delay to
              passengers/guests and loss, damage and delay to luggage. Copies of
              international conventions and relevant travel service providers’
              terms and conditions are available online. Alternatively you can
              ask us for copies either over the phone or in-store.`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Package Travel Arranged By Us</h2>
            <Typography>
              In accordance with the Package Travel Regulations, if we have
              arranged a package for you and the travel arrangements are not
              performed with reasonable skill and care we will make good those
              arrangements or pay you appropriate compensation if this has
              affected the enjoyment of your trip. Our liability in respect of
              packages arranged by us, except in cases involving death, injury
              or illness, is to a maximum of 2 times the cost of your package
              travel arrangement. This maximum amount will only be payable where
              everything has gone wrong and you have not received any benefit at
              all from your package travel arrangement. Any amounts you receive
              from travel service providers or travel insurance will be deducted
              from any sum paid to you as compensation by us.
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Your Financial Protection</h2>
            <Typography>
              <strong>
                {appName.toUpperCase()} Ltd T/A Fast (ATOL # 74904) dealing in
                worldwide Flights and Holiday packages.
              </strong>
            </Typography>
            <Typography>
              Many of the flights and flight-inclusive travel arrangements we
              arrange on your behalf are financially protected by the ATOL
              scheme. But ATOL protection does not apply to all travel and
              travel services. Please ask us to confirm what protection may
              apply to your booking. If you do not receive an ATOL Certificate
              then the booking will not be ATOL protected. If you do receive an
              ATOL Certificate but all the parts of your trip are not listed on
              it, those parts not listed will not be ATOL protected. For more
              information about financial protection and the ATOL Certificate go
              to atol.org.uk/ATOLCertificate. When you buy an ATOL protected
              fight or flight inclusive travel through us you will receive an
              ATOL Certificate. This lists what is financially protected, where
              you can get information on what this means for you and who to
              contact if things go wrong. If your booking (or part of it) is
              ATOL protected, we, or the travel service provider identified on
              your ATOL Certificate, will provide you with the booking service
              and arrange the travel services as listed on the ATOL Certificate
              (or a suitable alternative). In some cases, where neither we nor
              the travel service provider are able to do so for reasons of
              insolvency, an alternative ATOL holder may provide you with the
              travel services you have bought or a suitable alternative (at no
              extra cost to you). You agree to accept that in those
              circumstances the alternative ATOL holder will perform those
              obligations and you agree to pay any money outstanding to be paid
              by you under your contract to that alternative ATOL holder.
              However, you also agree that in some cases it will not be possible
              to appoint an alternative ATOL holder, in which case you will be
              entitled to make a claim under the ATOL scheme (or your credit
              card issuer where applicable).
            </Typography>

            <Typography>
              {`If we, or the travel service provider identified on your ATOL
              certificate, are unable to arrange or provide the services listed
              (or a suitable alternative, through an alternative ATOL holder or
              otherwise) for reasons of insolvency, the Trustees of the Air
              Travel Trust may make a payment to (or confer a benefit on) you
              under the ATOL scheme. You agree that in return for such a payment
              or benefit you assign absolutely to those Trustees any claims
              which you have or may have arising out of or relating to the
              non-provision of the services, including any claim against us, the
              travel agent (or your credit card issuer where applicable). You
              also agree that any such claims may be re-assigned to another
              body, if that other body has paid sums you have claimed under the
              ATOL scheme. If you book a package which does not include flights,
              our ABTA membership means that we provide financial protection for
              your money. If you book other travel arrangements, such as
              accommodation only, this protection doesn’t apply.`}
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Prices and payment</h2>
            <Typography>
              All prices are subject to availability and can be withdrawn or
              varied without notice. Prices are per person and inclusive of tax
              unless otherwise indicated. Accommodation (if included) is based
              on twin share, quad share, unless otherwise indicated. Advertised
              prices may be to travel within specified dates. We will confirm
              the correct price with you at the time of payment. Prices are not
              guaranteed until full payment is made. To confirm your travel
              arrangements you may be required to pay a deposit per person. All
              deposits are non-refundable and non-transferable for changes of
              mind or cancellations by you. We will advise you of the amount of
              the deposit and date for final payment at the time of your
              booking. For online bookings, full payment is required at the time
              of purchase.
            </Typography>

            <Typography>
              {`If you have made a booking with us from our ‘Journeys’ ranges you
              will be required to pay a deposit of £100 per person for economy
              class flights and £200 per person for premium economy, business
              and first class flights. An additional deposit will be required
              for any tour or cruise or for certain airfares which form part of
              your Journey. The balance for your Journey must be paid no later
              than 10 weeks prior to departure or such earlier time that we
              notify you. Please check your quote or invoice to confirm whether
              your travel arrangements are from us.`}
            </Typography>

            <Typography>
              Certain airfares and services (including some airfares and
              services in the Journeys) are booked at especially competitive
              rates which may require payment in full at the time of booking and
              may be non-refundable.
            </Typography>

            <Typography>
              We will collect all mandatory taxes, however some countries may
              charge additional departure, hotel or other taxes that must be
              paid locally. We advise travelers to retain sufficient local
              currency to meet these charges.
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>Payment by debit and credit card</h2>
            <Typography>
              We accept most major debit and credit cards. You authorize us to
              charge all amounts payable by you in relation to the services
              provided to the card designated by you. If payment is not received
              from the issuer for any reason, you agree to pay us all amounts
              due immediately on demand.
            </Typography>
            <Typography>
              Payment by bank transfer (not applicable to online bookings) If
              you are paying by this method you will need to request account
              details from your consultant and make the payment at least three
              business days prior to the actual due date. You must notify your
              consultant of your payment once it has been made.
            </Typography>
          </div>

          <div className={styles.section}>
            <h2>How do I make a complaint?</h2>
            <Typography>
              We aim to provide you with an amazing travel experience. However,
              if you have a problem during your trip, please inform the relevant
              travel service provider (e.g. your hotelier) and your travel
              consultant as soon as possible who will endeavor to put things
              right. If your complaint is not resolved locally, please follow
              this up within 28 days of your return home by writing to our
              Customer Services Department at {appLink} giving your booking
              reference and all other relevant information. It is strongly
              recommended that you communicate any complaint to the travel
              service provider in question as well as your travel consultant
              without delay. If you fail to follow this procedure we will have
              been deprived of the opportunity to investigate and rectify your
              complaint whilst you were travelling and this may affect your
              rights. Out of normal office hours you may also contact our
              emergency assistance department on 0203 884 0131.
            </Typography>
          </div>
        </div>
      </div>
    </Layout>
  );
}
