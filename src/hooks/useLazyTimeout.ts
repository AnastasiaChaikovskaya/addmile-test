import { useCallback, useEffect, useRef } from 'react';

type TUseLazyTimeoutCallback = () => void;

type TUseLazyTimeout = (delay: number) => {
  timeout: (callback: TUseLazyTimeoutCallback) => void;
  stop: () => void;
};

/**
 * Custom common react hook to use timeout in correct way.
 * It will store timeout in ref and will cleanup unfinished timeout on unmount.
 * @remark This hook is called `lazy` because it will not set timeout right after initialization.
 * Hook returns callback which allows to set it manually in event handler etc.
 * @param delay timeout delay.
 * @returns ready to use react timeout callback function.
 */
export const useLazyTimeout: TUseLazyTimeout = (delay) => {
  const timeoutReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stop = useCallback(() => {
    if (timeoutReference.current !== null) {
      clearTimeout(timeoutReference.current);
      timeoutReference.current = null;
    }
  }, []);

  useEffect(() => {
    return stop;
  }, [stop]);

  const lazyTimeout = (callback: TUseLazyTimeoutCallback) => {
    stop();
    timeoutReference.current = setTimeout(callback, delay);
  };

  return { timeout: lazyTimeout, stop };
};
