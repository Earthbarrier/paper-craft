import { Nullable } from '../components/types/utils';
export declare enum ScrollDirection {
    UP = "UP",
    DOWN = "DOWN"
}
export default class ScrollDetector {
    _lastScrollTop: number;
    _lastScrollDirection: Nullable<ScrollDirection>;
    _el: Element;
    _setScrollDirection: (scrollDirection: ScrollDirection) => any;
    _lastScrollTopBeforeDirectionChange: number;
    _scrollThreshold?: number;
    _isScrollThresholdReachedInDirection: Nullable<ScrollDirection>;
    _setScrollThresholdReachedInDirection?: (scrollDirection: Nullable<ScrollDirection>) => any;
    _isAtTop: Nullable<boolean>;
    _setIsAtTop: (isAtTop: boolean) => any;
    constructor(el: Element, setScrollDirection: (scrollDirection: ScrollDirection) => any, setIsAtTop: (isAtTop: boolean) => any, setScrollThresholdReachedInDirection?: (scrollDirection: Nullable<ScrollDirection>) => any, scrollThreshold?: number);
    attachScrollListener(): void;
    detachScrollListener(): void;
    _onScroll: () => void;
}
//# sourceMappingURL=ScrollDirectionDetector.d.ts.map