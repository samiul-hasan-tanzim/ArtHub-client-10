'use client'
import { useState } from "react";
import Image from "next/image";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField, FieldError, Description, RadioGroup, Radio } from "@heroui/react";
import { UploadCloud } from "lucide-react";
import { playfair } from "@/lib/fonts";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [role, setRole] = useState('user')

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const uploadToImgBB = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`, {
            method: "POST",
            body: formData
        });

        const data = await res.json();
        return data?.data?.url;
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        let imageUrl = null;
        if (imageFile) imageUrl = await uploadToImgBB(imageFile);

        const userData = {
            name: formData.get("fullName"),
            email: formData.get("email"),
            password: formData.get("password"),
            image: imageUrl
        };
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')
        if (password === confirmPassword) {
            const { data, error } = await authClient.signUp.email({
                ...userData,
                role,
            });
        }
        else {
            alert('Password not matched')
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

                <div className="hidden md:flex flex-col justify-center p-12 border-r border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4">Join ArtHub</p>
                    <h1 className={`${playfair.className} text-5xl font-black mb-6`}>
                        Create Your Collector Profile
                    </h1>
                    <p className="text-zinc-500 leading-8">
                        Join a premium ecosystem where artists and collectors connect through curated digital experiences.
                    </p>
                </div>

                <div className="p-8 md:p-12">
                    <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>

                        <TextField isRequired name="fullName">
                            <Label>Full Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email address" : null}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            validate={value => {
                                if (value.length < 8) return "Minimum 8 characters";
                                if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
                                if (!/[0-9]/.test(value)) return "Need one number";
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter password" />
                            <Description>8+ chars, 1 uppercase, 1 number</Description>
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="confirmPassword"
                            type="password"
                        >
                            <Label>Confirm Password</Label>
                            <Input placeholder="Confirm password" />
                            <FieldError />
                        </TextField>

                        <div className="space-y-3">
                            <Label>Profile Image</Label>

                            <label className="border border-dashed border-zinc-400 p-4 flex items-center justify-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                <div className="flex items-center gap-2 text-sm">
                                    <UploadCloud size={18} />
                                    Upload Image
                                </div>
                            </label>

                            {preview && (
                                <div className="relative w-24 h-24 rounded-full overflow-hidden border">
                                    <Image src={preview} alt="preview" fill className="object-cover" />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-4">
                            <Label>Subscription plan</Label>
                            <RadioGroup onChange={value => setRole(value)} defaultValue="user" name="role" orientation="horizontal">
                                <Radio value="user">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>User</Label>
                                    </Radio.Content>
                                </Radio>
                                <Radio value="artist">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Artist</Label>
                                    </Radio.Content>
                                </Radio>
                            </RadioGroup>
                        </div>

                        <div className="flex gap-3 pt-3">
                            <Button type="submit">
                                <Check />
                                Create Account
                            </Button>

                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 my-2">
                            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
                            <span className="text-xs uppercase tracking-widest text-zinc-500">or</span>
                            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
                        </div>

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

                            Sign Up with Google
                        </Button>

                        <div className="pt-2 text-center">
                            <p className="text-sm text-zinc-500">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="underline hover:text-black dark:hover:text-white transition"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>

                    </Form>
                </div>

            </div>
        </section>
    );
};

export default SignUpPage;