export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      {children}
    </section>
  );
}