import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import response from "../response";

export default function search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // change mockData to false if you want actual api call
  const mockData = true;
  const data = mockData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
