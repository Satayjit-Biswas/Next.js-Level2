import Head from "next/head";
import Image from "next/image";
import RootLayout from "../components/layouts/RootLayout";
const HomePage = () => {
    return (
        <>
          <div>
            <Head>
              <title>Home page</title>
            </Head>
          </div>
            <h2>Home Page</h2>
            <div>
              <img src="https://www.classicinformatics.com/hubfs/full-stack%20developer.png" width="100%" alt="" srcset="" />

              <Image src="https://www.classicinformatics.com/hubfs/full-stack%20developer.png" width={500} height={500} alt="" layout="responsive" ></Image>
            </div>
        </>
    );
};
export default HomePage;
HomePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
