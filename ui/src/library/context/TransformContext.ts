import * as React from 'react';

import { PageRotation } from '../rotate';

export interface ITransformContext {
  rotation: PageRotation;
  scale: number;
  setRotation: (rotation: PageRotation) => void;
  setScale: (scale: number) => void;
}

export const TransformContext = React.createContext<ITransformContext>({
  rotation: PageRotation.Rotate0,
  scale: 1,
  // TODO: #28926 Log this with an error util instead of returning value
  setRotation: rotation => {
    return rotation;
  },
  setScale: scale => {
    return scale;
  },
});
