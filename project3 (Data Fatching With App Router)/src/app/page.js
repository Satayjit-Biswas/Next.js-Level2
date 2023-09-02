import Products from "@/components/UI/Products";
import { getData } from "@/components/utils/getData";

const HomePage = async () => {
    const data = await getData() 
    // console.log(data);
    return (
        <div>
            <h1 className="text-4xl text-center my-10">
                Welcome To Watch Gallery
            </h1>
            <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
                {data.map((product) => (
                    <Products key={product.id} product={product}></Products>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
