import RootLayout from "@/components/Layouts/RootLayout";
import Allnews from "@/components/UI/Allnews";
import Banner from "@/components/UI/Banner";
import Head from "next/head";

const HomePage = ({ allnewsData }) => {
    return (
        <>
            <Head>
                <title>PH-News Portal</title>
                <meta
                    name="description"
                    content="This is news portal of programming hero made by next-js"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <Allnews allnewsData={allnewsData}></Allnews>{" "}
        </>
    );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:5000/news");
//     const data = await res.json();

//     return {
//         props: { allnewsData: data },
//         revalidate: 30,
//     };
// };


export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();

  return {
      props: { allnewsData: data },
      // revalidate: 30,
  };
};
