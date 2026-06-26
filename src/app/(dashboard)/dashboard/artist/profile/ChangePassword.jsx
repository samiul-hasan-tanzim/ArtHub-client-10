"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { error } = await authClient.changePassword({
            currentPassword,
            newPassword,
            revokeOtherSessions: true
        });

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Password changed successfully");

        setCurrentPassword("");
        setNewPassword("");
    };

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">

            <h2 className="text-xl font-semibold mb-8">
                Change Password
            </h2>

            <form onSubmit={handleChangePassword} className="space-y-5">

                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 outline-none focus:border-black dark:focus:border-white transition"
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 outline-none focus:border-black dark:focus:border-white transition"
                />

                <button
                    disabled={loading}
                    className="bg-foreground text-background px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition disabled:opacity-50"
                >
                    {loading ? "Changing..." : "Change Password"}
                </button>

            </form>

        </div>
    );
};

export default ChangePassword;