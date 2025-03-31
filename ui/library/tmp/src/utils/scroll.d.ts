import { Dimensions } from '../components/types/boundingBox';
import { PageProperties } from '../components/types/page';
import { Nullable } from '../components/types/utils';
import { PageRotation } from '../utils/rotate';
export declare const PAGE_NAV_TARGET_ID_ROOT = "reader_pg_";
export declare function generatePageIdFromIndex(pageIndex: number | string): string;
export declare function scrollToId(id: string): void;
export declare function scrollToPdfPageIndex(pageIndex: number | string): void;
/**
 * Scroll PDF document to a specific position.
 * @param pageIndex The index of the page where the position locates at
 * @param leftPoints The horizontal distance between the origin and the position (in PDF coordinates)
 * @param bottomPoints The vertical distance between the origin and the position (in PDF coordinates)
 * @param rotation The rotation degree of the document
 */
export declare function scrollToPosition(pageIndex: number, leftPoints: number, bottomPoints: number, rotation?: PageRotation): void;
export declare function getScrollParent(node: HTMLElement): Nullable<HTMLElement>;
export declare function calculateTopPx({ heightWithMarginsInPx, pageIndex, marginTopPx, heightPx, bottomPx, }: {
    heightWithMarginsInPx: number;
    pageIndex: number;
    marginTopPx: number;
    heightPx: number;
    bottomPx: number;
}): number;
/**
 * Get lengths, widths, and margins of a page.
 * @returns a PageProperties object
 */
export declare function getPagePropertiesInPixels(): PageProperties;
export declare function calculateTargetPosition({ scale, leftPoint, bottomPoint, pageDimensions, rotation, }: {
    scale: number;
    leftPoint: number;
    bottomPoint: number;
    pageDimensions: Dimensions;
    rotation: PageRotation;
}): {
    leftPx: number;
    topPx: number;
};
//# sourceMappingURL=scroll.d.ts.map