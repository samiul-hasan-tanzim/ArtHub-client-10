"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { playfair } from "@/lib/fonts";

import {
    Button,
    Form,
    Input,
    Label,
    TextField,
    FieldError,
} from "@heroui/react";

import { Check } from "@gravity-ui/icons";
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const { data, error } = await authClient.signIn.email({
            ...loginData,
        });

        if (error) {
            setErrorMsg(error.message || "Login failed");
            setLoading(false);
            return;
        }

        setLoading(false);

        if (data?.user?.role === 'user') {
            window.location.href = "/";

        }
        else {
            window.location.href = `/dashboard/${data?.user?.role}`;
        }

    };

    const handelSocialAuth = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };



    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-5xl grid md:grid-cols-2 border border-zinc-200 dark:border-zinc-800">

                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center p-12 border-r border-zinc-200 dark:border-zinc-800">
                    <Link href="/" className="mb-10 text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-black dark:hover:text-white transition">
                        ← Back to Home
                    </Link>
                    <p className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4">
                        Welcome Back
                    </p>

                    <h1 className={`${playfair.className} text-5xl font-black mb-6`}>
                        Enter Your Art Collection Space
                    </h1>

                    <p className="text-zinc-500 leading-8">
                        Sign in and continue exploring curated artwork collections,
                        artist portfolios, and premium collector experiences.
                    </p>
                </div>

                {/* Right Side */}
                <div className="p-8 md:p-12">

                    {errorMsg && (
                        <div className="mb-4 flex items-center gap-2 text-red-500 text-sm">
                            <AlertCircle size={16} />
                            {errorMsg}
                        </div>
                    )}

                    <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>

                        {/* Email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) =>
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                    ? "Invalid email"
                                    : null
                            }
                        >
                            <Label>Email</Label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-3 text-zinc-500"
                                />

                                <Input
                                    placeholder="john@example.com"
                                    className="pl-10 w-full"
                                />
                            </div>

                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            name="password"
                            type={showPassword ? "text" : "password"}
                        >
                            <Label>Password</Label>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-3 text-zinc-500"
                                />

                                <Input
                                    placeholder="Enter password"
                                    className="pl-10 pr-10 w-full"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-zinc-500"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>

                            <FieldError />
                        </TextField>

                        {/* Forgot password */}
                        <div className="w-full text-right">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login button */}
                        <Button type="submit" isDisabled={loading}>
                            <Check />
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-2 w-full">
                            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
                            <span className="text-xs uppercase tracking-widest text-zinc-500">
                                or
                            </span>
                            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
                        </div>

                        {/* Google */}
                        <Button
                            onClick={handelSocialAuth}
                            type="button"
                            variant="bordered"
                            className="w-full flex items-center justify-center gap-3"
                        >
                            <svg width="18" height="18" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.93 2.36 30.4 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.54 13.44 17.8 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.5 24.55c0-1.64-.15-3.22-.42-4.73H24v9h12.7c-.55 2.96-2.22 5.47-4.74 7.15l7.33 5.7C43.92 37.38 46.5 31.5 46.5 24.55z" />
                                <path fill="#FBBC05" d="M10.6 28.46A14.4 14.4 0 0 1 9.5 24c0-1.55.27-3.05.76-4.46l-8.04-6.24A23.86 23.86 0 0 0 0 24c0 3.83.92 7.44 2.56 10.7l8.04-6.24z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.92-2.13 15.9-5.8l-7.33-5.7c-2.04 1.37-4.66 2.18-8.57 2.18-6.2 0-11.46-3.94-13.4-9.46l-8.04 6.24C6.5 42.62 14.62 48 24 48z" />
                            </svg>

                            Continue with Google
                        </Button>

                        {/* Signup */}
                        <div className="pt-2 text-center">
                            <p className="text-sm text-zinc-500">
                                Don’t have an account?{" "}
                                <Link
                                    href="/register"
                                    className="underline hover:text-black dark:hover:text-white transition"
                                >
                                    Create Account
                                </Link>
                            </p>
                        </div>

                    </Form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;