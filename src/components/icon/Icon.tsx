'use client';

import React, { FC, SVGAttributes, useMemo } from 'react';

import { TIconName } from './types';
import { IconConfig } from './config';

interface IIconProps extends SVGAttributes<SVGElement> {
  name: TIconName;
}

export const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const Component = useMemo(() => IconConfig[name], [name]);
  return <Component {...props} />;
};
