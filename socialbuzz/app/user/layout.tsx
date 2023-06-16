import Footer from "@/app/components/layout/Footer";
import SideBar from "@/app/components/layout/SideBar";
import ProfileChange from "../components/modals/ProfileImageModal/ProfileChange.tsx/ProfileChange";

export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileChange />
      <div className="flex flex-row">
          <div className="max-w-[90px] min-w-[0]
          flex-col basis-2/9  hidden md:flex">
            <SideBar />
          </div>
          <div className="flex flex-col basis-7/9 w-full">
            {children}
          </div>
      </div>
      <Footer />
    </>
  );
}