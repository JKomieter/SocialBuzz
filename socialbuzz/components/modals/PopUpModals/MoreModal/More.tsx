import useMore from "@/hooks/useMore";
import { useRouter } from "next/navigation";
import { IoSettingsOutline, IoTimerOutline } from "react-icons/io5";
import { useCallback } from "react";
import { GoReport } from "react-icons/go";
import { BsMoon, BsBookmark } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

const Items = [
  {
    title: "Settings",
    icon: IoSettingsOutline,
    href: "/settings",
  },
  {
    title: "Your activity",
    icon: IoTimerOutline,
    href: "/activity",
  },
  {
    title: "Saved",
    icon: BsBookmark,
    href: "/saved",
  },
  {
    title: "Switch appearance",
    icon: BsMoon,
    href: "/appearance",
  },
  {
    title: "Report a problem",
    icon: GoReport,
    href: "/report",
  },
];

const More = () => {
  const more = useMore();
  const router = useRouter();

  const handleRoute = useCallback(
    (href: string) => {
      more.onClose();
      router.push(href);
    },
    [more, router]
  );

  if (!more.open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-neutral-800 text-neutral-200 
            rounded-[16px] absolute z-[9999] w-[280px] h-auto
            bottom-[80px] left-[150px] flex flex-col gap-3 
            overflow-y-hidden items-center transition-all "
    >
      <div className="flex flex-col gap-2 w-full p-2">
        {Items.map((Item) => (
          <div
            key={Item.href}
            className="w-full p-3 hover:bg-slate-800 gap-2
                            transition duration-500 flex items-center rounded-lg cursor-pointer"
            onClick={() => handleRoute(Item.href)}
          >
            <Item.icon size={21} color="#fff" />
            <span>{Item.title}</span>
          </div>
        ))}
      </div>
      <span
        className="w-full p-3 hover:bg-neutral-500 
             border-neutral-400
                transition duration-500  cursor-pointer"
        onClick={() => handleRoute("/switch")}
      >
        Switch accounts
      </span>
      <span
        className="w-full p-3 hover:bg-neutral-500 border-neutral-500
                transition duration-500  cursor-pointer"
        onClick={() => signOut()}
      >
        Log out
      </span>
    </motion.div>
  );
};

export default More;
