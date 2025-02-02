import {useCallback, useRef } from 'react';

interface useScrollProps {
    callback: () => void;
}

export default function useScroll({ callback }: useScrollProps) {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback(
        (node: HTMLLIElement) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(([target]) => {
                if (target.isIntersecting) {
                    callback();
                }
            });
            if (node) observer.current.observe(node);
        },
        [callback],
    );
    return lastItemRef;
}
