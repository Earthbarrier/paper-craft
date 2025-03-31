import * as React from 'react';
import { pdfjs } from 'react-pdf';
import { Dimensions } from '../components/types/boundingBox';
import { OutlineNode, OutlinePositionsByPageNumberMap, OutlineTarget, OutlineTargetArgs } from '../components/types/outline';
import { Nullable } from '../components/types/utils';
export interface IDocumentContext {
    numPages: number;
    numPagesLoaded: number;
    outline: Nullable<Array<OutlineNode>>;
    outlinePositions: Nullable<OutlinePositionsByPageNumberMap>;
    pageDimensions: Dimensions;
    pdfDocProxy?: pdfjs.PDFDocumentProxy;
    getOutlineTargets: (opts: OutlineTargetArgs) => OutlineTarget[];
    setNumPages: (numPages: number) => void;
    setNumPagesLoaded: (numPagesLoaded: number | ((prevNumPagesLoaded: number) => number)) => void;
    setOutline: (outline: Nullable<Array<OutlineNode>>) => void;
    setOutlinePositions: (outlinePositions: Nullable<OutlinePositionsByPageNumberMap>) => void;
    setPageDimensions: (pageDimensions: Dimensions) => void;
    setPdfDocProxy: (pdfDocProxy: pdfjs.PDFDocumentProxy) => void;
}
export declare const DocumentContext: React.Context<IDocumentContext>;
export declare function useDocumentContextProps(): IDocumentContext;
export declare function buildOutlinePositions(pdfDocProxy: pdfjs.PDFDocumentProxy, outline?: OutlineNode[]): Promise<OutlinePositionsByPageNumberMap>;
//# sourceMappingURL=DocumentContext.d.ts.map