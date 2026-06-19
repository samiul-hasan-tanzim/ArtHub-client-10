'use client'
import { useRef, useState } from "react";
import { Button, Dropdown, Avatar } from "@heroui/react";
import Image from "next/image";
import logo from "../asstes/logo.png";
import { playfair } from "@/lib/fonts";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const inputRef = useRef(null);
    const pathname = usePathname();


    const handleWrapperClick = () => {
        inputRef.current?.focus();
    };

    const navlinks = [
        { name: 'Home', href: '/' },
        { name: 'Browse Artworks', href: '/artworks' },
        { name: 'Dashboard', href: '/gggg' },
    ]



    return (
        <nav className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-background/80 backdrop-blur-lg">
            <header className="mx-auto flex h-20 w-11/12 items-center justify-between px-4">

                <div className="flex items-center gap-10">
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                    <div className="flex items-center gap-2">
                        <Image className="dark:invert" src={logo} alt="logo" width={32} height={32}></Image>
                        <p className={`${playfair.className} text-2xl font-black tracking-tight text-foreground`}>ArtHub</p>
                    </div>
                </div>

                <ul className="hidden items-center gap-8 md:flex absolute left-1/2 transform -translate-x-1/2">
                    {navlinks.map((navlink, i) => {
                        const isActive = pathname === navlink.href;

                        return (
                            <li key={i} className="relative">
                                {navlink.name === "Dashboard" ? (
                                    <Dropdown>
                                        <Button className={`w-10 h-10 rounded-full ${isActive ? "ring-2 ring-black dark:ring-white" : ""
                                            }`}>
                                            <Avatar>
                                                <Avatar.Image
                                                    alt="John Doe"
                                                    src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                                />
                                                <Avatar.Fallback>JD</Avatar.Fallback>
                                            </Avatar>
                                        </Button>

                                        <Dropdown.Popover>
                                            <Dropdown.Menu>
                                                <Dropdown.Item textValue="dashboard">
                                                    <Link href={navlink.href} className="block w-full">
                                                        Dashboard
                                                    </Link>
                                                </Dropdown.Item>

                                                <Dropdown.Item
                                                    onClick={() =>
                                                        setTheme(theme === "dark" ? "light" : "dark")
                                                    }
                                                    textValue="theme toggle"
                                                >
                                                    <button className="flex flex-row-reverse justify-between w-full items-center">
                                                        {theme === "dark" ? (
                                                            <>
                                                                <Sun size={16} /> Light Mode
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Moon size={16} /> Dark Mode
                                                            </>
                                                        )}
                                                    </button>
                                                </Dropdown.Item>

                                                <Dropdown.Item textValue="logout">
                                                    <button>Logout</button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                ) : (
                                    <Link
                                        href={navlink.href}
                                        className={`relative text-sm font-medium transition-colors ${isActive
                                            ? "text-black dark:text-white"
                                            : "text-zinc-500 hover:text-black dark:hover:text-white"
                                            }`}
                                    >
                                        {navlink.name}

                                        {/* animated underline */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-0.5 bg-black dark:bg-white transition-all duration-300 origin-left ${isActive ? "w-full scale-x-100" : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                                                }`}
                                        />
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden items-center gap-6 md:flex">
                    <div
                        className="relative flex items-center cursor-text"
                        onClick={handleWrapperClick}
                    >
                        <Search className="absolute left-3 text-zinc-400" size={18} />

                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search curated works..."
                            className="pl-10 pr-4 py-2 text-sm bg-transparent border border-transparent 
        hover:border-zinc-200 focus:border-zinc-300 dark:hover:border-black 
        outline-none rounded-md transition-all placeholder:text-zinc-400 
        w-0 focus:w-64"
                        />
                    </div>

                    <Link href="/login">
                        <button className="border-zinc-800 underline border dark:border-zinc-200 text-foreground font-bold rounded-none px-6 py-2 tracking-wide hover:bg-foreground hover:text-background transition-all text-xs">
                            Login
                        </button>
                    </Link>
                </div>
            </header>

            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {navlinks.map((navlink, i) => (
                            <li key={i}>
                                <Link href={navlink.href} className="block py-2">
                                    {navlink.name}
                                </Link>
                            </li>
                        ))}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex flex-row-reverse justify-between w-full items-center mt-3">
                            {theme === "dark" ? <><Sun size={16} />Light Mode</> : <><Moon size={16} />Dark Mode</>}
                        </button>
                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            <Link href="#" className="block py-2">
                                Login
                            </Link>
                            <Button className="w-full">Sign Up</Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;