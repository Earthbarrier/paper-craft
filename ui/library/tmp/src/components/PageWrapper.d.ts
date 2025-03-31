import * as React from 'react';
import { RenderType } from '../utils/reader-utils';
import { HighlightOverlay } from './HighlightOverlay';
import { Overlay } from './Overlay';
declare type RenderFunction = (props: any) => React.ReactNode;
/**
 * A subset of react-pdf's Page component props exposed by this wrapper
 */
export declare type PageProps = {
    error?: string | React.ReactElement | RenderFunction;
    loading?: string | React.ReactElement | RenderFunction;
    noData?: string | React.ReactElement | RenderFunction;
    pageIndex: number;
};
export declare type Props = {
    className?: string;
    loadingContentForBuildingImage?: React.ReactElement;
    children?: React.ReactElement<typeof HighlightOverlay | typeof Overlay>;
    renderType: RenderType;
} & PageProps;
export declare const PageWrapper: React.FunctionComponent<Props>;
export {};
//# sourceMappingURL=PageWrapper.d.ts.map