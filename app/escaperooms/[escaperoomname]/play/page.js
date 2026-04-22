import { escaperooms } from "@/constants/escaperooms";
import { notFound } from "next/navigation";

const EscaperoomPlayPage = async ({ params }) => {
    const { escaperoomname } = await params;
    
    // Find the escaperoom
    const escaperoom = escaperooms.find(
        (er) => er.escaperoomname === escaperoomname
    );
    
    // If escaperoom doesn't exist or doesn't have internalLink, show 404
    if (!escaperoom || !escaperoom.internalLink) {
        notFound();
    }

    return (
        <main className="standard_margin">
            <div className="w-full h-screen">
                <iframe
                    src={escaperoom.internalLink}
                    title={escaperoom.title_en}
                    className="w-full h-full border-0"
                    allow="fullscreen"
                />
            </div>
        </main>
    );
};

export default EscaperoomPlayPage;

export async function generateStaticParams() {
    // Only generate routes for escaperooms that have internalLink
    const paths = escaperooms
        .filter((escaperoom) => escaperoom.internalLink)
        .map((escaperoom) => ({
            escaperoomname: escaperoom.escaperoomname,
        }));
    
    console.log("play paths", paths);
    return paths;
}
