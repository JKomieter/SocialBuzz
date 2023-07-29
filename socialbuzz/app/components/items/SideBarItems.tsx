"use client";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import useCreate from "@/app/hooks/useCreate";
import { useNotification } from "@/app/hooks/useNotification";
import { useSearch } from "@/app/hooks/useSearch";

interface SideBarItemsProps {
  name: string;
  icon: IconType;
  href: string;
  showFooter: boolean;
  unRead?: boolean;
  mutateCount?: any;
  size: number;
  showName: boolean;
}

const SideBarItems: React.FC<SideBarItemsProps> = ({
  name,
  icon: Icon,
  href,
  showFooter,
  unRead,
  mutateCount,
  size,
  showName,
}) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const create = useCreate();
  const notification = useNotification();
  const search = useSearch();

  const handleClick = useCallback(() => {
    // open the create modal
    if (href === "/create") return create.onOpen();

    // open the notification modal
    if (href === "/notifications") {
      search.onClose();
      return notification.isOpen
        ? notification.onClose()
        : notification.onOpen();
    }

    if (href === "/search") {
      notification.onClose();
      return search.isOpen ? search.onClose() : search.onOpen();
    }

    //navigate to href
    router.push(href as string);
  }, [create, href, notification, router, search]);

  const handleHover = useCallback(() => {
    if (show == true) {
      setShow(false);
      return;
    }
    setShow(true);
  }, [show]);

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`cursor-pointer rounded-lg p-3 hover:bg-neutral-700
            flex items-center transition duration-500 hover:scale-105 gap-2
            ${showName && "w-full"}`}
      onClick={handleClick}
      style={{ borderWidth: "0" }}
    >
      <Icon size={size} color="#fff" className="text-red-500" />
      {name === "Notifications" && unRead && (
        <div
          className="absolute top-96.6 right-[20.5px] 
                    w-3 h-3 bg-red-600 rounded-full"
        ></div> 
      )}
      {showName && (
        <p className="lg:flex text-sm hidden text-neutral-100">{name}</p>
      )}
    </div>
  );
};

export default SideBarItems;
