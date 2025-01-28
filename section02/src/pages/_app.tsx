import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const onClickButton = () => {
        router.push("/test")
    };

    // 특정 페이지 pre-fetch
    useEffect(() => {
        router.prefetch("/test");
    }, []);
  return (
    <>
      <header>
          <Link href={"/"}>index</Link>
          &nbsp;
          {/* prefetch={false}로 설정하면 해당 페이지는 prefetch 되지 않음 */}
          <Link href={"/search"} prefetch={false}>search</Link>
          &nbsp;
          <Link href={"/book/1"}>book/1</Link>
          <div>
              <button onClick={onClickButton}>/test 페이지로 이동</button>
          </div>
      </header>
      <Component {...pageProps} />
    </>);
}
