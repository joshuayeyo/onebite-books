import SearchableLayout from "@/components/Searchable-Layout";
import {ReactNode} from "react";
import BookItem from "@/components/BookItem";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import FetchBooks from "@/lib/FetchBooks";

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const q = context.query.q as string;
    const books = await FetchBooks(q as string);

    return {
        props: {
            books,
        },
    };
};

export default function Page({books}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    );
}

Page.getLayout = function getLayout(page: ReactNode) {
    return <SearchableLayout>{page}</SearchableLayout>
}