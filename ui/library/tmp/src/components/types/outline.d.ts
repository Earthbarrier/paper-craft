import { PageRotation } from '../../utils/rotate';
import { Dimensions } from './boundingBox';
import { Nullable } from './utils';
export declare type NodeDestination = Nullable<string> | any[];
export declare type OutlineNode = {
    title: string;
    bold: boolean;
    italic: boolean;
    color: Uint8ClampedArray;
    dest: NodeDestination;
    url: Nullable<string>;
    unsafeUrl: string | undefined;
    newWindow: boolean | undefined;
    count: number | undefined;
    items: any[];
};
export declare type OutlinePosition = {
    pageNumber: number;
    dest: string;
    leftPoint: number;
    bottomPoint: number;
};
export declare type OutlinePositionsByPageNumberMap = Map<number, OutlinePosition[]>;
export declare type OutlineTarget = {
    dest: string;
    leftPx: number;
    topPx: number;
};
export declare type OutlineTargetArgs = {
    pageNumber?: number;
    pageIndex?: number;
    scale: number;
    rotation: PageRotation;
    pageDimensions: Dimensions;
};
//# sourceMappingURL=outline.d.ts.map