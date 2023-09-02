import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter()
  return (
    <div>
      Needs Id {router.query.productId}
    </div>
  );
};

export default productId;