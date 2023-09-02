import ProductDetails from "@/components/UI/ProductDetails";
import { getData } from "@/components/utils/getData";

const ProductDetailPage = async ({params}) => {
  const {id} =params
  const data = await getData(`http://localhost:5000/watches/${id}`)
  return (
    <div>
      {/* <p>Product id : {data.id}</p>
      <h2>Product Title : {data.name}</h2> */}
      <ProductDetails product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;