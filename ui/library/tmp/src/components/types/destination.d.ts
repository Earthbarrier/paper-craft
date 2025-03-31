import { PageReference } from './page';
export declare type Destination = {
    dest: string;
    pageIndex: number;
    pageNumber: number;
};
/**
 * This class is the definition of the first item when Destination is returned as an array.
 * It is created based on the same class in 'react-pdf' library:
 * https://github.com/wojtekmaj/react-pdf/blob/ca4453f123af51e2faed39a8a62800901030459a/src/Ref.js
 */
export declare class Ref implements PageReference {
    num: number;
    gen: number;
    constructor({ num, gen }: PageReference);
    toString(): string;
}
//# sourceMappingURL=destination.d.ts.map