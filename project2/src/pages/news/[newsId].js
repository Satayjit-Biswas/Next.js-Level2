import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetailPage = ({newsData}) => {
    return (
        <div>
            <div>
                <h1>This is news Detail Page :</h1>
                <h3>This is news Detail Page :</h3>
                <p>{newsData?.title}</p>
                <p>{newsData?.id}</p>
            </div>
        </div>
    );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/news`);
    const newses = await res.json();

    const paths = newses.map((news) => ({
        params: { newsId: news.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
    const data = await res.json();

    return {
        props: { newsData: data },
        revalidate: 30,
    };
};
