import Footer from "@/app/components/layout/Footer";
import SideBar from "@/app/components/layout/SideBar";

export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row">
          <div className="max-w-[90px] min-w-[0]
          flex-col basis-2/9 h-screen hidden md:flex">
            <SideBar />
          </div>
          <div className="flex flex-col basis-7/9 h-full w-full">
            {children}
          </div>
      </div>
      <Footer />
    </div>
  );
}