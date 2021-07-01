import { computePageSizePx } from "./scale";
import { PdfPageSizeData } from "./types";

describe('computePageSizePx', () => {
  const mockData: PdfPageSizeData = {
    userUnit: 1,
    topLeft: {x: 0, y: 0},
    bottomRight: {x: 612, y: 792}
  };
  it('computes pixel height and width of the PDF', () => {
    const output = computePageSizePx(mockData);
    expect(output.height).toEqual(1056);
    expect(output.width).toEqual(816);
  });
});
