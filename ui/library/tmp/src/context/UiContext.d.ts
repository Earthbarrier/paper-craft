import * as React from 'react';
import { Nullable } from '../components/types/utils';
export interface IUiContext {
    errorMessage: Nullable<string>;
    isLoading: boolean;
    isShowingHighlightOverlay: boolean;
    isShowingOutline: boolean;
    isShowingTextHighlight: boolean;
    isShowingThumbnail: boolean;
    setErrorMessage: (errorMessage: Nullable<string>) => void;
    setIsLoading: (isLoading: boolean) => void;
    setIsShowingHighlightOverlay: (isShowingHighlightOverlay: boolean) => void;
    setIsShowingOutline: (isShowingOutline: boolean) => void;
    setIsShowingTextHighlight: (isShowingTextHighlight: boolean) => void;
    setIsShowingThumbnail: (isShowingThumbnail: boolean) => void;
}
export declare const UiContext: React.Context<IUiContext>;
export declare function useUiContextProps(): IUiContext;
//# sourceMappingURL=UiContext.d.ts.map