export type TIconName = 'menu-icon' | 'close-icon';

export type TIconElement = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
export type TIconConfig = Record<TIconName, TIconElement>;
