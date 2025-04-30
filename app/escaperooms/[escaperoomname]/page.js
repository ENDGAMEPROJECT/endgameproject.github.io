// Components
import EscaperoomFull from "@/components/EscaperoomFull";

import { escaperooms } from "@/constants/escaperooms";

const EscaperoomPage = async ({ params }) => {   
    const { escaperoomname } = await params;
    return (
        <main className="standard_margin ">
            <EscaperoomFull escaperoomname={escaperoomname} />
        </main>
    );        
}

export default EscaperoomPage;

export async function generateStaticParams() {
    const paths = escaperooms.map((escaperoom) => ({
        escaperoomname: escaperoom.escaperoomname,
    }));
    console.log("paths", paths);

    return paths;
}