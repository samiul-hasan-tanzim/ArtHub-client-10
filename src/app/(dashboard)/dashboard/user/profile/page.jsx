"use client";

import { authClient } from "@/lib/auth-client";
import ProfileForm from "./ProfileForm";
import ChangePassword from "./ChangePassword";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="py-20 text-center text-zinc-500">
                Loading profile...
            </div>
        );
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

            <ProfileForm user={session?.user} />

            <ChangePassword />

        </section>
    );
};

export default ProfilePage;