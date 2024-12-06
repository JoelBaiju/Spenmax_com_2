import React from 'react';

function PrivacyPolicy() {
    return (
        <div className='p-5 md:p-10 bg-gradient-to-r  from-[#b2d8d9] via-[#c0e7ea] to-[#c1e6e8]' >
            <div className="homecontainer rounded-3xl p-5 md:p-20 ">
                <h1 className="text-center text-3xl md:text-5xl montserrat mb-10 text-[#22494b] fall-animation ">Privacy Policy</h1>
                <p className="mb-4">
                    Last Updated: <strong>18.01.2024</strong>
                </p>
                <p className="mb-4">
                    Thank you for choosing Spenmax, your trusted digital discount wallet platform. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>1.1 Personal Information:</strong> When you register on Spenmax, we may collect personal information such as your name, email address, contact number, and billing information.
                    </li>
                    <li>
                        <strong>1.2 Usage Data:</strong> We collect information on how you interact with our platform, including your browsing history, preferences, and transaction details.
                    </li>
                    <li>
                        <strong>1.3 Device Information:</strong> We may collect information about the device you use to access Spenmax, including the device type, operating system, and unique device identifiers.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>2.1 Providing Services:</strong> Your personal information is used to provide you with our services, including processing transactions, delivering exclusive offers, and facilitating communication.
                    </li>
                    <li>
                        <strong>2.2 Personalization:</strong> We use your data to personalize your experience on Spenmax, tailoring offers and recommendations based on your preferences and behavior.
                    </li>
                    <li>
                        <strong>2.3 Analytics:</strong> Aggregated and anonymized data is used for analytics purposes to improve our services, optimize user experience, and identify trends.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Protect Your Information</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>3.1 Security Measures:</strong> We implement industry-standard security measures to protect your data against unauthorized access, disclosure, alteration, and destruction.
                    </li>
                    <li>
                        <strong>3.2 Data Encryption:</strong> All sensitive data, including payment information, is encrypted using secure socket layer technology (SSL) to ensure the highest level of protection during transmission.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">4. Information Sharing</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>4.1 Third-Party Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in delivering our services. These providers are obligated to maintain the confidentiality of your information.
                    </li>
                    <li>
                        <strong>4.2 Legal Requirements:</strong> We may disclose your information if required by law, in response to legal requests, or to protect our rights, privacy, safety, or property.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Choices</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>5.1 Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in the communication.
                    </li>
                    <li>
                        <strong>5.2 Access and Correction:</strong> You have the right to access and correct your personal information. Contact us at <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a> to request information or make corrections.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to the Privacy Policy</h2>
                <p className="mb-4">
                    Spenmax reserves the right to update and modify this Privacy Policy at any time. We will notify users of significant changes through the platform or other communication channels.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>.
                </p>

                <p className="mt-8">
                    By using Spenmax, you consent to the terms outlined in this Privacy Policy. Please review this policy periodically for any updates.
                </p>

                <footer className="mt-8 border-t pt-4">
                    <p className="text-sm">
                        <strong>Trainonex</strong> | M-Square Building, Technopark Phase 1, Trivandrum, Kerala, India, PIN 695581 | <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>
                    </p>
                </footer>
            </div>
        </div>


    );
}

export default PrivacyPolicy;
