"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Form, Input, Label, TextField, FieldError, TextArea, Dropdown } from "@heroui/react";
import { UploadCloud, Check, ChevronDown, LoaderCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { submitArtWord } from "@/lib/action/ArtWorkPost";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const categories = ["Abstract", "Portrait", "Digital Art", "Nature", "Conceptual", "Oil Painting"];

const AddArtwork = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageChange = e => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const uploadToImgBB = async file => {
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
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        let imageUrl = null;

        if (imageFile) imageUrl = await uploadToImgBB(imageFile);

        const artworkData = {
            artName: formData.get("artName"),
            artistId: user?.id,
            status: "pending",
            artistName: user?.name,
            price: Number(formData.get("price")),
            sold: false,
            category,
            description: formData.get("description"),
            artistBio: formData.get("artistBio"),
            image: imageUrl
        };

        // console.log(artworkData);
        const res = await submitArtWord(artworkData)
        setLoading(false);

        if (res.insertedId) {
            toast.success('Art Posted successfully!')
            e.target.reset()
            redirect(`/dashboard/artist/artworks`)
        }
    };

    return (
        <section className="max-w-4xl">

            <div className="mb-8">
                <h2 className="text-3xl font-bold">Add Artwork</h2>
                <p className="mt-1 text-sm text-zinc-500">Publish your artwork to the marketplace.</p>
            </div>

            <Form onSubmit={onSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-5">

                    <TextField isRequired name="artName">
                        <Label>Artwork Name</Label>
                        <Input placeholder="The Silent Horizon" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="price" type="number">
                        <Label>Price ($)</Label>
                        <Input placeholder="500" />
                        <FieldError />
                    </TextField>

                </div>

                {/* Category */}

                <div>
                    <Label>Category</Label>

                    <Dropdown>
                        <Dropdown.Trigger>
                            <div className="mt-2 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                                <span className={`${!category && "text-zinc-500"}`}>
                                    {category || "Select Category"}
                                </span>

                                <ChevronDown size={16} />
                            </div>
                        </Dropdown.Trigger>

                        <Dropdown.Popover>
                            <Dropdown.Menu>
                                {categories.map(item => (
                                    <Dropdown.Item key={item} onAction={() => setCategory(item)}>
                                        {item}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>

                {/* Description */}

                <TextField isRequired name="description">
                    <Label>Description</Label>
                    <TextArea
                        name="description"
                        rows={5}
                        placeholder="Describe your artwork..."
                    />
                    <FieldError />
                </TextField>

                {/* Artist Bio */}

                <TextField isRequired name="artistBio">
                    <Label>Artist Bio</Label>
                    <TextArea
                        name="artistBio"
                        rows={4}
                        placeholder="Write a short artist bio..."
                    />
                    <FieldError />
                </TextField>

                {/* Image Upload */}

                <div>
                    <Label>Artwork Image</Label>

                    <label className="mt-2 border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        <UploadCloud size={22} />

                        <p className="mt-2 text-sm text-zinc-500">
                            Click to upload artwork image
                        </p>
                    </label>

                    {preview && (
                        <div className="mt-4 relative w-44 h-44 rounded-xl overflow-hidden border">
                            <Image
                                src={preview}
                                alt="preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    isDisabled={loading}
                    className="mt-3"
                >
                    {loading ? <LoaderCircle className="animate-spin" size={18} /> : <Check size={18} />}
                    {loading ? "Publishing..." : "Publish Artwork"}
                </Button>

            </Form>
        </section>
    );
};

export default AddArtwork;