import Footer from "@/app/components/layout/Footer";
import ProfileChange from "../components/modals/ProfileImageModal/ProfileChange.tsx/ProfileChange";
import PostInfoModal from "../components/modals/PostInfoModal.tsx/PostInfoModal";

export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileChange />
      <PostInfoModal />
        <div className=" md:ml-[90px] md:w-[80%] flex justify-center">
          {children}
        </div>
      <Footer />
    </>
  );
}