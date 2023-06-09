import { useEffect } from "react";

export default function useOutsideAlerter(ref, setDisplay, secondRef = null) {
  // console.log(ref,setDisplay)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref?.current?.contains(event.target) &&
        (!secondRef ||
          (secondRef &&
            secondRef.current &&
            !secondRef.current.contains(event.target))) &&
        !event.path.find((item) => item.id === "popover")
      ) {
        setDisplay(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
