
import { getUserSession } from "@/lib/core/session";
import { Person } from "@gravity-ui/icons";
import { Avatar, Button, Chip, Drawer, Input } from "@heroui/react";
import { LayoutDashboard, Palette, ShoppingBag, DollarSign, Users, BarChart3, Search, House, ArrowLeftFromLine, CreditCard, ImageIcon, PlusSquare, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../logout-button";
import { getUserById } from "@/lib/api/users/getUserById";

const DashboardSideBar = async () => {
    const user = await getUserSession();
    const directUser = await getUserById(user?.id)

    const userNavLinks = [
        { icon: LayoutDashboard, href: "/dashboard/user", label: "Overview" },
        { icon: ShoppingBag, href: "/dashboard/user/purchases", label: "Purchase History" },
        { icon: Palette, href: "/dashboard/user/artworks", label: "Bought Artworks" },
        { icon: Person, href: "/dashboard/user/profile", label: "Profile" }
    ];

    const artistNavLinks = [
        { icon: LayoutDashboard, href: "/dashboard/artist", label: "Overview" },
        { icon: ImageIcon, href: "/dashboard/artist/artworks", label: "Manage Artworks" },
        { icon: PlusSquare, href: "/dashboard/artist/add-artwork", label: "Add Artwork" },
        { icon: DollarSign, href: "/dashboard/artist/sales", label: "Sales History" },
        { icon: Person, href: "/dashboard/artist/profile", label: "Profile" }
    ];

    const adminNavLinks = [
        { icon: LayoutDashboard, href: "/dashboard/admin", label: "Overview" },
        { icon: Users, href: "/dashboard/admin/users", label: "Manage Users" },
        { icon: ImageIcon, href: "/dashboard/admin/artworks", label: "Manage Artworks" },
        { icon: CreditCard, href: "/dashboard/admin/transactions", label: "Transactions" },
        { icon: BarChart3, href: "/dashboard/admin/analytics", label: "Analytics" }
    ];

    const navLinkMap = { user: userNavLinks, artist: artistNavLinks, admin: adminNavLinks };
    const navItems = navLinkMap[user?.role ?? "user"];

    const navContent = (
        <nav className="flex flex-col gap-2 mt-5">
            {navItems.map(item => (
                <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            {/* Desktop */}
            <aside className="hidden lg:flex flex-col w-72 min-h-screen border-r p-5 bg-white dark:bg-black sticky top-0">

                {/* Logo */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-wide">ArtHub</h2>
                    <p className="text-xs text-zinc-500">Premium Art Marketplace</p>
                </div>

                {/* User Info */}
                <div className="mb-6">
                    <div className="flex gap-3 items-center">
                        <Avatar>
                            <Avatar.Image src={directUser?.image} />
                            <Avatar.Fallback>U</Avatar.Fallback>
                        </Avatar>

                        <div>
                            <p className="font-medium">{directUser?.name}</p>
                            <Chip className="text-xs capitalize" color="success">{directUser?.role}</Chip>
                        </div>
                    </div>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-3.5 z-10 text-zinc-500" />
                    <Input placeholder="Search dashboard..." className="pl-10" />
                </div>

                {/* Nav */}
                {navContent}

                {/* Bottom */}
                <div className="mt-auto pt-6 border-t flex flex-col gap-3">

                    <Link href="/">
                        <Button className="w-full" variant="bordered">
                            <House size={16} /> Homepage
                        </Button>
                    </Link>

                    <LogoutButton />

                </div>
            </aside>

            {/* Mobile */}
            <div className="lg:hidden p-3">

                <Drawer>
                    <Button
                        variant="bordered"
                        className="border-zinc-300 bg-white text-black hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black dark:text-white dark:hover:bg-zinc-900"
                    >
                        <Menu size={16} />
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog>

                                <Drawer.CloseTrigger />

                                <Drawer.Header>
                                    <Drawer.Heading>ArtHub Dashboard</Drawer.Heading>
                                </Drawer.Header>

                                <Drawer.Body>

                                    <div className="mb-5 relative">
                                        <Search size={16} className="absolute left-3 top-3.5 z-10 text-zinc-500" />
                                        <Input placeholder="Search..." className="pl-10" />
                                    </div>

                                    <div className="mb-5 flex gap-3 items-center">
                                        <Avatar>
                                            <Avatar.Image src={user?.image} />
                                            <Avatar.Fallback>U</Avatar.Fallback>
                                        </Avatar>

                                        <div>
                                            <p>{user?.name}</p>
                                            <p className="text-xs text-zinc-500 capitalize">{user?.role}</p>
                                        </div>
                                    </div>

                                    {navContent}

                                    <div className="mt-8 flex flex-col gap-3">

                                        <Link href="/">
                                            <Button variant="bordered" className="w-full">
                                                <House size={16} /> Homepage
                                            </Button>
                                        </Link>

                                        <LogoutButton />

                                    </div>

                                </Drawer.Body>

                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>

            </div>
        </>
    );
};

export default DashboardSideBar;