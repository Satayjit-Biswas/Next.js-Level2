import DashboardLayout from "../components/layouts/DashboardLayout";

const admin = () => {
  return (
    <div>
      <h2>This ia Admin page</h2>
    </div>
  );
};

export default admin;

admin.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}