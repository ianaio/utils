/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type SluggerOptions = {
    /** Keep the headings' casing, otherwise make all lowercase. */
    maintainCase?: boolean;
};
export declare type Slugger = {
    /**
     * Takes a Markdown heading like "Josh Cena" and sluggifies it according to
     * GitHub semantics (in this case `josh-cena`). Stateful, because if you try
     * to sluggify "Josh Cena" again it would return `josh-cena-1`.
     */
    slug: (value: string, options?: SluggerOptions) => string;
};
/**
 * A thin wrapper around github-slugger. This is a factory function that returns
 * a stateful Slugger object.
 */
export declare function createSlugger(): Slugger;
//# sourceMappingURL=slugger.d.ts.map

