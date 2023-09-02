import RootLayout from "../../components/layouts/RootLayout";

const index = () => {
  return (
    <div>
      <h1>News Home Page</h1>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}