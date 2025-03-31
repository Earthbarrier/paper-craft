import * as React from 'react';
import { PageRotation } from '../utils/rotate';
export declare const DEFAULT_ZOOM_SCALE = 1;
export interface ITransformContext {
    pixelRatio: number;
    rotation: PageRotation;
    scale: number;
    zoomIncrementValue: number;
    setPixelRatio: (devicePixelRatio: number) => void;
    setRotation: (rotation: PageRotation) => void;
    setScale: (scale: number) => void;
    setZoomIncrementValue: (value: number) => void;
}
export declare const TransformContext: React.Context<ITransformContext>;
export declare function useTransformContextProps(): ITransformContext;
//# sourceMappingURL=TransformContext.d.ts.map