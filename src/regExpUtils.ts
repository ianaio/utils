/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */

import escapeStringRegexp from 'escape-string-regexp';

export function escapeRegexp(string: string): string {
  return escapeStringRegexp(string);
}

