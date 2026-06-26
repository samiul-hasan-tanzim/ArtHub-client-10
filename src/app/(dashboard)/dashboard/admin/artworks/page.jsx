import AdminArtworksTable from "@/components/dashboard/admin/AdminArtworksTable";
import { getAllArtWorks } from "@/lib/api/getAllArtWorks";

const AdminArtworksPage = async () => {
    const data = await getAllArtWorks();
    const artworks = data.artworks;

    return (
        <section className="space-y-8">

            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Manage Artworks
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Review and manage all uploaded artworks.
                </p>
            </div>

            <AdminArtworksTable artworks={artworks} />

        </section>
    );
};

export default AdminArtworksPage;