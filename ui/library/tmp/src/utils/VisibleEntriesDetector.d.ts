export declare type SetVisibleEntriesCallback<TEntry> = (visible: Map<TEntry, VisibleEntryDetailType>) => void;
export declare type onVisibleEntriesChangeCallback<TEntry> = (args: {
    visibleEntries: IntersectionObserverEntry[];
    hiddenEntries: IntersectionObserverEntry[];
    lastEntries: Map<TEntry, VisibleEntryDetailType>;
}) => Map<TEntry, VisibleEntryDetailType>;
export declare type VisibleEntryDetailType = {
    ratio: number;
    timestamp: number;
};
export default class VisibleEntriesDetector<TEntry> {
    _root: Element;
    _observer: IntersectionObserver;
    _lastVisibleEntries: Map<TEntry, VisibleEntryDetailType>;
    _setVisibleEntries: SetVisibleEntriesCallback<TEntry>;
    _onVisibleEntriesChange: onVisibleEntriesChangeCallback<TEntry>;
    constructor({ root, thresHold, setVisibleEntries, onVisibleEntriesChange, }: {
        root: Element;
        thresHold?: number | Array<number>;
        setVisibleEntries: SetVisibleEntriesCallback<TEntry>;
        onVisibleEntriesChange: onVisibleEntriesChangeCallback<TEntry>;
    });
    observeNodes(selector: string): void;
    destroy(): void;
}
//# sourceMappingURL=VisibleEntriesDetector.d.ts.map