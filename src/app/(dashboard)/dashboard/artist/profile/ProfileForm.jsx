"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { UploadCloud } from "lucide-react";
import { updateUser } from "@/lib/api/users/updateUser";

const ProfileForm = ({ user }) => {
    const [name, setName] = useState(user?.name);
    const [loading, setLoading] = useState(false);

    const [preview, setPreview] = useState(user?.image);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const uploadToImgBB = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await res.json();
        return data?.data?.url;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = user.image;

        if (imageFile) {
            imageUrl = await uploadToImgBB(imageFile);
        }

        const result = await updateUser(user.id, {
            name,
            image: imageUrl
        });

        setLoading(false);

        if (result.modifiedCount > 0) {
            toast.success("Profile updated");
        }
    };

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">

            <h2 className="text-xl font-semibold mb-8">
                Personal Information
            </h2>

            <form onSubmit={handleUpdate} className="space-y-8">

                <div className="space-y-3">
                    <label className="text-sm font-medium">
                        Profile Image
                    </label>

                    <label className="border border-dashed border-zinc-400 p-4 flex items-center justify-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        <div className="flex items-center gap-2 text-sm">
                            <UploadCloud size={18} />
                            Upload Image
                        </div>
                    </label>

                    {preview && (
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border">
                            <Image
                                src={preview}
                                alt="preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Full Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 outline-none focus:border-black dark:focus:border-white transition"
                    />
                </div>

                <button
                    disabled={loading}
                    className="bg-foreground text-background px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Changes"}
                </button>

            </form>
        </div>
    );
};

export default ProfileForm;