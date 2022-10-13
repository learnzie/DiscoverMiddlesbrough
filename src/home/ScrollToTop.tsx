import { useEffect } from "react";
import { Icon } from "@iconify/react";

const ScrollToTop = ({ show }: { show: boolean }) => {
  const moveUp = () => window.scrollTo(0, 0);

  useEffect(() => {
    moveUp();
  }, []);

  if (!show) return null;

  return (
    <div className="scroll-up" onClick={moveUp}>
      <Icon icon="akar-icons:chevron-up" />
    </div>
  );
};

export default ScrollToTop;
