/**
 * Consumer of @baseui-portable-repro/web (library).
 * Type-checking this file forces resolution of web's emitted .d.ts,
 * which extend Button.Props from @baseui-portable-repro/ui/Button.
 * If those types aren't portable, tsc -b will fail here.
 */

import { ReduxButton } from '@baseui-portable-repro/web';
import React from 'react';

// Use the component so TS must resolve web's .d.ts (and thus ui/Button types).
export function renderLibraryButton(): React.ReactElement {
  return React.createElement(ReduxButton, { product: 'test' });
}
