export declare const RENDER_TYPE: {
    readonly MULTI_CANVAS: "multi-canvas";
    readonly SINGLE_CANVAS: "single-canvas";
};
export declare type RenderType = typeof RENDER_TYPE[keyof typeof RENDER_TYPE];
export declare type RenderMode = 'canvas' | 'none';
export declare function getRenderMode(renderType: RenderType): RenderMode;
export declare function getClassNameSuffixFromRenderType(renderType: RenderType): string;
//# sourceMappingURL=reader-utils.d.ts.map