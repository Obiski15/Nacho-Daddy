import { useEffect } from "react";

export function useHandleOutsideClick(showElement, setShowElement, ref) {
  useEffect(() => {
    if (!showElement) return;
    const listeners = ["click", "scroll"];

    function handleOutsideClick(e) {
      // checks if the is a ref and click occured outside the current ref
      if (ref?.current && !ref?.current?.contains(e.target)) {
        setShowElement(false);
      }
    }

    listeners.forEach((listener) =>
      document.addEventListener(listener, handleOutsideClick, true),
    );

    return () => {
      listeners.forEach((listener) =>
        document.removeEventListener(listener, handleOutsideClick, true),
      );
    };
  }, [showElement, setShowElement, ref]);

  return null;
}
