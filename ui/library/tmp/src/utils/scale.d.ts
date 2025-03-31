import { Dimensions } from '../components/types/boundingBox';
export interface IPDFPageProxy {
    userUnit: number;
    view: Array<number>;
}
/**
 * Given a PDFPageProxy, calculates the screen pixel size of the PDF page at 100% scale
 * @param page The PDFPageProxy to calculate size for
 * @returns Pixel size of a page at 100% scale assuming 96DPI display
 */
export declare function computePageDimensions(page: IPDFPageProxy): Dimensions;
//# sourceMappingURL=scale.d.ts.map