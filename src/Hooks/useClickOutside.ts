import { useEffect, useRef } from "react";

const useClickOutside = (elRef: any, callback: any) => {
  const callbackRef = useRef<any>();
  callbackRef.current = callback;
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!elRef?.current?.contains(e.target) && callbackRef.current)
        callbackRef.current(e);
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, elRef]);
};

export default useClickOutside;
