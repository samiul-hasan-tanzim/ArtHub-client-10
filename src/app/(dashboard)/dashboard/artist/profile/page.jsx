"use client";

import { authClient } from "@/lib/auth-client";
import ProfileForm from "./ProfileForm";
import ChangePassword from "./ChangePassword";
import { useEffect, useState } from "react";
import { getUserById } from "@/lib/api/users/getUserByIdClientSide";
import DashboardLoading from "@/app/(dashboard)/loading";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            if (session?.user?.id) {
                const data = await getUserById(session?.user?.id);
                setUser(data);
            }
        };

        loadUser();
    }, [session]);

    if (isPending || !user) {
        return <DashboardLoading />
    }


    return (
        <section className="space-y-10">

            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Profile Settings
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Manage your personal information and account security.
                </p>
            </div>

            <ProfileForm user={user} />

            <ChangePassword />

        </section>
    );
};

export default ProfilePage;