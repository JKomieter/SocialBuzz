export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white h-screen">
      {children}
    </section>
  );
}