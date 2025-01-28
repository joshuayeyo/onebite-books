import Link from "next/link";
import style from "./index.module.css"

export default function BookItem({
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl
} : BookData) {
    return (
        <Link href={`/book/${id}`} className={style.container}>
            <img src={coverImgUrl} />
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subtitle}>{subTitle}</div>
                <br/>
                <div className={style.author}>
                    {author} | {publisher}
                </div>
            </div>
        </Link>
    )
}