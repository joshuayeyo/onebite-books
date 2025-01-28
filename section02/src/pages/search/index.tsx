import { useRouter } from "next/router";
import SearchableLayout from "@/components/Searchable-Layout";
import {ReactNode} from "react";

export default function Page() {
    const router = useRouter();

    const { q } = router.query;

    return <h1>Search {q}</h1>;
}

Page.getLayout = function getLayout(page: ReactNode) {
    return <SearchableLayout>{page}</SearchableLayout>
}