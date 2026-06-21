"use client";
import { Trash2, AlertTriangle } from "lucide-react";
import { Button, Modal } from "@heroui/react";
import { deleteArtWork } from "@/lib/action/ArtWorkDelete";

const DeleteArtWorkModal = ({ art }) => {

    const handleDelete = async () => {
        const res = await deleteArtWork(art._id)
        if (res.deletedCount) {
            alert("Deleted successfully")
        }
    };

    return (
        <Modal>

            {/* Open Button */}
            <Button
                variant="bordered"
                className="flex-1 border-red-300 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
                <Trash2 size={16} />
                Delete
            </Button>

            <Modal.Backdrop>
                <Modal.Container>

                    <Modal.Dialog className="sm:max-w-md">

                        <Modal.CloseTrigger />

                        <Modal.Header>

                            <Modal.Icon className="bg-red-100 text-red-600">
                                <AlertTriangle className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>
                                Delete Artwork
                            </Modal.Heading>

                        </Modal.Header>

                        <Modal.Body>

                            <p className="text-sm text-zinc-500">
                                Are you sure you want to delete{" "}
                                <span className="font-semibold text-black dark:text-white">
                                    {art?.artName}
                                </span>
                                ?
                            </p>

                            <p className="text-sm text-red-500 mt-2">
                                This action cannot be undone.
                            </p>

                        </Modal.Body>

                        <Modal.Footer>

                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onPress={handleDelete}
                                className="bg-red-600 text-white hover:bg-red-700"
                            >
                                Confirm Delete
                            </Button>

                        </Modal.Footer>

                    </Modal.Dialog>

                </Modal.Container>
            </Modal.Backdrop>

        </Modal>
    );
};

export default DeleteArtWorkModal;