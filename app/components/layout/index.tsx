import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
