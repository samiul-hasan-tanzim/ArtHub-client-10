import UsersTable from "@/components/dashboard/admin/UsersTable";
import { getAllUsers } from "@/lib/api/user";

const ManageUsersPage = async () => {
    const users = await getAllUsers();

    return (
        <section className="space-y-8">

            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Manage Users
                </h1>

                <p className="mt-2 text-zinc-500">
                    Manage all registered users.
                </p>
            </div>

            <UsersTable users={users} />

        </section>
    );
};

export default ManageUsersPage;