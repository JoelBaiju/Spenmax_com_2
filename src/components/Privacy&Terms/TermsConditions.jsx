import React from 'react';

function TermsConditions() {
  return (
    <div className='bg-gradient-to-r  from-[#b2d8d9] via-[#c0e7ea] to-[#c1e6e8] p-5 md:p-10'>
      <div className="rounded-3xl homecontainer p-5 md:p-20">
        <h1 className=" text-center text-3xl fall-animation md:text-5xl montserrat mb-10 text-[#22494b]">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to Spenmax! Please carefully read and understand the following terms and conditions before proceeding with the use of our services:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By subscribing to the Spenmax Digital Wallet Service, you acknowledge that you have read, understood, and agree to comply with these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Usage</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Digital wallet is unique for users and is non-transferable, intended for exclusive use.</li>
          <li>Spenmax Utility, Spenmax Lifestyle, and Spenmax Services are the three package types. Spenmax Grand combines all three.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Eligibility</h2>
        <p className="mb-4">
          Spenmax subscription is currently available only in India. Service will be extended to other countries, and nationals of respective countries with valid nationality IDs will be eligible for the subscription.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Discounts and Offers</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Cardholders are entitled to discounts on purchases from Spenmax Partners.</li>
          <li>The discount depends on the Spenmax Partner's offering and will reflect any changes made by the partner.</li>
          <li>Spenmax provides a platform to avail of discounts directly from partners.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Validity</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Initial subscription is valid for two years from the purchase date, with renewal terms communicated in advance.</li>
          <li>After expiry, minimal renewal charges will apply for continued service.</li>
          <li>Renewals can be made through <a href="https://Spenmax.com" className="text-blue-500 underline">www.Spenmax.com</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Privacy and Security</h2>
        <p className="mb-4">
          We prioritize the privacy and security of your information. Refer to our <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a> for details.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Responsibility</h2>
        <p className="mb-4">
          Subscribers are responsible for safeguarding their Spenmax service credentials. Report any breaches, device loss, or hacking activities immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Empaneled Providers</h2>
        <p className="mb-4">
          Spenmax partners with utility, lifestyle, and service providers for exclusive discounts and offers. We strive to add more vendors based on customer requests but cannot guarantee partnerships.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Termination of Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Subscribers can terminate service anytime, but package cancellation and refunds are not available.</li>
          <li>Non-renewed subscriptions will result in login restrictions after expiry.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Modification of Terms</h2>
        <p className="mb-4">
          Spenmax reserves the right to modify terms and conditions at any time, with prior notification to subscribers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">11. Refund / Cancellation Policy</h2>
        <p className="mb-4">
          Fees are non-refundable. For overcharges or billing errors, contact Customer Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">12. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of courts in Trivandrum.
        </p>

        <footer className="mt-8 border-t pt-4">
          <p className="text-sm">
            For support, contact us at <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>.
          </p>
        </footer>
      </div>
    </div>

  );
}

export default TermsConditions;
