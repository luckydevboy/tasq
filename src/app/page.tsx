import { redirect } from "next/navigation";

const Home = () => {
  redirect("/tasks");
  return <></>;
};

export default Home;
