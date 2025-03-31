/// <reference types="react" />
import './less/index.less';
import { BoundingBox, Props as BoundingBoxProps } from './src/components/BoundingBox';
import { DocumentWrapper, Props as DocumentWrapperProps } from './src/components/DocumentWrapper';
import { DownloadButton, Props as DownloadButtonProps } from './src/components/DownloadButton';
import { HighlightOverlay, Props as HighlightOverlayProps } from './src/components/HighlightOverlay';
import { IconFlag } from './src/components/icon/IconFlag';
import { ArrowFlag } from './src/components/marker/ArrowFlag';
import { ArrowFlagBase, POSITION, PositionType } from './src/components/marker/ArrowFlagBase';
import { Outline } from './src/components/outline/Outline';
import { OutlineItem } from './src/components/outline/OutlineItem';
import { Overlay, Props as OverlayProps } from './src/components/Overlay';
import { PageNumberControl } from './src/components/PageNumberControl';
import { PageProps, PageWrapper, Props as PageWrapperProps } from './src/components/PageWrapper';
import { PrintButton, Props as PrintButtonProps } from './src/components/PrintButton';
import { Props as SidePanelProps, SidePanel } from './src/components/SidePanel';
import { Thumbnail } from './src/components/thumbnails/Thumbnail';
import { ThumbnailList } from './src/components/thumbnails/ThumbnailList';
import { BoundingBox as BoundingBoxType, Dimensions, Origin, RawBoundingBox, scaleRawBoundingBox, Size } from './src/components/types/boundingBox';
import { NodeDestination, OutlineNode } from './src/components/types/outline';
import { PageProperties, PageReference } from './src/components/types/page';
import { Nullable } from './src/components/types/utils';
import { ZoomInButton } from './src/components/ZoomInButton';
import { ZoomOutButton } from './src/components/ZoomOutButton';
import { ContextProvider, Props as ContextProviderProps } from './src/context/ContextProvider';
import { DocumentContext, IDocumentContext } from './src/context/DocumentContext';
import { IPageRenderContext, PageRenderContext } from './src/context/PageRenderContext';
import { IScrollContext, ScrollContext } from './src/context/ScrollContext';
import { DEFAULT_ZOOM_SCALE, ITransformContext, TransformContext } from './src/context/TransformContext';
import { IUiContext, UiContext } from './src/context/UiContext';
import { PercentFormatter } from './src/utils/format';
import { RENDER_TYPE } from './src/utils/reader-utils';
import { isSideways, PageRotation, rotateClockwise, rotateCounterClockwise } from './src/utils/rotate';
import { generatePageIdFromIndex, scrollToId, scrollToPdfPageIndex } from './src/utils/scroll';
import { computeBoundingBoxStyle, computePageStyle, getPageHeight, getPageWidth } from './src/utils/style';
export type { BoundingBoxProps, BoundingBoxType, ContextProviderProps, Dimensions, DocumentWrapperProps, DownloadButtonProps, HighlightOverlayProps, IDocumentContext, IPageRenderContext, IScrollContext, ITransformContext, IUiContext, NodeDestination, Nullable, Origin, OutlineNode, OverlayProps, PageProperties, PageProps, PageReference, PageRotation, PageWrapperProps, PositionType, PrintButtonProps, RawBoundingBox, SidePanelProps, Size, };
export { ArrowFlag, ArrowFlagBase, BoundingBox, computeBoundingBoxStyle, computePageStyle, ContextProvider, DEFAULT_ZOOM_SCALE, DocumentContext, DocumentWrapper, DownloadButton, generatePageIdFromIndex, getPageHeight, getPageWidth, HighlightOverlay, IconFlag, isSideways, Outline, OutlineItem, Overlay, PageNumberControl, PageRenderContext, PageWrapper, PercentFormatter, POSITION, PrintButton, RENDER_TYPE, rotateClockwise, rotateCounterClockwise, scaleRawBoundingBox, ScrollContext, scrollToId, scrollToPdfPageIndex, SidePanel, Thumbnail, ThumbnailList, TransformContext, UiContext, ZoomInButton, ZoomOutButton, };
declare const _default: {
    BoundingBox: import("react").FunctionComponent<BoundingBoxProps>;
    computeBoundingBoxStyle: typeof computeBoundingBoxStyle;
    computePageStyle: typeof computePageStyle;
    ContextProvider: import("react").FunctionComponent<ContextProviderProps>;
    DEFAULT_ZOOM_SCALE: number;
    DocumentContext: import("react").Context<IDocumentContext>;
    DocumentWrapper: import("react").FunctionComponent<DocumentWrapperProps>;
    DownloadButton: import("react").FunctionComponent<DownloadButtonProps>;
    ArrowFlag: import("react").FunctionComponent<{
        boundingBoxes: BoundingBoxType[];
        className?: string | undefined;
        label?: string | undefined;
    }>;
    ArrowFlagBase: import("react").FunctionComponent<{
        className?: string | undefined;
        flagWidth?: number | undefined;
        label?: string | undefined;
        originTop?: number | undefined;
        position?: PositionType | undefined;
        tailLength?: number | undefined;
        tailWidgth?: number | undefined;
    }>;
    PrintButton: import("react").FunctionComponent<PrintButtonProps>;
    generatePageIdFromIndex: typeof generatePageIdFromIndex;
    getPageHeight: typeof getPageHeight;
    getPageWidth: typeof getPageWidth;
    HighlightOverlay: import("react").FunctionComponent<HighlightOverlayProps>;
    IconFlag: import("react").FunctionComponent<{
        children?: import("react").ReactNode;
        className?: string | undefined;
        headerPosition?: PositionType | undefined;
    }>;
    isSideways: typeof isSideways;
    Outline: import("react").FunctionComponent<{}>;
    OutlineItem: import("react").FunctionComponent<{
        items?: OutlineNode[] | undefined;
        onClick?: ((dest: NodeDestination) => void) | undefined;
    }>;
    Overlay: import("react").FunctionComponent<OverlayProps>;
    PageNumberControl: import("react").FunctionComponent<import("./src/components/PageNumberControl").Props>;
    PageRenderContext: import("react").Context<IPageRenderContext>;
    PageRotation: typeof PageRotation;
    PageWrapper: import("react").FunctionComponent<PageWrapperProps>;
    POSITION: {
        readonly LEFT: "LEFT";
        readonly RIGHT: "RIGHT";
    };
    SidePanel: import("react").FunctionComponent<SidePanelProps>;
    PercentFormatter: Intl.NumberFormat;
    RENDER_TYPE: {
        readonly MULTI_CANVAS: "multi-canvas";
        readonly SINGLE_CANVAS: "single-canvas";
    };
    rotateClockwise: typeof rotateClockwise;
    rotateCounterClockwise: typeof rotateCounterClockwise;
    scaleRawBoundingBox: typeof scaleRawBoundingBox;
    scrollToId: typeof scrollToId;
    scrollToPdfPageIndex: typeof scrollToPdfPageIndex;
    Thumbnail: import("react").FunctionComponent<{
        pageNumber: number;
    }>;
    ThumbnailList: import("react").FunctionComponent<any>;
    ScrollContext: import("react").Context<IScrollContext>;
    TransformContext: import("react").Context<ITransformContext>;
    UiContext: import("react").Context<IUiContext>;
    ZoomInButton: import("react").FunctionComponent<import("./src/components/ZoomInButton").Props>;
    ZoomOutButton: import("react").FunctionComponent<{}>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map