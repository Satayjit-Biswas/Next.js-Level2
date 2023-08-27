import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter()
  return (
    <div>
      <h1>News NO {router.query.newsId}</h1>
    </div>
  );
};

export default NewsDetails;