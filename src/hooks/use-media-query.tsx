import { useSyncExternalStore } from 'react';

export type UseMediaQueryProps = ['min-width' | 'max-width', number];

/**
 * 주어진 픽셀값을 기준으로 미디어 쿼리를 구독해서 쿼리 매칭 여부를 반환한다.
 * @returns 미디어 쿼리 매칭 여부
 * @example const md = useMediaQuery(['min-width', 768]); // (min-width: 768px)
 */
export default function useMediaQuery([responsive, width]: UseMediaQueryProps): boolean {
  const query = `(${responsive}: ${width}px)`;

  // SSR 및 matchMedia 미지원 브라우저 대응을 위한 타입 체크를 진행한다.
  const notSupported = typeof window === 'undefined' || typeof matchMedia !== 'function';

  // 1. 브라우저 창 크기가 변경될 때 React에 알려주기 위한 함수
  const subscribe = (callback: VoidFunction): VoidFunction => {
    if (notSupported) return () => {}; // 서버에서는 아무 작업도 하지 않는다.

    const mediaQueryList = matchMedia(query);
    const storeChageHandler = () => callback();
    mediaQueryList.addEventListener('change', storeChageHandler);

    return () => mediaQueryList.removeEventListener('change', storeChageHandler);
  };

  // 2. 현재 미디어 쿼리 값을 클라이언트에서 동기적으로 읽어온다.
  const getSnapshot = (): boolean => (notSupported ? false : matchMedia(query).matches);

  // 3. 서버에서 렌더링할 때는 SSR 대응을 위해 무조건 false(매칭 실패)를 반환한다.
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
