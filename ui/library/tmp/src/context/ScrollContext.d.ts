import * as React from 'react';
import { NodeDestination } from '../components/types/outline';
import { PageNumber } from '../components/types/page';
import { Nullable } from '../components/types/utils';
import { ScrollDirection } from '../utils/ScrollDirectionDetector';
import { VisibleEntryDetailType } from '../utils/VisibleEntriesDetector';
export interface IScrollContext {
    isOutlineTargetVisible: (dest: NodeDestination) => boolean;
    isPageVisible: (pageNumber: PageNumber) => boolean;
    scrollDirection: Nullable<ScrollDirection>;
    visibleOutlineTargets: Map<NodeDestination, VisibleEntryDetailType>;
    visiblePageRatios: Map<number, VisibleEntryDetailType>;
    resetScrollObservers: () => void;
    scrollRoot: Nullable<HTMLElement>;
    setScrollRoot: (root: Nullable<HTMLElement>) => void;
    scrollToOutlineTarget: (dest: NodeDestination) => void;
    setScrollThreshold: (scrollThreshold: Nullable<number>) => void;
    scrollToPage: (pageNumber: PageNumber) => void;
    updateScrollPosition: (zoomMultiplier: number) => void;
    setIsOutlineClicked: (isOutlineGetClicked: boolean) => void;
    scrollThresholdReachedInDirection: Nullable<ScrollDirection>;
    isAtTop: Nullable<boolean>;
    isOutlineClicked: Nullable<boolean>;
    pagesScrolledIntoView: Map<number, VisibleEntryDetailType>;
    setPageScrolledIntoViewThreshold: (threshold: number) => void;
}
export declare const ScrollContext: React.Context<IScrollContext>;
export declare function useScrollContextProps(): IScrollContext;
//# sourceMappingURL=ScrollContext.d.ts.map