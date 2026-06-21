import { requareRole } from "@/lib/core/session";

const AdminLayout = async ({ children }) => {
    await requareRole('admin')

    return children;
};

export default AdminLayout;