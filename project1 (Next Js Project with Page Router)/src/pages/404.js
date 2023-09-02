import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter()

  setTimeout(()=>{
    router.push('/')
  },3000)
  return (
    <div>
      <h2>Ni ra vi</h2>
    </div>
  );
};

export default NotFound;