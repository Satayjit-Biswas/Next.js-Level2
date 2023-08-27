import { useRouter } from "next/router";

const CatchAllRoutes = () => {
  const router = useRouter()
  return (
    <div>
      <h2>CatchAllRoutes No : {router.query.slug}</h2>
    </div>
  );
};

export default CatchAllRoutes;