import Footer from "../components/layout/Footer";
import ReelModal from "../components/modals/PopUpModals/ReelModal/ReelModal";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:ml-[150px] md:w-[80%] flex justify-center">
        {children}
      </div>
      <ReelModal />
      <Footer />
    </>
  );
}
