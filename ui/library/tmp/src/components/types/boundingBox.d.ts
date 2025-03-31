export declare type Dimensions = {
    height: number;
    width: number;
};
export declare type Origin = {
    top: number;
    left: number;
};
export declare type Size = Dimensions & Origin;
export declare type BoundingBox = {
    page: number;
} & Size;
export declare type RawBoundingBox = BoundingBox;
export declare function scaleRawBoundingBox(boundingBoxRaw: RawBoundingBox, pageHeight: number, pageWidth: number): BoundingBox;
//# sourceMappingURL=boundingBox.d.ts.map