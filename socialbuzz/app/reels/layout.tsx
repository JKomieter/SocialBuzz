
export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className=" md:ml-[90px] md:w-[80%] flex justify-center">
        {children}
      </div>
  );
}
