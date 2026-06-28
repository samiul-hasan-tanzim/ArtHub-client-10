"use client";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { initUserAfterSocialLogin } from "@/lib/api/users/initUserAfterSocialLogin";

const AuthInitializer = () => {
    const { data: session } = authClient.useSession();

    useEffect(() => {
        const init = async () => {
            if (session?.user?.email) {
                await initUserAfterSocialLogin(
                    session?.user?.email
                );
            }
        };

        init();
    }, [session]);

    return null;
};

export default AuthInitializer;