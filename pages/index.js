import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (term.trim()) {
      router.push(`/search?term=${term.trim()}&searchType=`);
    }
  }
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <form className="flex flex-col items-center mt-40">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png"
          }
          width={300}
          height={100}
          alt="google image"
        />
        <div className="flex items-center justify-center w-full mt-5 max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
            type="text"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col justify-center sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm: space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">Im feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
