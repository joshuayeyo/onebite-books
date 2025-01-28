import style from "./index.module.css"
import SearchableLayout from "@/components/Searchable-Layout";
import {ReactNode} from "react";
import { InferGetServerSidePropsType } from "next";
import BookItem from "@/components/BookItem";
import FetchBooks from "@/lib/FetchBooks";
import FetchRandomBooks from "@/lib/FetchRandomBooks";

// 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 미리 가져와서 전달할 수 있음
export const getServerSideProps = async () => {

    const [allBooks, recommendedBooks] = await Promise.all([
        FetchBooks(),
        FetchRandomBooks(),
    ]);
    return {
        props: {
            allBooks,
            recommendedBooks,
        },
    };
};

export default function Home({
    allBooks,
    recommendedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(allBooks);
  return (
    <div className={style.container}>
        <section>
            <h3>지금 추천하는 도서</h3>
            {recommendedBooks.map((book) => <BookItem key={book.id} {...book} />)}
        </section>
        <section>
            <h3>등록된 모든 도서</h3>
            {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
        </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}