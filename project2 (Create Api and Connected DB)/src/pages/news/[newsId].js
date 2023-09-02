import RootLayout from "@/components/Layouts/RootLayout";
import { useSingleNewsesQuery } from "@/redux/api/api";
import { useRouter } from "next/router";

const NewsDetailPage = ({ context }) => {
    const router = useRouter();

    const { data: Singledata } = useSingleNewsesQuery(router.query.newsId);

    return (
        <div>
            <div>
                <p>Post Id: {Singledata?.id}</p>
                <h1>This is news Detail Page :</h1>
                <p>title: {Singledata?.title}</p>
            </div>
        </div>
    );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//     const res = await fetch(`http://localhost:5000/news`);
//     const newses = await res.json();

//     const paths = newses.map((news) => ({
//         params: { newsId: news.id },
//     }));

//     return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context
//     const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//     const data = await res.json();

//     return {
//         props: { newsData: data },
//         revalidate: 30,
//     };
// };

// export const getServerSideProps = async (context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//     const data = await res.json();

//     return {
//         props: { newsData: data },
//     };
// };
