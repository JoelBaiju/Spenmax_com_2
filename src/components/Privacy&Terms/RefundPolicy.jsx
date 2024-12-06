import React from 'react';

function RefundPolicy() {
    return (
        <div className='bg-gradient-to-r  from-[#b2d8d9] via-[#c0e7ea] to-[#c1e6e8] p-5 md:p-10'>
            <div  className="rounded-3xl homecontainer p-5 md:p-20">
                <h1 className="text-center text-3xl fall-animation md:text-5xl montserrat mb-10 text-[#22494b]">
                    Refund Policy
                </h1>
                <p className="mb-4">
                    Spenmax is a collaborative space where customers and vendors come together.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">1. Subscription Duration and Cancellation</h2>
                <ul className="list-disc  mb-4 pl-6">
                    <li>
                        <strong>1.1 Subscription Duration:</strong> Spenmax subscriptions are valid for a duration of one year from the date of purchase.
                    </li>
                    <li>
                        <strong>1.2 Cancellation Option:</strong> Customers can cancel their subscription at any time during the subscription period.
                    </li>
                    <li>
                        <strong>1.3 Cancellation Methods:</strong>
                        <ul className="list-disc pl-6">
                            <li>Customers can cancel their subscription by deleting their account on the Spenmax platform.</li>
                            <li>Alternatively, customers can request cancellation by contacting <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">2. Refund Policy</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>2.1 No Refunds:</strong> Spenmax does not provide refunds for subscription payments. All payments made for Spenmax subscriptions are non-refundable.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">3. Subscription Benefits and Spenmax Partners</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>3.1 Subscription Utilization:</strong> Upon subscription cancellation, customers retain access to Spenmax benefits until the end of the one-year subscription period.
                    </li>
                    <li>
                        <strong>3.2 Partner Discounts:</strong> Discounts and offers provided within the subscription packages are the responsibility of Spenmax partners. Spenmax is not involved in the discount transaction process.
                    </li>
                    <li>
                        <strong>3.3 Dynamic Partner Inclusions:</strong> Spenmax reserves the right to add or remove partners from the subscription packages during the subscription period.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">4. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>4.1 Cancellation Process:</strong> Customers are responsible for initiating the cancellation process through the account deletion option on the platform or by contacting <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>.
                    </li>
                    <li>
                        <strong>4.2 Package Utilization:</strong> Customers are encouraged to maximize the benefits of their subscription package within the one-year duration, including availing discounts and offers from Spenmax partners.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to this Policy</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>5.1 Policy Updates:</strong> Spenmax reserves the right to update this Cancellation and Refund Policy to reflect changes in business practices or legal requirements. Customers will be notified of any significant changes.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Information</h2>
                <p className="mb-4">
                    For any questions or concerns regarding this Cancellation and Refund Policy, please contact us at <a href="mailto:support@Spenmax.com" className="text-blue-500 underline">support@Spenmax.com</a>.
                </p>

                <footer className="mt-8 border-t pt-4">
                    <p className="text-sm">
                        By purchasing a Spenmax subscription, you agree to the terms outlined in this Cancellation and Refund Policy. Please read this policy carefully and contact us with any questions.
                    </p>
                </footer>
            </div>

        </div>

    );
}

export default RefundPolicy;
