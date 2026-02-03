import { Button as BaseButton } from '@base-ui/react/button';
import type { CSSProperties } from 'react';

const defaultStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  borderRadius: '0.375rem',
  border: '1px solid transparent',
  cursor: 'pointer',
  color: 'white',
  backgroundColor: 'blue',
};

export function Button({ style, ...props }: Button.Props) {
  return <BaseButton {...props} style={{ ...defaultStyle, ...style }} />;
}

export declare namespace Button {
  export interface Props extends BaseButton.Props {}
}
