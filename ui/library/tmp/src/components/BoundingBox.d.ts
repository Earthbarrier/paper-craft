import * as React from 'react';
import { BoundingBox as BoundingBoxType } from './types/boundingBox';
export declare type Props = {
    className?: string;
    underlineClassName?: string;
    id?: string;
    isHighlighted?: boolean;
    onClick?: () => void;
    voiceOverLabel?: string;
} & BoundingBoxType;
export declare const BoundingBox: React.FunctionComponent<Props>;
//# sourceMappingURL=BoundingBox.d.ts.map