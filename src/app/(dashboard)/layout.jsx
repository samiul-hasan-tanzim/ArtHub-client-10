import DashboardReloadHandler from "@/components/dashboard/DashboardReloadHandler";
import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <DashboardSideBar />

            <main className="flex-1 p-4 lg:p-8">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;