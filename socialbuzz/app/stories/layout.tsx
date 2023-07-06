export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-800">
        {children}
    </div>
  );
}