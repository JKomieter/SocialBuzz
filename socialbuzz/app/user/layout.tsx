import Footer from "@/components/layout/Footer";
import ProfileChange from "../../components/modals/PopUpModals/ProfileImageModal/ProfileChange";

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