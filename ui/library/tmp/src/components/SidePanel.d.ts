import * as React from 'react';
export declare type Props = {
    minWidthPx?: number;
    maxWidthPx?: number;
    className?: string;
    children?: React.ReactNode;
    header?: string | React.ReactElement;
    content?: string | React.ReactElement;
    footer?: string | React.ReactElement;
    isVisible?: boolean;
    dragHandlePosition?: string;
    closeButton?: boolean | React.ReactElement;
    onClose?: () => void;
};
export declare const SidePanel: React.FunctionComponent<Props>;
//# sourceMappingURL=SidePanel.d.ts.map