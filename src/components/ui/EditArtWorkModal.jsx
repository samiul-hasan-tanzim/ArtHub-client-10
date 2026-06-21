"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Input, Label, Modal, Surface, TextField, TextArea } from "@heroui/react";
import { Pencil, UploadCloud } from "lucide-react";
import { patchArtWork } from "@/lib/action/ArtWorkPatch";

const EditArtWorkModal = ({ art }) => {
    const [preview, setPreview] = useState(art?.image);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = e => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const uploadToImgBB = async file => {
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

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        let imageUrl = art?.image;
        if (imageFile) {
            imageUrl = await uploadToImgBB(imageFile);
        }

        const updatedData = {
            artName: formData.get("artName"),
            price: Number(formData.get("price")),
            category: formData.get("category"),
            description: formData.get("description"),
            artistBio: formData.get("artistBio"),
            image: imageUrl
        };
        const res = await patchArtWork(art._id, updatedData)
    };

    return (
        <Modal>

            {/* Open Button */}
            <Button variant="bordered" className="flex-1">
                <Pencil size={16} />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">

                    <Modal.Dialog className="sm:max-w-2xl">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Edit Artwork</Modal.Heading>

                            <p className="mt-1 text-sm text-zinc-500">
                                Update your artwork information.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">

                            <Surface variant="default">

                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                    <TextField name="artName">
                                        <Label>Artwork Name</Label>
                                        <Input defaultValue={art?.artName} />
                                    </TextField>

                                    <TextField name="price">
                                        <Label>Price ($)</Label>
                                        <Input
                                            type="number"
                                            defaultValue={art?.price}
                                        />
                                    </TextField>

                                    <TextField name="category">
                                        <Label>Category</Label>
                                        <Input
                                            defaultValue={art?.category}
                                            placeholder="Abstract / Portrait..."
                                        />
                                    </TextField>

                                    <TextField name="description">
                                        <Label>Description</Label>

                                        <TextArea
                                            rows={4}
                                            defaultValue={art?.description}
                                            placeholder="Artwork description"
                                        />
                                    </TextField>

                                    <TextField name="artistBio">
                                        <Label>Artist Bio</Label>

                                        <TextArea
                                            rows={3}
                                            defaultValue={art?.artistBio}
                                            placeholder="Short artist bio"
                                        />
                                    </TextField>

                                    {/* Image Upload */}
                                    <div>

                                        <p className="mb-2 text-sm font-medium">
                                            Artwork Image
                                        </p>

                                        <label className="border border-dashed rounded-xl p-4 flex justify-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">

                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />

                                            <div className="flex items-center gap-2 text-sm">
                                                <UploadCloud size={18} />
                                                Change Image
                                            </div>

                                        </label>

                                        {preview && (
                                            <div className="relative w-40 h-40 mt-4 rounded-xl overflow-hidden border">
                                                <Image
                                                    src={preview}
                                                    alt="preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}

                                    </div>

                                    <Modal.Footer>

                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit">
                                            Save Changes
                                        </Button>

                                    </Modal.Footer>

                                </form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>
            </Modal.Backdrop>

        </Modal>
    );
};

export default EditArtWorkModal;