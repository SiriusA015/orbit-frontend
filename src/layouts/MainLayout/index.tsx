import { ReactNode } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div
        className="lg:h-screen relative flex flex-col overflow-auto"
        style={{
          background: `linear-gradient(180deg, #2D2D2D 0%, #4B4B4B 100%)`,
        }}
      >
        <Header />
        <div className="h-full flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
