export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-neutral-800">
        {children}
    </div>
  );
}