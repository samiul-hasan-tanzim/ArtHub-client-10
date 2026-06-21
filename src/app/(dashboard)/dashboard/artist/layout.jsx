import { requareRole } from "@/lib/core/session";

const ArtistLayout = async ({ children }) => {
    await requareRole('artist')

    return children;
};

export default ArtistLayout;