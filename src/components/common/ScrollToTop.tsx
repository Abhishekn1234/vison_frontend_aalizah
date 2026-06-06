import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      variant="borderless"
      className="
        fixed
        right-6
        bottom-6
        z-50
        w-14
        h-14
        rounded-full
        bg-white
        shadow-lg
        flex
        items-center
        justify-center
        hover:scale-110
        transition
      "
    >
      <ChevronUp
        className="text-[#800000]"
        size={30}
      />
    </Button>
  );
}