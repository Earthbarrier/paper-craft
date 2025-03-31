import * as React from 'react';
export declare const POSITION: {
    readonly LEFT: "LEFT";
    readonly RIGHT: "RIGHT";
};
export declare type PositionType = typeof POSITION[keyof typeof POSITION];
declare type Props = {
    className?: string;
    flagWidth?: number;
    label?: string;
    originTop?: number;
    position?: PositionType;
    tailLength?: number;
    tailWidgth?: number;
};
export declare const ArrowFlagBase: React.FunctionComponent<Props>;
export {};
//# sourceMappingURL=ArrowFlagBase.d.ts.map