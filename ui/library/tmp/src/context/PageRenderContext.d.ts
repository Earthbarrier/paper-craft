import * as React from 'react';
import { pdfjs } from 'react-pdf';
import { PageNumber } from '../components/types/page';
import { Nullable } from '../components/types/utils';
import { VisibleEntryDetailType } from '../utils/VisibleEntriesDetector';
export declare type RenderState = {
    promise: Promise<string>;
    objectURL: Nullable<string>;
};
export declare type PageNumberToRenderStateMap = Map<number, RenderState>;
export interface IPageRenderContext {
    pageRenderStates: PageNumberToRenderStateMap;
    getObjectURLForPage: (pageNumber: PageNumber) => Nullable<string>;
    isBuildingObjectURLForPage: (pageNumber: PageNumber) => boolean;
    isFinishedBuildingAllPagesObjectURLs: () => boolean;
    buildObjectURLForPage: (pageNumber: PageNumber) => Promise<string>;
}
export declare const PageRenderContext: React.Context<IPageRenderContext>;
export declare function usePageRenderContextProps({ pdfDocProxy, pixelRatio, scale, visiblePageRatios, }: {
    pdfDocProxy?: pdfjs.PDFDocumentProxy;
    pixelRatio: number;
    scale: number;
    visiblePageRatios: Map<number, VisibleEntryDetailType>;
}): IPageRenderContext;
export declare function getNeighboringPages(pages: number[], numTotalPages: number): number[];
export declare function getPriorityQueue(visiblePages: number[], numPages: number): number[];
//# sourceMappingURL=PageRenderContext.d.ts.map