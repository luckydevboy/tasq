import { AddTask, TasksList } from "./components";

const Home = () => {
  return (
    <main className="flex-grow p-4">
      <AddTask />
      <TasksList />
    </main>
  );
};

export default Home;
