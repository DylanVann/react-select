// @flow
import React, { type Node } from 'react';
import { tw } from 'twind';

import type { CommonProps } from '../types';

export type PlaceholderProps = CommonProps & {
  /** The children to be rendered. */
  children: Node,
  /** props passed to the wrapping element for the group. */
  innerProps: { [string]: any },
};

export const placeholderCSS = ({
  theme: { spacing, colors },
}: PlaceholderProps) => ({
  label: 'placeholder',
  color: colors.neutral50,
  marginLeft: `calc(${spacing.baseUnit} / 2)`,
  marginRight: `calc(${spacing.baseUnit} / 2)`,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});

const Placeholder = (props: PlaceholderProps) => {
  const { children, className, cx, getStyles, innerProps } = props;
  return (
    <div
      className={cx(
        {
          placeholder: true,
        },
        tw`${() => getStyles('placeholder', props)}`,
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default Placeholder;
