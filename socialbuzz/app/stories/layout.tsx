export default function RegisterLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-800 md:ml-[250px] md:w-[80%] flex justify-center">
      {children}
    </div>
  );
}