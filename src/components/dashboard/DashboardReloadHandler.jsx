"use client";

import { useEffect } from "react";

const DashboardReloadHandler = () => {
    useEffect(() => {
        const justLoggedIn = sessionStorage.getItem("just_logged_in");

        if (justLoggedIn) {
            sessionStorage.removeItem("just_logged_in");
            window.location.reload();
        }
    }, []);

    return null;
};

export default DashboardReloadHandler;