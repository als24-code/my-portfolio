import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);

      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
