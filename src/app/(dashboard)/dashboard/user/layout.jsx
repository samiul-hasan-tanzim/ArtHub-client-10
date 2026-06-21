import { requareRole } from "@/lib/core/session";

const UserLayout = async ({ children }) => {
    await requareRole('user')

    return children;
};

export default UserLayout;