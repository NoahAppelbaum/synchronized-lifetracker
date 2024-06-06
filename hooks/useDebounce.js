import { useRef,useEffect, useMemo } from "react";
import debounce from "lodash.debounce";


/**  Custom hook for returning a stateful debounced callback
 * code from Nadia Makarevich, via
 * her blog https://www.developerway.com/posts/debouncing-in-react#part2
 */
export default function useDebounce () {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
};
