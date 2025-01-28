import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import style from "./index.module.css"
export default function SearchableLayout({ children }:{
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [input, setInput] = useState("");

    const q = router.query.q as string;

    useEffect(() => {
        setInput(q || "");
    }, [q])

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const onSubmit = () => {
        if (!input || q === input) {
            return;
        }
        router.push(`/search?q=${input}`);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div>
            <div className={style.searchbar_container}>
                <input
                    value={input}
                    onChange={onChangeSearch}
                    onKeyDown={onKeyDown}
                    placeholder="검색어를 입력하세요 ... "
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>

    )
}

