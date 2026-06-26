"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateUserRole } from "@/lib/api/user";

const UsersTable = ({ users }) => {
    const router = useRouter();
    const [loadingId, setLoadingId] = useState("");

    const handleRoleChange = async (userId, newRole) => {
        setLoadingId(userId);

        const result = await updateUserRole(userId, newRole);

        setLoadingId("");

        if (result.modifiedCount > 0) {
            toast.success("User role updated");
            router.refresh();
        }
    };

    if (users.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-12 text-center text-zinc-500 dark:text-zinc-400">
                No users found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-zinc-300 dark:border-zinc-700">

            <table className="w-full text-left">

                <thead className="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">

                    <tr className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">

                        <th className="px-6 py-5 font-medium">
                            Name
                        </th>

                        <th className="px-6 py-5 font-medium">
                            Email
                        </th>

                        <th className="px-6 py-5 font-medium">
                            Current Role
                        </th>

                        <th className="px-6 py-5 font-medium">
                            Plan
                        </th>

                        <th className="px-6 py-5 font-medium">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr
                            key={user._id}
                            className="
                                border-b 
                                border-zinc-200 
                                dark:border-zinc-800
                                hover:bg-zinc-50
                                dark:hover:bg-zinc-900/40
                                transition
                            "
                        >

                            <td className="px-6 py-5 font-medium">
                                {user.name}
                            </td>

                            <td className="px-6 py-5 text-zinc-600 dark:text-zinc-400">
                                {user.email}
                            </td>

                            <td className="px-6 py-5">

                                <span
                                    className="
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-medium
                                        capitalize
                                        bg-zinc-100
                                        dark:bg-zinc-800
                                    "
                                >
                                    {user.role}
                                </span>

                            </td>

                            <td className="px-6 py-5">

                                <span
                                    className="
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        capitalize
                                        bg-zinc-100
                                        dark:bg-zinc-800
                                    "
                                >
                                    {user.plan}
                                </span>

                            </td>

                            <td className="px-6 py-5">

                                <select
                                    defaultValue={user.role}
                                    disabled={loadingId === user._id || user.email === "admin@arthub.com"}
                                    onChange={(e) =>
                                        handleRoleChange(
                                            user._id,
                                            e.target.value
                                        )
                                    }
                                    className={`
                                        w-32
                                        px-3
                                        py-2
                                        text-sm
                                        rounded-lg
                                        border
                                        border-zinc-300
                                        dark:border-zinc-700
                                        bg-white
                                        dark:bg-zinc-900
                                        text-black
                                        dark:text-white
                                        outline-none
                                        focus:ring-2
                                        focus:ring-zinc-400
                                        dark:focus:ring-zinc-600
                                        transition
                                        cursor-pointer
                                        disabled:opacity-50
                                    `}
                                >

                                    <option value="user">
                                        User
                                    </option>

                                    <option value="artist">
                                        Artist
                                    </option>

                                    <option value="admin">
                                        Admin
                                    </option>

                                </select>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default UsersTable;