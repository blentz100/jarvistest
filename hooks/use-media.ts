// https://github.com/streamich/react-use/blob/e53ca94a0b1f20270b0f75dc2ca1fecf1e119dde/src/useMedia.ts

import { useEffect, useState } from "react";

const getInitialState = (query: string, defaultState?: boolean): boolean => {
  if (defaultState !== undefined) {
    return defaultState;
  }

  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }

  return false;
};

export const useMedia = (query: string, defaultState?: boolean): boolean => {
  const [state, setState] = useState(getInitialState(query, defaultState));

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    // TODO: switch to more modern `addEventListener()`
    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};
