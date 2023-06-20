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
        <div className=" md:ml-[90px] md:w-[80%] flex justify-center">
          {children}
        </div>
      <Footer />
    </>
  );
}