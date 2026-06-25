import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

const PaymentSuccessPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentSuccessClient />
        </Suspense>
    );
};

export default PaymentSuccessPage;