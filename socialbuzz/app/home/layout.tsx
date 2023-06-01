import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
        <div className="flex flex-row w-screen h-screen">
          <div className="max-w-[90px] min-w-[0]
          flex-col basis-2/9 h-full hidden md:flex">
            <SideBar />
          </div>
          <div className="flex flex-col basis-7/9 h-full w-full">
            <Header />
            {children}
            <Footer />
          </div>
      </div>
    </section>
  );
}