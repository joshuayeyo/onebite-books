import { useRouter } from "next/router";
import SearchableLayout from "@/components/Searchable-Layout";
import {ReactNode} from "react";
import books from "@/mock/books.json"
import BookItem from "@/components/BookItem";

export default function Page() {
    return (
        <div>
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    );
}

Page.getLayout = function getLayout(page: ReactNode) {
    return <SearchableLayout>{page}</SearchableLayout>
}