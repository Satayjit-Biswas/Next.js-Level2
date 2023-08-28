import RootLayout from "../../components/layouts/RootLayout";

const news = () => {
  return (
    <div>
      
    </div>
  );
};

export default news;

news.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}